#!/usr/bin/env bash

## add public key to github account
function addkey() {
    ## modify it to your own username and pwd 
    user=""
    pwd=""

    who=`whoami`
    key=`cat ~/.ssh/id_rsa.pub`

    data="{
        \"titlei\": \"$who\",
        \"key\": \"$key\"
    }"

    curl -X POST -d "$data" -H "User-Agent: Chrome" https://$user:$pwd@api.github.com/user/keys
}

############################
addkey
