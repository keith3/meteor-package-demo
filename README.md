# 编写并发布一个Meteor package

---

- [注册Meteor账号](https://www.meteor.com/account-settings)
- 终端登录
```bash
$ meteor login
```
- 创建package
```bash
# 为了和官方包区分，第三方的包名格式为'用户名:包名'
$ meteor create --package lufeng:package-demo
$ cd package-demo
```
```
.
├── client.js                    // 需要在客户端使用的代码
├── package-demo-tests.js        // 测试代码
├── package.js                   // 包的配置
├── README.md
├── server.js                    // 服务端使用
└── validator-common.js          // 服务端与客户端公用
```

### client.js 
```js
// 需要export的变量不要加var
resolution = screen.width ' x ' screent.height;
```

### server.js 
```js
// 用到npm模块的只能在服务端使用
fs = Npm.require('fs')
```

### package.js
```js
Package.describe({
  name: 'lufeng:package-demo',
  version: '0.0.1',
  summary: 'A meteor package demo.',
  git: 'https://github.com/keith3/meteor-package-demo',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.2');

  api.addFiles('server.js', 'server');
  //  api.export('var', ['server', 'client', 'web.browser', 'web.cordova']);
  api.export('fs', 'server');           

  api.addFiles('client.js', 'client');
  api.export('resolution', 'client');

  api.addFiles('validator-common.js', ['server', 'client']);
  api.export('validator', ['server', 'client']);
});

Package.onTest(function(api) {
  ...
});
```

### 本地测试
```bash
$ meteor create package-test
$ cd package-test
$ mkdir package
$ ln -s package/dir/ validator
$ meteor add lufeng:package-demo
# 现在可以在客户端使用resolution、validator，服务端调用fs、validator
```

### 发布
```bash
# 首次发布需要加'--create'参数
$ meteor publish --create     
```

