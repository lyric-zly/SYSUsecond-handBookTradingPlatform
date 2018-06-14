<template>
  <div class="wrapper">
      <div class="title lightshadow">
        <text class="back" @click="goback()"></text>
        <text class="titletext">我要卖书</text>
      </div>
      <div class="sellzone shadow">
        <div class="zone">
          <text class="text"> 书目名称: </text>
          <input type="text" class="input" :autofocus=true value="" @change="onchangename" />
        </div>
        <div class="descriptionzone">
          <text class="text"> 书目信息描述: </text>
          <textarea
            class="descriptioninput"
            placeholder="可输入相关书目信息"
            :autofocus=true
            value=""
            @change="onchangedes" />
        </div>
        <form class="bookphotozone" id="book-form">
          <text class="text"> 书目照片: </text>
          <input type="file" class="input" @change="onFileChange" id="file">
        </form>
        <div class="zone">
          <text class="text"> 开价: </text>
          <input type="text" class="input" :autofocus=true value="" @change="onchangeprice" />
        </div>
        <div class="labelzone">
          <text class="text"> 标签:</text>
          <text class="label" v-for="label in lists" :key="label">{{label}}</text>
          <input type="text" class="input" :autofocus=true value="" @change="onchangelabel" />
        </div>
      </div>
    <div class="buy lightshadow" @click="sell()">
      <text class="buytext">提交</text>
    </div>
  </div>
</template>

<script>
const modal = weex.requireModule('modal');
const stream = weex.requireModule('stream');
const imgok = 1;

export default {
  data() {
    return {
      lists: ['课外书'],
      name: '',
      des: '',
      price: '',
      label: '',
      img: '',
      author: '',
      phone: '',
      campus: '',
      id: 1,
    };
  },
  methods: {
    onchangename(event) {
      this.name = event.value;
    },
    onchangedes(event) {
      this.des = event.value;
    },
    onchangeprice(event) {
      this.price = event.value;
    },
    onchangelabel(event) {
      this.lists.push(event.value);
    },
    onFileChange() {
      const form = document.getElementById('book-form');
      const fd = new FormData(form);
      stream.fetch({
        method: 'POST',
        url: `http://123.207.86.98:3000/api/book/${this.id}/img`,
        type: 'json',
        body: fd,
        headers: { 'Content-Type': 'multipart/form-data' },
      });
    },
    goback() {},
    upload() {},
    sell() {
      if (this.name === '') {
        modal.toast({
          message: '图书名称未填写',
          duration: 2.0,
        });
      } else if (this.des === '') {
        modal.toast({
          message: '详细描述未填写',
          duration: 2.0,
        });
      } else if (this.price === '') {
        modal.toast({
          message: '价格未填写',
          duration: 2.0,
        });
      } else if (imgok === 0) {
        modal.toast({
          message: '图片未上传',
          duration: 2.0,
        });
      } else {
        stream.fetch(
          {
            method: 'POST',
            url: 'http://123.207.86.98:3000/api/book',
            type: 'json',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              name: this.name,
              description: this.des,
              phone: this.phone,
              campus: this.campus,
              comment: this.lists.join(' '),
              price: this.price,
              author: this.author,
            }),
          },
          (ret) => {
            if (!ret.ok) {
              modal.toast({
                message: '发布失败',
                duration: 2.0,
              });
            } else {
              modal.toast({
                message: '已成功发布图书！',
                duration: 2.0,
              });
            }
          },
        );
      }
    },
  },
};
</script>

<style scoped>
.wrapper {
  align-items: center;
  background: #fcfcfc;
}
.title {
  flex-direction: row;
  display: flex;
  background: #00e3e3;
  height: 80px;
  width: 100%;
}
.back {
  font-size: 50px;
  color: #ffffff;
}
.titletext {
  margin-left: 33%;
  font-size: 50px;
  color: #ffffff;
}
.sellzone {
  background: #ffffff;
  display: flex;
  margin-top: 30px;
  width: 650px;
  height: 900px;
  border: 2px solid;
  border-radius: 20px;
  color: #ffffff;
}
.zone {
  margin-top: 5px;
  margin-left: 5px;
  margin-right: 5px;
  display: flex;
  flex-direction: row;
}
.input {
  width: 400px;
  border-bottom: 3px solid;
  color: #9d9d9d;
  font-size: 40px;
}
.descriptionzone {
  margin-top: 5px;
  width: 650px;
  height: 350px;
}
.descriptioninput {
  margin-left: 15px;
  width: 620px;
  height: 300px;
  font-size: 40px;
  color: #7b7b7b;
}
.bookphotozone {
  width: 600px;
  height: 200px;
}
.uploadicon {
  margin-left: 15px;
  width: 120px;
  height: 120px;
}
.labelzone {
  margin-top: 30px;
  margin-left: 5px;
  margin-right: 5px;
  display: flex;
  flex-direction: row;
  align-item: center;
  flex-wrap: wrap;
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
  background: #00e3e3;
}
.buytext {
  font-size: 40px;
  color: #ffffff;
}
.shadow {
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.2);
}
.lightshadow {
  box-shadow: 0 10px 15px rgba(0, 0, 0, 0.2);
}
</style>
