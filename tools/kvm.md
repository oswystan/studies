## install on centos6.5

```
wget -O /etc/yum.repos.d/CentOS-Base.repo http://mirrors.aliyun.com/repo/Centos-6.repo
yum makecache

yum update
yum upgrade

、VNC (Virtual Network Computer)是虚拟网络计算机的缩写。VNC 是在基于 UNIX 和 Linux 操作系统的免费的开源软件，远程控制能力强大，高效实用，其性能可以和 Windows 和 MAC 中的任何远程控制软件媲美。

在 Linux 中，VNC 包括以下四个命令：vncconfig，vncserver，vncpasswd。

一、安装gnome桌面环境

如果系统已经安装了gnome桌面环境，此步省略。

# 安装gnome桌面环境

yum groupinstall Desktop -y

二、部署vnc server

# 安装vnc软件包

yum install tigervnc-server.x86_64 tigervnc-server-module.x86_64 -y

# 设置vncserver开机启动

chkconfig vncserver on

# 设置vnc登录密码，密码保存在~/.vnc/passwd

# 如果修改普通用户的vnc密码，要先su切换到此用户下

vncpasswd

# 查看vncserver配置文件

rpm -qc tigervnc-server

# 配置vncserver

vim /etc/sysconfig/vncservers

# 以用户root启动第一个和第二个桌面

VNCSERVERS="1:root 2:root"

# 调整分辨率

VNCSERVERARGS[1]="-geometry 1024x768"

VNCSERVERARGS[2]="-geometry 1024x768"

# 启动vncserver，下面启动了两个桌面

vncserver :1

vncserver :2

# 修改xstartup文件，把最后的twm &改为gnome-session &

# 此文件只有在vncserver启动之后，才会出现，修改后重启vncserver

vim ~/.vnc/xstartup

# 停止vncserver

vncserver -kill :1

vncserver -kill :2

# 配置防火墙

iptables -I INPUT -m state --state NEW -m tcp -p tcp --dport 5901 -j ACCEPT

iptables -I INPUT -m state --state NEW -m tcp -p tcp --dport 5902 -j ACCEPT

service iptables save

至此服务端部署完毕，你可以通过UltraVNC Viewer、TigerVNC Viewer或者RealVNC Viewer访问远程桌面了。

下面介绍下常用操作：

# 批量启动

service vncserver start

# 批量重启

service vncserver restart

# 批量停止

service vncserver stop

# 查看运行的桌面

vncserver -list

```