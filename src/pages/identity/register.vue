//自己用github重新上传代码
<template>
  <div class="wrapper">
    <image class = "logo_picture" resize="contain" src = "https://wx4.sinaimg.cn/mw690/006tzQZEgy1frtl3gqkmmj30bi08egph.jpg"/>
    <div class="login">
      <div class="input-wrapper">
        <input
          @change="onchangeUserNumber"
          class="input"
          type="text"
          placeholder="请输入学号(必须为8位)"
          autofocus="true"
          value=""
        />
        <image
          class="input-img"
          src="https://wx4.sinaimg.cn/mw690/006tzQZEgy1frtl3f8fbuj302o02ojr6.jpg"
        />
      </div>
      <div class="input-wrapper">
        <input
          @change="onchangeUserID"
          class="input"
          type="text"
          placeholder="请输入昵称"
          autofocus="true"
          value=""
        />
        <image class="input-img" src="https://wx4.sinaimg.cn/mw690/006tzQZEgy1frtl3f8fbuj302o02ojr6.jpg"/>
      </div>
      <div class="input-wrapper">
        <input
          @change="onchangeUserPassword"
          class="input"
          type="password"
          placeholder="请输入新密码"
          value=""
        />
        <image class="input-img" src="https://wx2.sinaimg.cn/mw690/006tzQZEgy1frtl3fk45cj302o02o0sh.jpg"/>
      </div>
      <div class="input-wrapper">
        <input
          @change="onchangeNewUserPassword"
          class="input"
          type="password"
          placeholder="请再次输入新密码"
          value=""
        />
        <image class="input-img" src="https://wx2.sinaimg.cn/mw690/006tzQZEgy1frtl3fk45cj302o02o0sh.jpg"/>
      </div>
      <div class="input-wrapper">
        <div class="register-wrapper" @click="register()">
          <text class="input-login-text">注册</text>
        </div>
      </div>
      <div class="input-wrapper">
        <text class="return-login" @click="returnlogin()">返回登录</text>
        <text class="hang-out" @click="hangout()">随便逛逛</text>
      </div>
    </div>
    <div class="hintwrapper">
      <text class="hint">{{hint}}</text>
    </div>
  </div>
</template>

<script>
const modal = weex.requireModule('modal');
const stream = weex.requireModule('stream');

export default {
  data() {
    return {
      check: 0,
      userNumber: '',
      userID: '',
      userPassword: '',
      newuserPassword: '22222',
    };
  },
  methods: {
    onchangeUserNumber(event) {
      this.userNumber = event.value;
    },
    onchangeUserPassword(event) {
      this.userPassword = event.value;
    },
    onchangeUserID(event) {
      this.userID = event.value;
    },
    onchangeNewUserPassword(event) {
      this.newuserPassword = event.value;
    },
    /* 找回密码 */
    findPassword() {},
    /* 注册 */
    register() {
      if (this.userPassword !== this.newuserPassword) {
        modal.toast({
          message: '前后密码不一致',
          duration: 2.0,
        });
      } else if (this.userNumber.length !== 8) {
        modal.toast({
          message: '学号必须为8位',
          duration: 2.0,
        });
      } else if (
        this.userPassword.length < 8 ||
        this.userPassword.length > 16
      ) {
        modal.toast({
          message: '密码必须为8-16位',
          duration: 2.0,
        });
      } else {
        stream.fetch(
          {
            method: 'POST',
            url: 'http://123.207.86.98:3000/api/user/register',
            type: 'json',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              nickname: this.userID,
              username: this.userNumber,
              password: this.userPassword,
            }),
          },
          (ret) => {
            if (!ret.ok) {
              modal.toast({
                message: '该用户已经注册',
                duration: 2.0,
              });
              this.check = 0;
            } else {
              modal.toast({
                message: '注册成功',
                duration: 2.0,
              });
              this.check = 1;
            }
          },
          // (response) => {},
        );
      }
    },
    returnlogin() {
      this.$router.go(-1);
    },

    hangout() {
      /* this.$router.push({name: 'home'}); */
      this.$router.push({
        path: '/home',
        query: {
          username: 0,
          password: '0',
          nickname: 'visitor',
          flag: '3',
        },
      });
    },
  },
};
</script>

<style>
.wrapper {
  background-position: center center;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background-size: cover;
  background-image: url('https://wx3.sinaimg.cn/mw690/006tzQZEgy1frtl3g34dyj30u01hcgnk.jpg');
}
.input-wrapper {
  width: 550px;
  margin-left: 100px;
  margin-right: 100px;
  margin-bottom: 30px;
}
.input {
  font-size: 30px;
  height: 80px;
  width: 550px;
  padding-left: 90px;
  padding-top: 15px;
  padding-bottom: 15px;
  border-width: 0px;
  border-color: #ffffff;
  border-radius: 10px;
  outline: none;
}
.input-img {
  position: absolute;
  top: 10px;
  left: 15px;
  width: 60px;
  height: 60px;
}
.logo {
  flex: 1;
}
.logo_picture {
  width: 400px;
  height: 400px;
}
.register-wrapper {
  height: 80px;
  width: 550px;
  background-color: #48c9bf;
  border-radius: 10px;
  margin-top: 40px;
}
.input-login-text {
  height: 80px;
  width: 550px;
  text-align: center;
  line-height: 80px;
  color: white;
  font-size: 35px;
}
.return-login {
  position: absolute;
  left: 30px;
  font-size: 30px;
}
.hang-out {
  position: absolute;
  right: 30px;
  font-size: 30px;
}
.hint {
  height: 80px;
  width: 550px;
  text-align: center;
  line-height: 80px;
  color: red;
  font-size: 35px;
}
</style>
