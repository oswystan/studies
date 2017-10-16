## install on ubuntu

### Prerequisites for ubuntu 14.04

```
sudo apt-get update
sudo apt-get install apt-transport-https ca-certificates
sudo apt-key adv \
               --keyserver hkp://ha.pool.sks-keyservers.net:80 \
               --recv-keys 58118E89F3A912897C070ADBF76221572C52609D

echo "deb https://apt.dockerproject.org/repo ubuntu-trusty main" | sudo tee /etc/apt/sources.list.d/docker.list

sudo apt-get update

apt-cache policy docker-engine
sudo apt-get install linux-image-extra-$(uname -r) linux-image-extra-virtual


```

### install docker-engine

```
sudo apt-get install docker-engine
sudo service docker start
```

## bugfix
```
$ sudo vim /etc/modprobe.d/nf_conntrack.conf
# change the content to 
options nf_conntrack hashsize=262144

# then run 
$ docker info

# modify default docker bridge ip in /etc/default/docker
DOCKER_OPTS="--bip=192.168.1.5/24"
```


## HOWTO

```
docker pull utunbu:14.04
docker images
```

### customize your own images
```
# Write your own Dockerfile and then run 
#
# FROM ubuntu:14.04
# RUN apt-get update \
#     && apt-get install -y xxx
#
# CMD ["/bin/bash"]
#



docker build -t imgname:tag .
```

### 其他有用命令

```
docker run -it --rm /bin/bash           #启动一个bash
docker run -it -p 3000:3000 /bin/bash   #启动bash并映射端口
    --name xxx  #指定一个container名字
    --net xxx   #指定网络类型
    --rm        #指定退出后自动删除
    -P          #映射全部端口到宿主机
 
docker ps -a                #查看所有container信息
docker rmi xxx              #删除一个image
docker rm xxx               #删除一个container
docker start xxx            #重新启动container
docker attach xxx           #重新链接到指定容器
docker rename xxx yyy       #重命名

docker save xxx -o xxx.tar
docker load < xxx.tar

```


### 

## references
[yeasy-gitbook](https://yeasy.gitbooks.io/docker_practice/content/)

[docker-doc](https://docs.docker.com/engine/installation/linux/ubuntulinux/)

