# installation directory structure
```shell
## take a product whatsapp from prober company as an example
└── usr
    └── local
        └── prober
            └── whatsapp
                ├── current -> v3.1
                ├── v1.0
                │   ├── bin
                │   ├── etc
                │   ├── lib
                │   └── log
                ├── v2.0
                │   ├── bin
                │   ├── etc
                │   ├── lib
                │   └── log
                ├── v3.0
                │   ├── bin
                │   ├── etc
                │   ├── lib
                │   └── log
                └── v3.1
                    ├── bin
                    ├── etc
                    ├── lib
                    └── log
```
- many versions under **/usr/local/$COMPANY/$PRODUCT**
- directory **`current`** is a symbolic link to one of versions
- when you want to rollback to the previous version, just relink the current to the version you want to rollback to;
- remove the versions that you don't need it anymore;
- there should be a **`env_setup.sh`** to facilitate restarting / checking status / checking log or anything you needed;

# Make
```shell
$ make help       ## show usage of make
$ make prd        ## production version package: $PRODUCT-prd-$BRANCH-$GITHASH-vx.x.xz
$ make dev        ## development version package: $PRODUCT-dev-$BRANCH-$GITHASH-vx.x.xz
$ make            ## just compile
$ make clean      ## remove obj or some other garbage files
$ make distclean  ## deep cleaning
```

# install
```shell
$ tar --no-same-owner -Jxvf whatsapp-vx.x.tar.xz  -C /
$ cd /usr/local/prober/whatsapp && rm -f  current && ln -s vx.x current
```

# env setup
```shell
$ cd /usr/local/prober/whatsapp && source env_setup.sh
$ whatsapp ps
$ whatsapp restart
$ whatsapp log
```

# rollback to version x.x
```shell
$ cd /usr/local/prober/whatsapp && rm -f current && ln -s vx.x current
$ whatsapp restart
```

# add build-log.txt to the package file as follows
```shell
    version : v0.1
runtime-env : prd
      build : 2018-03-21T12:52:15.825+0000
        git : master-f54f2ae
last-commit : f54f2ae feature: add build-log
```
