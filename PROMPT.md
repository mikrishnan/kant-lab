The current repo represents an initial attempt to build a collection of tools to assist in studying Kant's philosophy.
Tools are SPAs built with Claude Code and then hosted here:
https://mikrishnan.github.io/kant-lab/

The initial attempt was a success and is was expanded to a classroom environment.  For the first session they:
- installed github desktop locally
- downloaded the repo and added a file to a folder with their name in Individuals/
- had claude.ai/code build them an SPA

The original plan was to have them continue by downloading vscode, claude code, and transitioning to a local workflow.
After the first session, I believe this is a mistake - it's too technical an approach and they will be collaborating on edits to an SPA - basically impossible for non-programmers to do successfully (hard to do even as seasoned programmers)

Instead, I want to pivot to the following approach:
- https://mikrishnan.github.io/kant-lab/ will host two categories of widgets
    - finished and approved widgets (the three available now, for example)
    - works in progress
- using github in the browser to create pull requests rather than the desktop version
- focusing on specs as top-level concerns rather than the apps
- proposing changes etc via github issues
- students will assemble into working groups that are building tools they find interesting
    - each working group will need its own playground as well as access to shared resources
    - as progress on a tool continues it can become a candidate for finished/approved widgets
- it's likely that several tools might want to make use of the same set of golden copy data, which might itself be the output of one of the working groups

An intermediately technical person (the professor) will be able to do some of the grunt work behind the scenes - the goal is to get the students feeling like they can build useful things right away, while maintaining a flavor of "doing it the way programmers would"
.
Please sanity check this approach and comment on how viable it is.  Please offer suggestions/alternatives where relevant.

Note: all participants are on a Claude Enterprise license negotiated through the university (except some visiting professors) - API keys are not available but the token budget is generous.

