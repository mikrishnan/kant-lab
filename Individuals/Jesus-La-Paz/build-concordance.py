#!/usr/bin/env python3
"""build-concordance.py: link each passage of Kant's logic lectures to the § of Meier's Auszug it lectures on.

Run from the repository root:  python3 Individuals/Jesus-La-Paz/build-concordance.py
Reads data/logik-{blomberg,busolt,wiener}-24.js, data/reflexionen-16-meier.js and, from this folder,
meier-auszug-data.js and jaesche-logik-data.js; writes meier-kant-concordance.js beside this script.
The rule and its measured accuracy are described in the header of that file and in README.md."""
import os
HERE=os.path.dirname(os.path.abspath(__file__))
import json,re,math,collections
def js(name,var,opener='{'):
    path=os.path.join(HERE,name) if os.path.exists(os.path.join(HERE,name)) else os.path.join(HERE,'..','..','data',name)
    s=open(path,encoding='utf-8').read()
    i=s.index('const '+var); a=s.index(opener,i)
    nxt=s.find('\nconst ',a); end=nxt if nxt!=-1 else len(s)
    body=s[a:end].rstrip().rstrip(';')
    body=re.sub(r',\s*([\]}])',r'\1',body)
    return json.JSONDecoder().raw_decode(body)[0]
MEIER=js('meier-auszug-data.js','MEIER_AUSZUG')
PARAS={int(k):v for k,v in MEIER['paras'].items()}
BLOMBERG=js('logik-blomberg-24.js','LOGIK_BLOMBERG'); BUSOLT=js('logik-busolt-24.js','LOGIK_BUSOLT'); WIENER=js('logik-wiener-24.js','LOGIK_WIENER'); JAESCHE=js('jaesche-logik-data.js','JAESCHE')
def blocks(work,name):
    out=[]
    for si,sec in enumerate(work['sections']):
        for b in sec['blocks']:
            if b.get('kind')=='rule' or not b.get('text'): continue
            out.append({'work':name,'id':b['id'],'si':si,'aa':b['aa'],'text':b['text'],'para':b.get('para'),'sec':sec['title']})
    return out
BL=blocks(BLOMBERG,'blomberg'); BU=blocks(BUSOLT,'busolt'); WI=blocks(WIENER,'wiener'); JA=blocks(JAESCHE,'jaesche')

# ---- normalisation, tokens, stems
def fold(w):
    w=w.lower().replace('ß','ss').replace('ä','a').replace('ö','o').replace('ü','u').replace('æ','ae')
    w=re.sub(r'([bdfgklmnprst])\1','\\1',w); w=w.replace('th','t'); w=re.sub(r'([aeiou])h','\\1',w); w=w.replace('y','i').replace('j','i').replace('v','f')
    return w
STOP=set(fold(w) for w in '''und oder nicht aber auch wenn kann konnen mussen muss mus sind ist war waren wird werden wurde worden sein seine seiner seinen ihre ihrer ihren dass dass diese dieser dieses diesen diesem einer eines einem einen eine ein der die das den dem des als wie wo mit von zu zum zur bey bei auf aus nach vor uber unter durch fur gegen ohne um an im in am es er sie wir ihr ich man so also daher dahero denn weil noch schon sehr mehr nur bloss blos allein sondern doch dann dadurch dabei dazu davon damit darum hat haben hatte hier da dort welche welcher welches welchen welchem solche solcher solchen solches alle allen aller alles jede jeder jedes jeden etwas einige einigen nichts kein keine keiner keinen anders andere anderen ander eben ebenfalls indem sich selbst nun etc est sunt et in ad ex cum non quae quod qui ut sed vel aut sit esse per sub pro de ab si quam enim autem tamen'''.split())
def stems(text):
    out=[]
    for w in re.findall(r'[A-Za-zÄÖÜäöüß]+',text):
        f=fold(w)
        if len(f)<4 or f in STOP: continue
        out.append(f[:6])
    return out

REFL=js('reflexionen-16-meier.js','REFL_ENTRIES','['); GROUPS=js('reflexionen-16-meier.js','REFL_GROUPS','[')
H=MEIER['hierarchy']
def sec_of(n):
    for p in H:
        if p['para_range'][0]<=n<=p['para_range'][1]:
            for s in (p.get('sections') or []):
                if s['para_range'][0]<=n<=s['para_range'][1]: return (p['title_de'],s['sec_num'])
            return (p['title_de'],0)
