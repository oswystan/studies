# work flow

```shell
sudo apt install dnsmasq -y

## add dns server: server=114.114.114.114
sudo vim /etc/dnsmasq.conf

# run dnsmasq
sudo dnsmasq --no-daemon --log-queries --log-facility=/var/log/dnsmasq.log

# test on another host
dig xxx.com @10.x.x.x

```

