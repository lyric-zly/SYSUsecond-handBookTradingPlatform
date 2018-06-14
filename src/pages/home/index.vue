<template>
  <div class="wrapped">
    <router-view />
    <div class="topzone">
      <div class="searchzone">
        <input type="text" placeholder="搜索" class="search" :autofocus=true value=""/>
        <image class="searchicon" src="https://upload-images.jianshu.io/upload_images/1409578-fe71f0a49c9910b7.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/96"  @click="seebooklist()"/>
      </div>
      <div class="searchfunzone">
        <div class="searchfunfilter">
          <image class="searchfuniconleft" src="https://wx2.sinaimg.cn/mw690/006f5TdVly1fs8ks5ndphj302o02o0qs.jpg"/>
          <text class="searchfuntext">筛选</text>
        </div>
        <div class="searchfunrsort">
          <image class="searchfuniconright" src="https://wx4.sinaimg.cn/mw690/006f5TdVly1fs8kt42n1aj302o02o0sh.jpg"/>
          <text class="searchfuntext">价格排序</text>
        </div>
      </div>
    </div>
    <div class="listzone">
      <list class="list">
      <cell class="cell" v-for="item in boxes" :key="item.bookId">
        <image class="bookpicture" :src="item.img"/>
        <div class="textinfozone">
          <text class="bookname">书名：《{{item.name}}》 </text>
          <text class="describe" lines="2">描述：{{item.description}}</text>
          <div class="priceandseller">
            <text class="price">￥ {{item.price}}</text>
            <image class="sellervia" src="https://upload-images.jianshu.io/upload_images/1409578-ccda36498de1ec07.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240"/>
            <text class="sellername">{{item.publisherId}}</text>
          </div>
        </div>
      </cell>
    </list>
    </div>
    <div class="footerzone">
      <div class="footer">
        <image class="footericon" src="https://wx4.sinaimg.cn/mw690/006f5TdVly1fs8ks094nxj302o02o3y9.jpg" />
        <image class="footericon" @click="seemessage()" src="https://wx4.sinaimg.cn/mw690/006f5TdVly1fs8ktdde89j302o02oa9t.jpg" />
        <image class="footericon" @click="seeprofile()" src="https://wx3.sinaimg.cn/mw690/006f5TdVly1fs8ksqm4kaj302o02ojr6.jpg" />
      </div>
    </div>
  </div>
</template>

<script>
const stream = weex.requireModule('stream');
export default {
  data() {
    return {
      boxes: [
        {
          bookId: 1,
          img: [
            'https://upload-images.jianshu.io/upload_images/1409578-2c55950226fc3761.jpg?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240',
          ],
          name: '小王子',
          description: '可刀可刀，可刀可刀。超级好看超级好看。超级好看超级好看',
          price: 18,
          publisherId: '妮娜',
        },
        {
          bookId: 2,
          img: [
            'https://upload-images.jianshu.io/upload_images/1409578-2c55950226fc3761.jpg?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240',
          ],
          name: '小王子',
          description: '可刀可刀，可刀可刀。超级好看超级好看。超级好看超级好看',
          price: 18,
          publisherId: '妮娜',
        },
        {
          bookId: 3,
          img: [
            'https://upload-images.jianshu.io/upload_images/1409578-2c55950226fc3761.jpg?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240',
          ],
          name: '小王子',
          description: '可刀可刀，可刀可刀。超级好看超级好看。超级好看超级好看',
          price: 18,
          publisherId: '妮娜',
        },
      ],
    };
  },
  methods: {
    /* 筛选列表 */
    seebooklist() {
      this.$router.push({ path: '/list' });
    },
    /* 消息列表 */
    seemessage() {
      this.$router.push({ path: '/message' });
    },
    /* 个人信息 */
    seeprofile() {
      this.$router.push({ path: '/profile' });
    },
  },
  created() {
    stream.fetch({
      method: 'GET',
      url: 'http://123.207.86.98:3000/api/book',
      type: 'json',
      headers: { 'Content-Type': 'application/json' },
    },
    (rec) => {
      if (rec.ok) {
        this.boxes = rec.data;
      }
    });
  },
};
</script>

<style type="text/css">
input::-ms-input-placeholder {
  text-align: center;
}
input::-webkit-input-placeholder {
  text-align: center;
  color: #ffffff;
}
</style>

<style scoped>
.wrapped {
  align-items: center;
  background: #eeeee0;
  width: 100%;
  height: 100%;
}
.topzone {
  background: white;
  flex-direction: column;
  align-items: center;
  width: 100%;
}
.searchzone {
  margin-top: 10px;
  border-radius: 40px;
  background: #eeeee0;
  justify-content: center;
  flex-direction: row;
  align-items: center;
  height: 75px;
  width: 90%;
}

.search {
  border-radius: 40px;
  outline: none;
  background: rgba(255, 255, 255, 0.1);
  justify-content: center;
  font-size: 45px;
  height: 80px;
  width: 80%;
}
.searchicon {
  justify-content: right;
  width: 60px;
  height: 60px;
}

.searchfunzone {
  margin-top: 20px;
  flex-direction: row;
  justify-content: space-between;
  width: 90%;
  height: 70px;
}
.searchfunfilter {
  flex-direction: row;
  justify-content: center;
  width: 50%;
  height: 60px;
  border-right: 1px solid;
}
.searchfunrsort {
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 50%;
  height: 60px;
}
/**
 * The icon in the left is smaller.
 * Thus we change its size.
 */
.searchfuniconleft {
  height: 60px;
  width: 60px;
}
.searchfuniconright {
  height: 80px;
  width: 80px;
}
.searchfuntext {
  font-size: 40px;
  color: #00caca;
}

/*mainly part of scring*/
.listzone {
  position: absolute;
  top: 180px;
  width: 100%;
}
.list {
  position: relative;
  flex-direction: column;
  align-items: center;
  width: 100%;
}
.cell {
  margin: 10px 20px 10px 20px;
  padding-left: 20px;
  background: white;
  flex-direction: row;
  align-items: center;
  border-radius: 40px;
  width: 95%;
  height: 300px;
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.2);
}

.bookpicture {
  width: 200px;
  height: 280px;
}

.textinfozone {
  margin-right: 10px;
  width: 70%;
  height: 90%;
  flex-direction: column;
  justify-content: space-between;
}
.bookname {
  color: gray;
  font-size: 36px;
  font-weight: bold;
}
.describe {
  lines: 2;
  color: gray;
  font-size: 36px;
  font-weight: bold;
}

.priceandseller {
  margin-top: 10px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 100px;
}
.price {
  color: gray;
  font-size: 60px;
  color: #ff7f50;
  width: 45%;
}
.sellervia {
  width: 80px;
  height: 80px;
}
.sellername {
  width: 40%;
  color: gray;
  font-size: 38px;
}
/* the bottom of this page*/
.footerzone {
  justify-content: center;
  align-items: center;
  background: white;
  position: fixed;
  bottom: 0;
  margin-bottom: 10px;
  width: 100%;
  height: 10%;
}
.footer {
  margin: 10px 0 10px 0;
  flex-direction: row;
  justify-content: space-around;
  position: absolute;
  width: 100%;
  height: 90%;
}
.footericon {
  height: 70px;
  width: 70px;
}
</style>
