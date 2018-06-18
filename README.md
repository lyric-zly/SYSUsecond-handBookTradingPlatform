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

### 待完善
- 核对负责的页面的功能，是否能正常运作，满不满足需要展示的点，不懂得可以问我 @sugerpocket. 有需要完善的地方，缺少数据或者 api 可以直接找我（实现一个新 api 或者添加需要的数据很快的，主要是没时间，需要大家帮忙 review 下）

- goods 页面逻辑完善
  说明: goods 页面可以有5种状态（book state 字段的 1，2，3，4）
  - 1 表示在售
  - 2 表示等待确认
  - 3 表示正在送货
  - 4 表示已收货

  通过 GET api/trade 拿到的数据，其实是所有与你有关的交易数据，只有产生了交易(state > 2) 才会产生 trade。通过buyerId和sellerId可以判断是买家还是卖家。从而进行分类。
  - 卖家（角色为seller）
    - 正在出售（从 trade 是拿不到的，可以从 GET api/book 过滤出自己上架的正在出售的书籍）
    - 等待确认（state 为 2）
    - 已售出（state > 2)
  - 买家（角色为buyer）
    - 等待收货（state = 3)
    - 已买入 (state = 4)

- 认证这部分不使用cookie了（weex稍微有点麻烦）
  这里使用 token 认证，在 header 里面加上从 POST api/user/login 里面获得的 token
  登陆获得的 token 会保存在 vuex，通过 this.$store.default.state.token 可以拿到（你必须要登陆之后才可以拿到）
  如何使用 token 呢，请在请求头添加 `Authorization` 首部, 值为 Bearer + ' ' + 你的 token

  example：

  ```javascript
  stream.fetch({
    method: 'POST',
    url: `http://123.207.86.98:3000/api/trade/${this.bookId}`,
    type: 'json',
    headers: {
      Authorization: `Bearer ${this.$store.default.state.token}`,
      'Content-Type': 'application/json',
    },
  },
  ```

- 样式的问题有点严重，有时间的话修一修吧。

PS：实习期间一直比较忙，主要时间并不是花在公司业务上面，而是各种新人演讲与报告（技术与非技术都有，我也不知道什么情况），选的技术栈也不想搞得那么复杂，体谅大家没学过啥的。如果大家不熟悉或者有比较中意的技术的话说出来会更好，或者有什么问题尽快反应（虽然很多时候都不能立即处理），我会尽快帮忙解决的。我没考虑到学习成本的问题，文档写的也不是很完善，还是要非常感谢大家对于我的包容。

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
