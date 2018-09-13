# GET INFORMATION FROM DEPLOY.JSON



```bash
## get service name from a specific cluster server
$ cat deploy.json |jq -cr '.[]|select(.name=="dev.ali")|.servers[]|select(.ip=="2.2.2.2")|.service[]'

## list servers in the given cluster
cat deploy.json |jq -cr '.[]|select(.name=="dev.ali")|.servers[]|.user+"@"+.ip'

## list avaliable cluster names
cat deploy.json |jq -cr '.[].name'

## search ali clusters
cat deploy.json |jq -cr '.[]|select(.name|contains("ali"))|.name'

```