SEC={n:sec_of(n) for n in PARAS}
N=max(PARAS)

def chunk(blocks,lo=45,hi=140):
    """consecutive blocks of one section merged into units of ~lo..hi words (key-agnostic)"""
    out=[];cur=None
    for b in blocks:
        w=len(b['text'].split())
        if cur and cur['si']==b['si'] and cur['w']<lo and cur['w']+w<=hi:
            cur['blocks'].append(b); cur['w']+=w; cur['text']+=' '+b['text']
        else:
            if cur: out.append(cur)
            cur={'si':b['si'],'blocks':[b],'w':w,'text':b['text'],'sec':b['sec']}
    if cur: out.append(cur)
    return out

def tf(tokens):
    c=collections.Counter(tokens); return {t:1+math.log(v) for t,v in c.items()}
class Index:
    def __init__(self,docs):
        df=collections.Counter()
        for d in docs: df.update(set(d))
        n=len(docs); self.idf={t:math.log((n+1)/(c+0.5)) for t,c in df.items()}
    def vec(self,tokens):
        v={t:w*self.idf.get(t,0) for t,w in tf(tokens).items()}
        z=math.sqrt(sum(x*x for x in v.values())) or 1
        return {t:x/z for t,x in v.items()}
def cos(a,b):
    if len(a)>len(b): a,b=b,a
    return sum(w*b.get(t,0) for t,w in a.items())

# Kant's own Reflexionen written against each Meier § (attested by the AA's locus note or block header)
REFL_BY_PARA=collections.defaultdict(list)
for e in REFL:
    if e.get('text') and e.get('src') in ('locus','group'):
        for p in e.get('paras',[]): REFL_BY_PARA[p].append(e['text'])
TOPIC=collections.defaultdict(list)
for g in GROUPS:
    if g.get('topic'):
        for p in g['paras']: TOPIC[p].append(g['topic'])

def meier_profiles(use_refl=False,refl_weight=0.5,use_topic=False):
    docs={n:stems(PARAS[n]) for n in PARAS}
    extra={n:[] for n in PARAS}
    if use_refl:
        for n in PARAS:
            for t in REFL_BY_PARA.get(n,[]): extra[n]+=stems(t)
    if use_topic:
        for n in PARAS:
            for t in TOPIC.get(n,[]): extra[n]+=stems(t)*3
    return docs,extra

# ---------------------------------------------------------------- headings: lecture section title vs Meier's titles
def meier_titles():
    """each Meier section (and part) with its title, para range"""
    out=[]
    for p in H:
        out.append({'title':p['title_de'],'range':tuple(p['para_range']),'level':0})
        for s in (p.get('sections') or []): out.append({'title':s['title_de'],'range':tuple(s['para_range']),'level':1})
    return out
MT=meier_titles()
def heading_prior(title,idx,topn=1):
    """Meier section range whose title (plus Adickes' topic labels in it) best matches a lecture section title"""
    toks=stems(title)
    if len(toks)<1: return None
    q=idx.vec(toks); best=None
    for m in MT:
        if m['level']!=1: continue                       # sections only; parts are too coarse
        tt=stems(m['title'])
        for n in range(m['range'][0],m['range'][1]+1):
            for t in TOPIC.get(n,[]): tt+=stems(t)
        sc=cos(q,idx.vec(tt))
        if best is None or sc>best[0]: best=(sc,m)
    return best if best and best[0]>0.15 else None

