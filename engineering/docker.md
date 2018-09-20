# Best practices of dockerfile

- use docker for your build environment: `product_name/build`
- use docker for your prod test environment: `product_name/prd`
- Add `ENTRYPOINT` for the default command executed (typically: `/bin/bash`)
- set `WORKDIR` for the docker image
- `expose` the ports that needed by others
- write a shell script for app-releated operations.
- 

