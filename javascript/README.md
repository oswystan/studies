## NODE

### install 

```
## USE nvm to manage the node version 
git clone https://github.com/creationix/nvm.git
cd nvm
./install.sh

nvm ls-remote                       ## list avaliable version for now.

nvm install --lts                   ## install latest lts version
nvm install v0.10.32                ## Install a specific version number
nvm use 0.10                        ## Use the latest available 0.10.x release
nvm run 0.10.32 app.js              ## Run app.js using node v0.10.32
nvm exec 0.10.32 node app.js        ## Run `node app.js` with the PATH pointing to node v0.10.32
nvm alias default 0.10.32           ## Set default node version on a shell

```


## uglifyjs
提供js压缩和美化功能的第三方工具

```
#安装
npm install uglify-js -g

#美化
uglifyjs aaa.js -b --comments=all -o bbb.js

```

## markd

一个markdown  => html 解析工具<BR>
https://github.com/chjj/marked

