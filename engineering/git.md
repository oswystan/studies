# git branch strategy

- working on master
- create a `release/vx.x.x` and a tag named `vx.x.x`for delivery
- when there is a bug on `release/vx.x.x` fix it on master and then cherry-pick it to release/vx.x.x
- use `git describe --tags` for you final version number, it can give an label like this: `v0.0.3-2-g7a23028` or just `v0.0.3`