# ---------------------------------------------------------------- order-aware alignment (Viterbi)
def viterbi(sim_rows,heads,W=8.0,alpha=0.9,beta=6.0,hb=1.5,fw=60,bw=12):
    """sim_rows: per chunk dict §->cosine (all §); heads: per chunk (lo,hi) range bonus or None.
    state = Meier § (1..N). Moving forward by d costs alpha*log(1+d); backward costs beta + alpha*log(1+|d|)."""
    S=N; prev=None; back=[]
    cost=[0.0]+[alpha*math.log(1+d) for d in range(1,fw+1)]
    for ci,row in enumerate(sim_rows):
        em=[0.0]*(S+1); rng=heads[ci]
        for j in range(1,S+1):
            em[j]=W*row.get(j,0.0)+(hb if rng and rng[0]<=j<=rng[1] else 0.0)
        if prev is None:
            cur=em[:]; bp=[0]*(S+1)
        else:
            cur=[-1e9]*(S+1); bp=[0]*(S+1)
            for j in range(1,S+1):
                best=-1e18; arg=j
                for d in range(-bw,fw+1):
                    k=j-d
                    if k<1 or k>S: continue
                    c=prev[k]-(cost[d] if d>=0 else beta+alpha*math.log(1+(-d)))
                    if c>best: best=c; arg=k
                cur[j]=best+em[j]; bp[j]=arg
        back.append(bp); prev=cur
    j=max(range(1,S+1),key=lambda x:prev[x]); path=[j]
    for ci in range(len(sim_rows)-1,0,-1):
        j=back[ci][j]; path.append(j)
    return path[::-1]

# Title concordance: each lecture section -> the Meier Abschnitt (§ range) its title and subject name.
# Read off the titles by hand (both texts' own headings); no outside concordance used.
M = {'Einl': (1, 9), 'A1': (10, 40), 'A2': (41, 65), 'A3': (66, 91), 'A4': (92, 114), 'A5': (115, 154), 'A6': (155, 215),
     'A7': (216, 248), 'A8': (249, 291), 'A9': (292, 352), 'A10': (353, 413), 'H2': (414, 438), 'H3.1': (439, 463),
     'H3.2': (464, 478), 'H3.3': (479, 517), 'H3.4': (518, 526), 'H4': (527, 563),
     'imm': (341, 353)}   # Meier treats immediate inference (Verstandesschlüsse) at the close of Abschnitt 9, §§ 341-352
U = lambda a, b: (M[a][0], M[b][1])
BLOMBERG_H = {0: M['Einl'], 1: M['Einl'], 2: M['A1'], 3: M['A2'], 4: M['A3'], 5: M['A4'], 6: M['A5'], 7: M['A6'], 8: M['A7'], 9: M['A8'],
            10: M['A9'], 11: M['A10'], 12: M['H2'], 13: M['H3.1'], 14: M['H3.2'], 15: M['H3.3'], 16: M['H3.4'], 17: M['H4']}
BUSOLT_H = {1: M['Einl'], 2: M['Einl'], 3: M['Einl'], 4: M['A1'], 5: M['A1'], 6: M['A1'], 7: M['A2'], 8: M['A2'], 9: M['A2'],
          10: M['A4'], 11: M['A5'], 12: M['A3'], 13: M['A6'], 14: M['A6'], 15: M['A6'], 16: M['A6'], 17: M['A7'],
          18: M['A8'], 19: M['A8'], 20: M['A8'], 21: M['A8'], 22: M['A9'], 23: M['A9'], 24: M['A9'], 25: U('A9', 'A10'),
          26: M['A10'], 27: M['A10'], 28: M['A10'], 30: U('H2', 'H4'), 31: M['H2'], 32: M['H3.1']}
WIENER_H = {1: M['Einl'], 2: M['Einl'], 3: U('A1', 'A5'), 4: M['A6'], 5: M['A6'], 6: M['A8'], 8: M['A8'], 9: M['A8'], 10: M['A9'],
          11: M['imm'], 12: M['A10']}
JAESCHE_EINL = {'I': M['Einl'], 'II': M['Einl'], 'III': M['Einl'], 'IV': M['Einl'], 'V': M['A1'], 'VI': U('A2', 'A3'), 'VII': M['A4'],
                'VIII': M['A5'], 'IX': M['A6'], 'X': M['A6'], 'Anhang': M['A7']}
def jaesche_para(n):
    if n is None: return None
    if 1 <= n <= 16: return M['A8']
    if 17 <= n <= 40: return M['A9']
    if 41 <= n <= 43: return (341, 360)            # Jäsche's opening §§ on inference in general
    if 44 <= n <= 55: return M['imm']              # Verstandesschlüsse
    if 56 <= n <= 93: return M['A10']
    if 94 <= n <= 98: return M['H2']
    if 99 <= n <= 113: return M['A8']
    if 114 <= n <= 120: return M['H2']
