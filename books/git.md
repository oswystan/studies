## 核心概念
- blob：用于存储具体文件内容，是压缩了之后的；
- commit：用于存储用户提交的commit信息
- tree：分目录存放目录下的文件名、mode信息，以及对应版本的blob对象的hash值。

```
# tree对象文件结构
--------------------------------------
[octal file mode]+[space]+[filename+'\0']+[SHA1(20bytes)];
......
[octal file mode]+[space]+[filename+'\0']+[SHA1(20bytes)];
--------------------------------------

# blob文件结构（TODO）

# commit文件结构（TODO）
--------------------------------------
tree $tree_hash
parent $parent_hash
....(多个)
parent $parent_hash
author $auth_name <$email>
committer $commiter_name <$commiter_email>

$comments
--------------------------------------

# tag文件结构（TODO）
--------------------------------------
object $hash
type xxx
tag $tag_name
$comments
$gpg_value
--------------------------------------

```

- tag：记录tag的信息

git会为每个新提交或者修改的blob对象生成一个新的hash，blob对象内容存储在以这个新的hash值命名的文件中（用zlib压缩后存储），同时生成一个新的tree对象，将新的blob对象的hash值存到新的tree对象中，tree对象的内容存放在以新的内容生成的hash命名的文件中（同样是经过zlib压缩后的），然后再为新的tree对象生成一个commit对象，新的commit对象的内容包括：新生成的tree对象的hash，父commit对象的hash，提交的描述信息，提交人以及日期等信息，然后新的commit对象依然存储在以hash值命名的文件中（经过zlib压缩后）。整个git仓的最新的commit对象的hash值存放在 .git/HEAD文件中。这样通过HEAD文件，就可以把整个git提交记录和历史版本找到了。

## 底层命令
- hash-object: 获取输入对象的hash值
- cat-file: 查看一个给定hash值得object内容、大小、类型等信息
- update-index: 更新一个文件到index暂存区中
- write-tree: 将暂存区的内容写入一个树对象
- read-tree: 将树对象读取到暂存区中
- commit-tree: 创建一个提交对象，并且需要为该commit对象提供一个树对象的hash值
- verify-pack: 查看打包内容信息


## 情景分析
- git init / git clone
- git add 
- git commit
- git push 
- git log
- git status
- git gc

## 示例

- 可以通过git log查看提交的commit对象信息
- 根据commit对象的hash值，通过git cat-file -p $hash可以找到对应的tree对象的hash
- 根据tree对象的hash值，通过git cat-file -p $hash可以每个blob对象的hash
- 根据blob对象的hash值，通过git cat-file -p $hash可以查看某个版本的blob对象的内容

```
:> git cat-file -p 298976815a71d3b7b5ec0dd96188cd42300c2592
tree 62f831c1208f89fccff48bb6246f91a486442212
parent 46b0d46647c71130b338ec25cbec2601c298037b
author wangyu10 <wangyu10@le.com> 1490586125 +0800
committer wangyu10 <wangyu10@le.com> 1490586125 +0800

add NOT
:> git cat-file -p 46b0d46647c71130b338ec25cbec2601c298037b
tree 021d1cf8e0498b2eca5f4d4624e715e18904513c
author wangyu10 <wangyu10@le.com> 1490585986 +0800
committer wangyu10 <wangyu10@le.com> 1490585986 +0800

add v1.txt

:> git cat-file -p 021d1cf8e0498b2eca5f4d4624e715e18904513c
100644 blob d86bac9de59abcc26bc7956c1e842237c7581859  v1.txt

:> git cat-file -p d86bac9de59abcc26bc7956c1e842237c7581859
OK

```

对象查找过程：commit对象 => tree对象 => blob对象

注：在commit对象中可以通过parent来跟踪提交历史信息(parent指向了父commit对象的hash)
