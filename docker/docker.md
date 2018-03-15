## install on ubuntu
docker分为社区版（CE）和企业版（EE），其中社区版中会有很多新特性可以体验，比较适合开发人员。

### Prerequisites for ubuntu 16.04
```
## remove old version
sudo apt-get remove docker docker-engine docker.io

## install prerequisites
sudo apt-get install \
    apt-transport-https \
    ca-certificates \
    curl \
    software-properties-common

## add key and repo
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -
sudo add-apt-repository \
   "deb [arch=amd64] https://download.docker.com/linux/ubuntu \
   $(lsb_release -cs) \
   stable"
 
## install
 sudo apt-get update
 sudo apt-get install docker-ce

## add current user to docker group, so you don't need to sudo docker each time
sudo gpasswd -a ${USER} docker
sudo service docker restart

## then relogin the current user

```

reference: [installation](https://docs.docker.com/install/linux/docker-ce/ubuntu/)

### change repo url
```
## 
echo "DOCKER_OPTS=\"--registry-mirror=https://pee6w651.mirror.aliyuncs.com\"" | sudo tee -a /etc/default/docker

## restart dockerd
sudo service docker restart
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
docker run -it ubuntu --rm /bin/bash           #启动一个bash
docker run -it ubuntu -p 3000:3000 /bin/bash   #启动bash并映射端口
    --name xxx  			#指定一个container名字
    --net xxx   			#指定网络类型
    --rm        			#指定退出后自动删除
    -P         		 		#映射全部端口到宿主机
    -v hostdir:dockerdir	#挂在宿主机目录到docker目录
 
docker ps -a                #查看所有container信息
docker rmi xxx              #删除一个image
docker rm xxx               #删除一个container
docker start xxx            #重新启动container
docker attach xxx           #重新链接到指定容器
docker rename xxx yyy       #重命名

docker save xxx -o xxx.tar
docker load < xxx.tar

docker export xxx -o xxx.tar
docker import xxx.tar
docker tag xxx new-xxx

```


### KEYS

```
ctrl + p + q  ## dattach container
```

## references
[yeasy-gitbook](https://yeasy.gitbooks.io/docker_practice/content/)

[docker-doc](https://docs.docker.com/engine/installation/linux/ubuntulinux/)

[private docker registry](http://www.cnblogs.com/cloud-it/p/7070198.html)