#!/usr/bin/env bash
###########################################################################
##                     Copyright (C) 2017 wystan
##
##       filename: addkey.sh
##    description: 
##        created: 2017-01-04 22:56:12
##         author: wystan
##
###########################################################################


## add public key to github account
function addkey() {
    ## modify it to your own username and pwd 
    user=""
    pwd=""

    who=`whoami`
    key=`cat ~/.ssh/id_rsa.pub`

    data="{
        \"title\": \"$who\",
        \"key\": \"$key\"
    }"

    curl -X POST -d "$data" -H "User-Agent: Chrome" https://$user:$pwd@api.github.com/user/keys
}


addkey

###########################################################################

