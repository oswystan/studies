# workflow

## installation

```shell
$ npm install --global webpack
$ npm init
$ npm install -D webpack-cli
```

## config

```javascript
// filename: webpack.config.js

module.exports = {
  entry: './index.js',
  path: {
    filename: 'bundle.js',
    path: __dirname + '/dist'
  },
  target: 'web',
  // for watch mode to continously watching input files and bunling them. 
  watch: true,
  // for production output
  mode: 'production'
};

```



## build

```bash
## add new command 'build' for bundle in package.json {'script': { 'build': 'webpack'}}
$ npm run build

```



