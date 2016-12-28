##install on macOS
```
brew install redis
```

## run
- 修改默认配置文件redis.conf

```
daemonize yes
requirepass yourpassword
dbfilename /path/to/xxxx.rdb

```

- 运行

```
redis-server /path/to/redis.conf
```