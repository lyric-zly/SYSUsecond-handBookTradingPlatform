<template>
  <div class="wrapper">
      <div class="back">
        <text class="text" @click="goback"></text>
      </div>
      <image class="image" resize="contain" src="<template>
  <div class="wrapper">
      <div class="back">
        <text class="text" @click="goback"></text>
      </div>
      <image class="image" resize="contain" src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1529822984782&di=60b120e26ae5966c340dcaf9c33c1da7&imgtype=0&src=http%3A%2F%2Fn.sinaimg.cn%2Ftransform%2F20151102%2FSrZc-fxkhcfn4276832.jpg" />
    <div class="second">
      <text class="price">¥{{price}}</text>
      <div class="userinfo" @click="chat">
        <image class="icon" resize="contain" src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1527422893435&di=2e679e76e967ba39cb3d5fb9d7545eba&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fforum%2Fw%3D580%2Fsign%3D1588b7c5d739b6004dce0fbfd9503526%2F7bec54e736d12f2eb97e1a464dc2d56285356898.jpg" />
        <text class="username">{{nickname}}</text>
      </div>
    </div>
    <div class="bookname">
      <text class="text">书名：{{bookname}}</text>
    </div>
    <div class="description">
      <text class="text">描述：{{description}}</text>
    </div>
    <div class="labelzone">
      <text class="text">标签:</text>
      <text class="label" v-for="label in lists" :key="label">{{label}}</text>
    </div>
    <div class="buy" @click="trade">
      <text class="buytext">我要购买</text>
    </div>
  </div>
</template>

<script>
const stream = weex.requireModule('stream');
// const navigator = weex.requireModule('navigator');
const modal = weex.requireModule('modal');
export default {
  data() {
    return {
      bookId: 0,
      publisherId: 0,
      lists: [],
      price: 0,
      nickname: '',
      bookname: '',
      description: '',
	  state:0,
	  sessionID:1
    };
  },
  methods: {
    goback() {
      this.$router.back(-1);
    },
    chat() {
      stream.fetch({
        method: 'POST',
        url: `http://123.207.86.98:3000/api/message/to/${this.publisherId}`,
        type: 'json',
        headers: {
          Authorization: `Bearer ${this.$store.default.state.token}`,
          'Content-Type': 'application/json',
        },
		body: JSON.stringify({
		  number:this.publisherId,
		  role:'buyer',
		  msg:'Hello'
        }),
      },
      (ret) => {
        if (!ret.ok) {
          modal.toast({
            message: 'failed',
            duration: 2.0,
          });
        } else {
          modal.toast({
            message: '发送成功',
            duration: 2.0,
          });
		  this.sessionID = rec.data.sessionID;
        }
      });
      this.$router.push({ path: '/chat/${this.sessionID}' });
    },
    trade() {
      stream.fetch({
        method: 'POST',
        url: `http://123.207.86.98:3000/api/trade/${this.bookId}`,
        type: 'json',
        headers: {
          Authorization: `Bearer ${this.$store.default.state.token}`,
          'Content-Type': 'application/json',
        },
      },
      (ret) => {
        if (!ret.ok) {
          modal.toast({
            message: '图书正在出售',
            duration: 2.0,
          });
        } else {
          modal.toast({
            message: '交易成功',
            duration: 2.0,
          });
          this.$router.back(-1);
        }
      });
    },
  },
  created() {
    this.bookId = this.$route.params.id;
    stream.fetch(
      {
        method: 'GET',
        url: `http://123.207.86.98:3000/api/book/${this.bookId}`,
        type: 'json',
        headers: {
          Authorization: `Bearer ${this.$store.default.state.token}`,
          'Content-Type': 'application/json',
        },
      },
      (ret) => {
        if (!ret.ok) {
          modal.toast({
            message: 'failed',
            duration: 2.0,
          });
        } else {
          this.publisherId = ret.data.publisherId;
          this.price = ret.data.price;
          this.nickname = ret.data.author;
          this.bookname = ret.data.name;
          this.description = ret.data.description;
		  this.state = ret.data.state;
          this.lists = ret.data.comment.split(' ').filter(item => !!item);
        }
      },
      () => {},
    );
  },
};
</script>

<style scoped>
.wrapper {
  align-items: center;
}
.back {
  display: flex;
  height: 50px;
  width: 700px;
}
.second {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 550px;
  height: 66px;
}
.userinfo {
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  width: 300px;
  height: 66px;
}
.image {
  width: 300px;
  height: 450px;
}
.price {
  flex: 0 0 33.3333%;
  font-size: 66px;
  color: rgb(255, 0, 0);
}
.icon {
  flex: 1;
  width: 60;
  height: 60;
}
.username {
  flex: 1;
  font-size: 40px;
  color: #6c6c6c;
}
.bookname {
  width: 600px;
  height: 60px;
}
.description {
  width: 600px;
  height: 250px;
}
.labelzone {
  display: flex;
  flex-direction: row;
  align-item: center;
  flex-wrap: wrap;
  width: 600px;
}
.labels {
  display: flex;
  flex-wrap: wrap;
  width: 120px;
  flex-direction: row;
}
.label {
  margin-top: 10px;
  text-align: center;
  margin-left: 20px;
  border: 2px solid;
  border-radius: 20px;
  color: #00caca;
  font-size: 35px;
  padding-top: 3px;
  padding-bottom: 3px;
  padding-left: 10px;
  padding-right: 10px;
}
.labeltext {
  font-size: 35px;
  color: #00caca;
}
.text {
  font-size: 40px;
  color: rgb(0, 0, 0);
}
.buy {
  justify-content: center;
  align-items: center;
  width: 230px;
  height: 100px;
  margin-top: 50px;
  border: 2px solid;
  border-radius: 20px;
  color: #00caca;
  background: #00caca;
}
.buytext {
  font-size: 40px;
  color: #e0e0e0;
}
</style>
