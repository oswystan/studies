# best practices

- setup CI/CD pipeline at the beginning of a project
- quick availability of PaaS components, suck as build environment, production environment
- api first
- monitoring everything: CPU, memory, networks, disk storage, app failures, system restart, app restart, app crash
- failure injection into dev environment and production environment to make everyone keep attention to failures and familiar with how to fix them.
- make others depend on the tools you made, but not your time.  make self-service tools(document where to find it and how to use it and keep it simple)
- record failures and analysis after they happened
- make a pipeline to do this automatically: (commit)=>build=>lint=>security-check=>deploy to dev environment=>test=>deploy to prod env
- developing on master branch
- keep your SCM commit as small as possible
- make rollback simple
- visualize everything: dev progress, performance, test results
- put everything in **ONE** repository

