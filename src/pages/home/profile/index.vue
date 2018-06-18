<template>
  <div class="container">
    <div>
      <div class="userinfo">
        <text class="text-h5">姓名： {{nickname}}</text>
        <text class="text-h1">学号： {{studentID}}</text>
        <text class="text-h2">学院： {{college}}</text>
      </div>
      <div class="avatar-container">
        <image class="userinfo-avatar" src="https://upload-images.jianshu.io/upload_images/12650180-6b048ad0d9bd34aa.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/700" resize="cover" />
      </div>
    </div>
    <div class="cells" @click="wantsell">
      <text class="text-h3">我要卖书</text>
      <text class="text-h3">></text>
    </div>
    <div class="cells">
      <div class="head">
        <div class="block">
          <text class="text-h3">我是买家</text>
        </div>
        <div class="line"></div>
      </div>
      <div class="item" @click="goTo(3)">
        <image style="width:96px;height:96px;" src="https://upload-images.jianshu.io/upload_images/12650180-4ffaac6d7e7974f1.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/96" />
        <text class="text-h4">等待收货</text>
      </div>
      <div class="item" @click="goTo(2)">
        <image style="width:96px;height:96px;" src="https://upload-images.jianshu.io/upload_images/12650180-9b967727a94b81ce.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/96" />
        <text class="text-h4">已买入</text>
      </div>
    </div>
    <div class="cells">
      <div class="head">
        <div class="block">
          <text class="text-h3">我是买家</text>
        </div>
        <div class="line"></div>
      </div>
      <div class="item" @click="goTo(1)">
        <image style="width:96px;height:96px;" src="https://upload-images.jianshu.io/upload_images/12650180-254508d4005ef76a.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/96" />
        <text class="text-h4">正在出售</text>
      </div>
      <div class="item" @click="goTo(2)">
        <image style="width:96px;height:96px;" src="https://upload-images.jianshu.io/upload_images/12650180-b36db1a96ee2edae.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/96" />
        <text class="text-h4">等待确认</text>
      </div>
      <div class="item" @click="goTo(3)">
        <image style="width:96px;height:96px;" src="https://upload-images.jianshu.io/upload_images/12650180-7f2b966fd2463e48.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/96" />
        <text class="text-h4">已卖出</text>
      </div>
    </div>
    <div class="cells" @click="logout">
      <text class="text-h3">退出当前帐号</text>
      <text class="text-h3">></text>
    </div>
  </div>
</template>

<script>
const stream = weex.requireModule('stream');
const modal = weex.requireModule('modal');
export default {
  data() {
    return {
      studentID: '',
      nickname: '',
      college: '数据科学与计算机学院',
    };
  },

  created() {
    const USER_URL = 'http://123.207.86.98:3000/api/user/login';
    stream.fetch(
      {
        method: 'GET',
        url: USER_URL,
        type: 'json',
        headers: {
          Authorization: `Bearer ${this.$store.default.state.token}`,
          'Content-Type': 'application/json',
        },
      },
      (ret) => {
        if (!ret.ok) {
          const msg = '尚未登录';
          modal.toast({
            message: msg,
            duration: 3.0,
          });
        } else {
          this.studentID = ret.data.studentID;
          this.nickname = ret.data.nickname;
        }
      },
    );
  },
  methods: {
    goTo(state) {
      this.$router.push({ path: `/goods/${state}` });
    },
    wantsell() {
      this.$router.push({ path: '/sell' });
    },
    logout() {
      this.$router.push({ path: '/' });
    },
  },
};
</script>

<style scoped>
  .container {
    background-color: #F6F6F6;
  }

  .avatar-container {
    top: -180px;
    flex-direction: row;
    justify-content: center;
  }

  .userinfo-avatar {
    width: 200px;
    height: 200px;
    border-radius: 50%;
    align-items: center;
  }

  .userinfo {
    background-color: #FFFFFF;
    border-radius: 5%;
    top: 150px;
    margin-left: 20px;
    margin-right: 20px;
  }

  .text-h1 {
    margin-left: 30px;
    margin-bottom: 10px;
  }

  .text-h2 {
    margin-left: 30px;
    margin-bottom: 30px;
  }

  .text-h3 {
    margin: 30px;
  }

  .text-h4 {
    font-size: 26px;
    color: #7F7F7F;
  }

  .text-h5 {
    margin-left: 30px;
    margin-bottom: 10px;
    margin-top: 50px;
  }

  .cells {
    background-color: #FFFFFF;
    border-radius: 5%;
    margin-left: 20px;
    margin-right: 20px;
    margin-bottom: 20px;
    flex-direction: row;
    justify-content: space-between;
  }

  .head {
    flex-direction: row;
  }

  .block {
    justify-content: center;
  }

  .line {
    width: 0.5px;
    background-color: #585858;
    height: 140px;
    margin: 20px;
  }

  .item {
    margin-bottom: 30px;
    margin-top: 30px;
    margin-left: 30px;
    margin-right: 40px;
    align-items: center;
  }
</style>