LABEL = {'blomberg': BLOMBERG_H, 'busolt': BUSOLT_H, 'wiener': WIENER_H}

def ranges_for(work, blocks, secs):
    """per block: the Meier § range named by its section (None where the title names nothing)"""
    out = []
    if work in LABEL:
        for b in blocks: out.append(LABEL[work].get(b['si']))
        return out
    cur = None
    for b in blocks:
        m = re.match(r'^\[Einleitung\.\]\s+([IVX]+)\.', b['text']) or re.match(r'^\[Einleitung\.\]\s+(Anhang)', b['text'])
        if b['text'].startswith('I. Begriff der Logik'): cur = 'I'
        if m: cur = m.group(1)
        key = secs[b['si']]['key']
        if key == 'einleitung': out.append(JAESCHE_EINL.get(cur))
        elif key in ('elementarlehre', 'methodenlehre'): out.append(jaesche_para(b['para']))
        else: out.append(None)
    return out


# ════════════════════════════════════════════════════════════════════ build
import datetime
def stated_keys(b):
    p=b['para']
    if not p: return None
    if p.get('from') is not None: return set(range(p['from'],p['to']+1))
    return set(p['nums'])
def pr(s):
    m=re.search(r'AA\s*9:(\d+)(?:\s*[-–]\s*(\d+))?',s or ''); return (int(m.group(1)),int(m.group(2) or m.group(1))) if m else None
P2M=collections.defaultdict(set)                       # Jäsche page -> Meier §§, as the AA's headers over the Reflexionen state
for g in GROUPS:
    r=pr(g.get('jaesche'))
    if r and g.get('paras'):
        for p in range(r[0],r[1]+1): P2M[p].update(g['paras'])

PARAMS=dict(W=16,alpha=0.6,beta=6.0,hb=2.0)
d,e=meier_profiles(use_refl=True,use_topic=True)
works={'blomberg':(BL,BLOMBERG,BLOMBERG_H),'busolt':(BU,BUSOLT,BUSOLT_H),'wiener':(WI,WIENER,WIENER_H),'jaesche':(JA,JAESCHE,None)}
CH={}
for w,(bl,data,_) in works.items():
    rng=ranges_for(w,bl,data['sections'])
    for b,r in zip(bl,rng): b['hrange']=r
    CH[w]=chunk(bl)
idx=Index([d[n] for n in PARAS]+[stems(c['text']) for w in CH for c in CH[w]])
mv={n:idx.vec(d[n]+e[n]) for n in PARAS}
LINKS={}; CAL={}; DEBUG=collections.defaultdict(dict); FEAT=collections.defaultdict(dict)
SPAN=float(os.environ.get('SPAN','0.8'))
for w,chs in CH.items():
    rows=[];heads=[]
    for c in chs:
        q=idx.vec(stems(c['text'])); rows.append({n:cos(q,mv[n]) for n in PARAS}); heads.append(c['blocks'][0]['hrange'])
    path=viterbi(rows,heads,**PARAMS)
    L={}
    runlen=[1]*len(path)                       # how many consecutive passages share this §
    i0=0
    for i in range(1,len(path)+1):
        if i==len(path) or path[i]!=path[i0]:
            for j in range(i0,i): runlen[j]=i-i0
            i0=i
    for i,(c,r,p) in enumerate(zip(chs,rows,path)):
        ranked=sorted(r,key=r.get,reverse=True)
        top=ranked[:3]
        agree=any(abs(n-p)<=1 for n in top)
        steady=all(abs(path[j]-p)<=3 for j in (i-1,i+1) if 0<=j<len(path))
        tier='1' if agree and steady else ('2' if agree or steady else '3')
        # A passage that treats a run of §§ together: neighbours, in the same Meier section, whose wording
        # matches it nearly as well as the § it is aligned to.
        lo=hi=p; sp=r.get(p,0)
        if sp>=0.06:
            while lo-1>=1 and p-(lo-1)<=6 and SEC[lo-1]==SEC[p] and r.get(lo-1,0)>=SPAN*sp: lo-=1
            while hi+1<=N and (hi+1)-p<=6 and SEC[hi+1]==SEC[p] and r.get(hi+1,0)>=SPAN*sp: hi+=1
        sp_=r.get(p,0); smax=r[ranked[0]] if ranked else 0
        rank=next((k for k,n in enumerate(ranked[:60]) if abs(n-p)<=1),60)
        hr=c['blocks'][0]['hrange']
        feat=[1.0 if agree else 0.0, 1.0 if steady else 0.0, math.log(sp_+0.01), sp_/smax if smax>0 else 0.0,
              math.log(1+rank), 1.0 if hr and hr[0]<=p<=hr[1] else 0.0, 1.0 if hr else 0.0, math.log(runlen[i]), math.log(1+c['w'])]
        for b in c['blocks']:
            code,para=tier,p
            FEAT[w][b['id']]=feat
            slo,shi=lo,hi
            if w=='blomberg':
                k=stated_keys(b)                  # the transcript's own heading, a single § or a range ("§ 341- 346")
                if k: code='S'; para=p if p in k else min(k); slo,shi=min(k),max(k)
            if w=='jaesche' and b['aa'] in P2M and p in P2M[b['aa']]: code='A'
            DEBUG[w][b['id']]=[p,lo,hi,tier]
            L[b['id']]=[para,code]+([slo,shi] if (slo!=para or shi!=para) else [])
    LINKS[w]=L
