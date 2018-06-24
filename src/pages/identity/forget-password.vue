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
          placeholder="请输入学号"
          autofocus="true"
          value=""
        />
        <image class="input-img" src="https://wx4.sinaimg.cn/mw690/006tzQZEgy1frtl3f8fbuj302o02ojr6.jpg"/>
      </div>
      <div class="input-wrapper">
        <input
          @change="onchangeUserID"
          class="input"
          type="text"
          placeholder="请输身份证证后六位"
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
        <div class="forgetpassword" @click="forgetpassword()">
          <text class="input-login-text">重置密码</text>
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
export default {
  data() {
    return {
      userNumber: '',
      UserID: '',
      userPassword: '',
      newUserPassword: '',
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
      this.newUserPassword = event.value;
    },
    /* 找回密码 */

    findPassword() {
      /* this.$router.go(-1); */
      /* this.$router.push('ForgetPassword'); */
    },
    forgetpassword() {
      this.$router.go(-1);
    },

    returnlogin() {
      this.$router.go(-1);
    },
    hangout() {
      this.$router.push({
        path: '/home',
        query: { username: 0, password: '0', nickname: 'visitor', flag: '3' },
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
.forgetpassword {
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
