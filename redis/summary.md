##install on macOS
```
brew install redis
```

## configuration
- 修改默认配置文件redis.conf

```
daemonize yes
requirepass yourpassword
dbfilename xxxx.rdb
dir /path/to/run

```

- run
------
```
redis-server /path/to/redis.conf
```