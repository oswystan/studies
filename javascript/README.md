## NODE

### install 

```
## USE nvm to manage the node version 
git clone https://github.com/creationix/nvm.git
cd nvm
./install.sh

nvm ls-remote                       ## list avaliable version for now.

nvm install v0.10.32                ## Install a specific version number
nvm use 0.10                        ## Use the latest available 0.10.x release
nvm run 0.10.32 app.js              ## Run app.js using node v0.10.32
nvm exec 0.10.32 node app.js        ## Run `node app.js` with the PATH pointing to node v0.10.32
nvm alias default 0.10.32           ## Set default node version on a shell

```


## 