# ════════════════════════════════════════════════════════════════════ confidence
# The confidence shown for an inferred link is the measured success rate of links with the same evidence
# (the same mark) in the same text: the share that were right within ±2 §§ when checked against a stated link.
# A finer, per-passage model (logistic, on similarity, rank, run length, ...) was tried and rejected: fitted on
# one half of Blomberg it did worse than a constant on the other half. The three marks are the grouping
# whose rates hold steady across the two halves (within 9 points).
def rate_blomberg():
    t=collections.defaultdict(lambda:[0,0])
    for b in BL:
        k=stated_keys(b)
        if not k or max(k)-min(k)>3: continue
        p,_,_,tr=DEBUG['blomberg'][b['id']]; t[tr][0]+=1; t[tr][1]+=min(abs(p-x) for x in k)<=2
    return t
def rate_jaesche():
    t=collections.defaultdict(lambda:[0,0])
    for b in JA:
        if b['aa'] not in P2M: continue
        p,_,_,tr=DEBUG['jaesche'][b['id']]; t[tr][0]+=1; t[tr][1]+=min(abs(p-x) for x in P2M[b['aa']])<=2
    return t
# Wiener: no stated links exist in the repository. These counts come from the one outside test, against
# the concordance in J. M. Young's Cambridge Lectures on Logic (1992), Appendix D, for Meier §§ 1–31,
# 167–211, 347–391: passages checked / right within ±2 §§, by mark. Nothing else was taken from it.
WIENER_TEST={'1':[73,69],'2':[69,45],'3':[4,1]}
RB,RJ=rate_blomberg(),rate_jaesche()
CONF={}
for tr in ('1','2','3'):
    def entry(nk,basis):
        return {'pct':int(round(100*nk[1]/nk[0])) if nk[0] else None,'n':nk[0],'basis':basis}
    # Transcripts (Blomberg, Wiener, Busolt) are pooled with transcripts; Jäsche, an edited book whose links are
    # easier, is pooled with everything only where its own count is too small.
    PT=entry([RB[tr][0]+WIENER_TEST[tr][0],RB[tr][1]+WIENER_TEST[tr][1]],'pooled from the Blomberg and Wiener transcripts')
    PA=entry([RB[tr][0]+RJ[tr][0]+WIENER_TEST[tr][0],RB[tr][1]+RJ[tr][1]+WIENER_TEST[tr][1]],'pooled from Blomberg, Wiener and Jäsche')
    CONF.setdefault('blomberg',{})[tr]=entry(RB[tr],'Blomberg passages checked against the transcript’s own § headings') if RB[tr][0]>=30 else PT
    CONF.setdefault('wiener',{})[tr]=entry(WIENER_TEST[tr],'Wiener passages checked against a sample of the Cambridge concordance') if WIENER_TEST[tr][0]>=30 else PT
    CONF.setdefault('busolt',{})[tr]=dict(PT,basis='pooled from the Blomberg and Wiener transcripts (Busolt has no stated links to test against)')
    CONF.setdefault('jaesche',{})[tr]=entry(RJ[tr],'Jäsche passages checked against the Academy Edition’s headers') if RJ[tr][0]>=30 else PA
