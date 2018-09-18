# how to use google perf tools

## install

```shell
## on ubuntu18.04
$ sudo apt install google-perftools libgoogle-perftools-dev
$ sudo ln -s /usr/lib/x86_64-linux-gnu/libprofiler.so.0 /usr/lib/libprofiler.so
```

## cpu profiling

```shell
## profiling a.out
$ LD_PRELOAD=/usr/lib/libprofiler.so CPUPROFILE=a.prof ./a.out
## show svg in your browser 
$ google-pprof --web a.out a.prof
```

> You do **NOT** need to do anything in your app, that is GREAT.

## heap profiling

