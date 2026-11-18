#!/usr/bin/env python3
"""Copy the queue's passages, and nothing else, from the private repository into this folder.

The queue (queue.html) keeps its passages in queues/<queue>/queue.json and each reader's ticks
and notes in queues/<queue>/flags/<login>.json, in the private repository kant-lab-seminar/queues
(queue-config.js). This writes a public, read-only copy of queue.json alone to
queue-snapshot.js, so that anyone can see the passages on the queue page without a token. The
flags, the notes and the readers' names stay private: the copy takes no flag file, and drops
"by" from the record of how the queue was made.

Run it whenever passages are added to the queue, and commit queue-snapshot.js:

    python3 logic-portal/studies/kinds-of-nothing/snapshot-queue.py

It reads with a GitHub token that can see the private repository: GITHUB_TOKEN if set,
otherwise the one git already has for github.com (git credential fill). The token is sent only
to api.github.com and is never written anywhere.
"""
import base64
import json
import os
import re
import subprocess
import sys
import urllib.request
from datetime import datetime, timezone

HERE = os.path.dirname(os.path.abspath(__file__))
OUT = os.path.join(HERE, 'queue-snapshot.js')


def config():
    s = open(os.path.join(HERE, 'queue-config.js'), encoding='utf-8').read()
    get = lambda k: re.search(r"\b" + k + r":\s*'([^']+)'", s).group(1)
    return get('owner'), get('repo'), get('branch'), get('queue')


def token():
    t = os.environ.get('GITHUB_TOKEN')
    if t:
        return t
    out = subprocess.run(['git', 'credential', 'fill'], input='protocol=https\nhost=github.com\n\n',
                         capture_output=True, text=True).stdout
    t = dict(l.split('=', 1) for l in out.splitlines() if '=' in l).get('password')
    if not t:
        sys.exit('No GitHub token: set GITHUB_TOKEN, or sign git in to github.com.')
    return t


def main():
    owner, repo, branch, queue = config()
    path = 'queues/%s/queue.json' % queue
    url = 'https://api.github.com/repos/%s/%s/contents/%s?ref=%s' % (owner, repo, path, branch)
    req = urllib.request.Request(url, headers={'Authorization': 'Bearer ' + token(), 'Accept': 'application/vnd.github+json',
                                               'User-Agent': 'kant-lab-queue-snapshot'})
    r = json.load(urllib.request.urlopen(req, timeout=30))
    q = json.loads(base64.b64decode(r['content']).decode('utf-8'))
    for s in q.get('sources') or []:
        s.pop('by', None)   # a reader's name: it stays in the private repository
    snap = {'saved': datetime.now(timezone.utc).strftime('%Y-%m-%d %H:%M UTC'), 'from': '%s/%s %s' % (owner, repo, path),
            'blob': r['sha'], 'queue': q}
    head = ('/* The queue\'s passages, a public read-only copy of %s/%s %s, made by snapshot-queue.py.\n'
            '   Passages only: no flags, no notes, no readers\' names. Do not hand-edit: rerun the script. */\n') % (owner, repo, path)
    with open(OUT, 'w', encoding='utf-8') as f:
        f.write(head + 'const STUDY_QUEUE_SNAPSHOT = ' + json.dumps(snap, ensure_ascii=False, separators=(',', ':')) + ';\n')
    print('queue-snapshot.js: %d passages, from %s, saved %s' % (len(q.get('items') or []), snap['from'], snap['saved']))


if __name__ == '__main__':
    main()
