## COMMANDS

- rosdep
- roscore
- rosrun
- roslaunch
- rostopic
- rospack
- rosmsg
- roswtf
- roscd
- rosclean
- rosparam
- rosservice
- rosnode
- rossrv
- rosbag


## Concepts

- core
- node
- nodelets：

可以把多个node动态加载到一个进程里面

- package
- service：

实现一对一的通讯

- topic:

通过topic进行通讯的机制是多对多的，也就是多个publisher发送的message将会被多个subscriber收到（每个subscriber都能收到多个publisher的多个消息）

- message

- graph resource name

用于识别node、topic、service、parameter，有三种不同的资源命名方式：<BR>
全局：以`/`开头<BR>
相对：可以在启动的时候设置一个__ns作为相对命名的前缀<BR>
私有：以~开头，对应的全局命名为：`/$node_name/$priv_name` <BR>
匿名：保证全局唯一性

## workflow

```
###########################
## hello,world workflow
###########################
# setup env
source /path/to/setup.bash

# create workspace directory
mkdir ros
cd ros && mkdir src

# create a package
catkin_create_package $pkg_name

# write your source code
vim hello.cpp

# modify package.xml and CMakeLists.txt
vim package.xml
vim CMakelists.txt

# compile
catkin_make

# run
roscore
rosrun $pkg_name hello

```


## Q&A

- 如何启动一个可执行文件的多个实例？各个实例在运行时如何区分自己？
- 

