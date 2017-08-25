##实现1000000并发访问
- 修改文件句柄限制：/etc/security/limits.conf

>```
* soft nofile 1048576
* hard nofile 1048576
```

- 端口号限制

```
## 增加IP地址
ifconfig eth0:1 192.168.1.100
...
ifconfig eth0:1 192.168.1.116

setsockopt(listen_fd, SOL_SOCKET, SO_REUSEADDR, &reuseaddr_on, sizeof(reuseaddr_on)
##设置端口复用
setsockopt(listen_fd, SOL_SOCKET, SO_REUSEPORT, &reuseport_on, sizeof(reuseport_on);
```

- 修改fs.file-max

```
#修改/etc/sysctl.conf
fs.file-max = 1048576

#然后执行
sysctl -p

```