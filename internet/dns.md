# work flow

```shell
sudo apt install dnsmasq -y

## add dns server: 
##     server=114.114.114.114
## uncomment the following options
##     log-queries
sudo vim /etc/dnsmasq.conf

## change bootstrap options, by comment the following command
##     DNSMASQ_OPTS="$DNSMASQ_OPTS --local-service"
sudo vim /etc/init.d/dnsmasq

## add your own domain name in /etc/hosts
10.1.1.1 myservice.com

# run dnsmasq
sudo service dnsmasq restart

# test on another host
dig myservice.com @dnsmasq-server-ip

```

# reference

[dnsmasq tips and tricks](https://www.linux.com/learn/intro-to-linux/2018/2/advanced-dnsmasq-tips-and-tricks)

