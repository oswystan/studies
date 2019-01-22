## Useful commands:
```shell
## rename *.c to *.cpp
$ rename 's/.c/.cpp/' *.c

## check port open or close
nmap 1.1.1.1 -p 9999

## get the program which open a spec port
lsof -i :999

## copy ssh pubkey to server authorized_keys
ssh-copy-id user@server

```

## rpm commands
```shell
# 1. How to Check an RPM Signature Package
rpm --checksig xxx.rpm

# 2. How to Install an RPM Package
rpm -ivh xxx.rpm

# 3. How to check dependencies of RPM Package before Installing
rpm -qpR xxx.rpm

# 4. How to Install a RPM Package Without Dependencies
rpm -ivh --nodeps xxx

# 5. How to check an Installed RPM Package
rpm -q xxx

# 6. How to List all files of an installed RPM package
rpm -ql xxx

# 7. How to List Recently Installed RPM Packages
rpm -qa --last

# 8. How to List All Installed RPM Packages
rpm -qa

# 9. How to Upgrade a RPM Package
rpm -Uvh xxx.rpm

# 10. How to Remove a RPM Package
rpm -evv xxx

# 11. How to Remove an RPM Package Without Dependencies
rpm -ev --nodeps xxx

# 12. How to Query a file that belongs which RPM Package
rpm -qf /path/to/xxx

# 13. How to Query a Information of Installed RPM Package
rpm -qi xxx

# 14. Get the Information of RPM Package Before Installing
rpm -qip xxx.rpm

# 15. How to Query documentation of Installed RPM Package
rpm -qdf /path/to/xxx

# 16. How to Verify a RPM Package
rpm -Vp xxx.rpm

# 17. list files in a RPM file
rpm -qpl xxx.rpm


```
[20-practical-examples](https://www.tecmint.com/20-practical-examples-of-rpm-commands-in-linux/)
