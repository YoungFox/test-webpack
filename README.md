自动刷新

```
sudo cnpm install webpack-dev-server -g
```

webpack-dev-server
http://localhost:8080/webpack-dev-server/index.html


Hot Module Replacement(不刷新页面？？？)

```
webpack-dev-server --inline  --hot --content-base build/
```
上面命令自动把‘webpack/hot/dev-server’

http://localhost:8080