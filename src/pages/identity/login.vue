<template>
  <div class="wrapper">
    <image class = "logo_picture" resize="contain" src = "https://wx4.sinaimg.cn/mw690/006tzQZEgy1frtl3gqkmmj30bi08egph.jpg"/>
    <div class="login">
      <div class="input-wrapper">
        <input
		  @input="oninputUserName" 
		  @change="onchangeUserName"
          v-model="userNumber"
          class="input"
          type="text"
          placeholder="请输入学号"
          utofocus="true"
          value=""
        />
        <image class="input-img" src="https://wx4.sinaimg.cn/mw690/006tzQZEgy1frtl3f8fbuj302o02ojr6.jpg"/>
      </div>
      <div class="input-wrapper">
        <input
			@input="oninputUserPassword" 
		  @change="onchangeUserPassword"
          v-model="userPassword"
          class="input"
          type="password"
          placeholder="请输入密码"
          value=""
        />
        <image class="input-img" src="https://wx2.sinaimg.cn/mw690/006tzQZEgy1frtl3fk45cj302o02o0sh.jpg"/>
      </div>
      <div class="input-wrapper">
        <div class="input-login" @click="login()" >
          <text class="input-login-text">登录</text>
        </div>
      </div>
      <div class="input-wrapper">
        <text class="input-forget" @click="findPassword()">找回密码</text>
        <text class="input-register" @click="register()">立即注册</text>
      </div>
    </div>
    <div class="hintwrapper">
      <text class="hint">{{hint}}</text>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

// const stream = weex.requireModule('stream');
// const navigator = weex.requireModule('navigator');
const modal = weex.requireModule('modal');

module.exports = {
  data() {
    return {
      userNumber: '15331060',
      userPassword: '12345678',
      hint: '',
    };
  },
  methods: {
      oninputUserName: function(event){
      this.userNumber =  event.value;
    },
  
	onchangeUserName: function(event){
      this.userNumber =  event.value;
    },
  
    oninputUserPassword: function(event){
      this.userPassword =  event.value;
    },
  
  onchangeUserPassword: function(event){
      this.userPassword =  event.value;
    },
    /* 找回密码 */
    findPassword() {
      this.$router.push({ name: 'forget-password' });
    },

    /* 注册 */
    register() {
      /* this.$router.go(-1); */
      this.$router.push({ path: '/register' });
    },
    /* 处理登录 */

    login() {
      axios
        .post('http://123.207.86.98:3000/api/user/login', { username: this.userNumber, password: this.userPassword })
        .then((result) => {
          this.$store.default.commit('login', {
            username: result.data.studentId,
            nickname: result.data.nickname,
            token: result.data.token,
          });
          this.$router.push({
            path: '/home',
          });
        }).catch(() => {
          modal.toast({
            message: '学号或密码错误',
            duration: 2.0,
          });
        });
      // stream.fetch(
      //   {
      //     method: 'POST',
      //     url: 'http://123.207.86.98:3000/api/user/login',
      //     type: 'json',
      //     headers: { 'Content-Type': 'application/json' },
      //     body: JSON.stringify({
      //       username: this.userNumber,
      //       password: this.userPassword,
      //     }),
      //   },
      //   (ret) => {
      //     console.log(ret);
      //     if (!ret.ok) {
      //       modal.toast({
      //         message: '学号或密码错误',
      //         duration: 2.0,
      //       });
      //     } else {
      //       modal.toast({
      //         message: '登录成功',
      //         duration: 2.0,
      //       });
      //       this.$router.push({
      //         path: '/home',
      //         query: {
      //           username: ret.data.userNumber,
      //           password: this.userPassword,
      //           nickname: ret.data.nickname,
      //           flag: '3',
      //         },
      //       });
      //     }
      //   },
      //   // (response) => {},
      // );
    },
  },
};
</script>

<style scoped>
.wrapper {
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
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
.input-login {
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
.input-forget {
  position: absolute;
  left: 30px;
  font-size: 30px;
}
.input-register {
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
