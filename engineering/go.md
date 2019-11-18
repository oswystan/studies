# best practices

- use gometalinter to lint your go code.
-

# go mod

```bash
## add the current directory to GOPATH
## FYI: you can add a file .bashrc in current directory and put the following command into it
export GOPATH="${GOPATH}:$(pwd)"

## init a module with a given name
$ go mod init $projectname

## set proxy and download dependencies
$ export GOPROXY="https://goproxy.cn"
$ go mod tidy

## copy dependencies to vendor directory
$ go mod vendor

## build/test project with vendor
$ go build -mod vendor
$ go test -mod vendor

```

> when you import your own packages, you can use `import $projectname/xxx`
