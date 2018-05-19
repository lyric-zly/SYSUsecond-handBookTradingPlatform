# SYSUsecond-handBookTradingPlatform
This is the project of System Analysis and Design

## 开发指南

### 技术栈
- vue
- weex
- vue-router
- vuex
- axios
- weex-ui

### 文件架构
pages 对应的页面：
- identity：未登陆前的三个页面
  - login：登陆
  - register：注册
  - forget-password: 忘记密码
- home：主页
  - book-list: 书籍列表
  - message: 对话与通知
  - profile: 个人信息
- book：书籍信息
- chat：聊天界面
- sell：我要卖书
- goods：货物列表（对应个人信息界面的买家卖家导航）

### 注意事项
- 请合理地在 pages 目录（与其子目录下）建立 components 文件夹用来分割组件
- 请合理利用 store 进行逻辑拆分（详见vuex）
- 路由已经写好了，有问题可以直接修改
- 暂时没有服务端，先使用假数据进行页面编写
- 请尽量使用 weex-ui

## Commands

### npm start

Starts the development server for you to preview your weex page on browser.
You can also scan the QR code using weex playground to preview weex page on native.

### npm run dev

Open the code compilation task in watch mode.

### npm run ios

(Mac only, requires Xcode)
Starts the development server and loads your app in an iOS simulator.

### npm run android

(Requires Android build tools)
Starts the development server and loads your app on a connected Android device or emulator.

### npm run pack:ios

(Mac only, requires Xcode)
Packaging ios project into ipa package.

### npm run pack:android

(Requires Android build tools)
Packaging android project into apk package.

### npm run pack:web

Packaging html5 project into `web/build` folder.

### npm run test

Starts the test runner.
