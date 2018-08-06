# ssh work flow

- version exchange
- key exchange
- user auth
- open channel
- channel request x N
- close channel

# No password login

```shell
$ ssh-keygen -t rsa
$ ssh-copy-id -i user@ip-address
$ ssh user@ip-address
```