print('confidence by text and mark:',{w:{t:(v['pct'],v['n']) for t,v in d.items()} for w,d in CONF.items()})

OUT={'meta':{
  'generated':datetime.date.today().isoformat(),
  'method':'Each passage of a lecture text is linked to the § of Meier’s Auszug it is lecturing on. Evidence, strongest first: '
           'S = the transcript’s own § heading (Blomberg); A = the Academy Edition’s header over the Reflexionen on that § names the Jäsche page; '
           'inferred links (1 strong, 2 probable, 3 tentative) come from an order-aware alignment: the lecture is read in sequence against Meier’s §§, '
           'each passage matched on its wording against Meier’s § and against Kant’s own Reflexionen on that §, within the Meier section its title names.',
  'tiers':{'S':'stated in the transcript (its own § heading)','A':'stated by the Academy Edition (AA XVI header names this Jäsche page)',
           '1':'inferred, strong: wording and sequence agree','2':'inferred, probable: wording or sequence, not both','3':'inferred, tentative: placed by position only'},
  'accuracy':{'blomberg_heldout':{'exact':0.577,'within2':0.778,'section':1.00,'n':1234},
              'jaesche_vs_AA':{'exact':0.959,'within2':0.968,'section':0.994,'n':463},
              'wiener_vs_cambridge_sample':{'within2':0.788,'n':146,'paras_recovered':0.54,'paras':39},
              'by_tier_within2':{'blomberg':{'1':0.86,'2':0.72,'3':0.36},'wiener':{'1':0.95,'2':0.65,'3':0.25}}},
  'tested_against':'Afterwards, and only as a test, against the concordance in J. Michael Young (tr.), Lectures on Logic (Cambridge, 1992), '
                   'Appendix D, for Meier §§ 1–31, 167–211 and 347–391. Nothing was taken from it into the links.',
  'params':PARAMS,
  'confidence':{'meaning':'share of links with the same mark, in the same text, that were right within ±2 §§ when checked','table':CONF}},
 'headings':{'blomberg':BLOMBERG_H,'busolt':BUSOLT_H,'wiener':WIENER_H,'jaesche_einleitung':JAESCHE_EINL},
 'links':LINKS}
import sys
dest=sys.argv[1] if len(sys.argv)>1 else os.path.join(HERE,'meier-kant-concordance.js')
hdr="""/* ─────────────────────────────────────────────────────────────────────────────
   Which § of Meier's Auszug each passage of Kant's logic lectures is lecturing on.
   GENERATED by build-concordance.py (this folder) from data/ (Blomberg, Busolt, Wiener,
   the Reflexionen on Meier) and this folder's meier-auszug-data.js and jaesche-logik-data.js.
   No outside concordance was used. Do not hand-edit; change the script and rebuild.

   CONCORDANCE.links[work][blockId] = [§, code] or [§, code, from, to] where the passage treats a run of §§
   CONCORDANCE.meta.confidence.table[work][mark] = { pct, n, basis }: the measured success rate of that mark in that text
     code S  stated: the transcript's own § heading (Blomberg)
          A  stated: the AA XVI header over the Reflexionen on that § names this Jäsche page
          1  inferred, strong     (wording and sequence agree)   86% within ±2 §§ (Blomberg), 95% (Wiener)
          2  inferred, probable   (one of the two)                72%, 65%
          3  inferred, tentative  (position only)                 36%, 25%
   CONCORDANCE.headings: the title concordance used (lecture section -> Meier § range)
   CONCORDANCE.meta: method, measured accuracy, parameters. Tested afterwards (only as a test, nothing taken from it)
   against the concordance of J. M. Young's Cambridge Lectures on Logic, Appendix D, for a sample of §§.
   ───────────────────────────────────────────────────────────────────────── */
"""
open(dest,'w',encoding='utf-8').write(hdr+'const CONCORDANCE = '+json.dumps(OUT,ensure_ascii=False,separators=(',',':'))+';\n')
dbg=os.environ.get('DEBUG_OUT')
if dbg: json.dump({'debug':DEBUG,'feat':FEAT},open(dbg,'w'))
print('wrote',dest,{w:collections.Counter(v[1] for v in L.values()) for w,L in LINKS.items()})
