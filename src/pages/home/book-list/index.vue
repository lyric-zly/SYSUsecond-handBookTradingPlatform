<template>
  <div class="wrapped">
    <div class="searchzone">
      <input type="text" placeholder=" 搜索" class="search" :autofocus=true value=""/>
      <image class="searchicon" src="https://upload-images.jianshu.io/upload_images/1409578-fe71f0a49c9910b7.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/96"/>
    </div>
    <div class="searchfunzone">
      <div class="searchfunfilter">
        <image class="searchfuniconleft" src="https://upload-images.jianshu.io/upload_images/1409578-14476b94d3532fff.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240"/>
        <text class="searchfuntext" @click="triggerShowFilter">筛选</text>
      </div>
      <div class="searchfunrsort">
        <image class="searchfuniconright" src="https://upload-images.jianshu.io/upload_images/1409578-d79a13daa64a9508.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240"/>
        <text class="searchfuntext">价格排序</text>
      </div>
    </div>
    <div class="listzone">
      <list class="list">
        <cell class="cell" v-for="item in boxes" :key="item.bookId" @click="goDetail(item.bookId)">
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
    <div v-show="showFilter" class="search-dropdown">
      <div class="main">
        <text class="labeltitle">品类：</text>
        <div class="labelzone">
          <text class="label"> 课本 </text>
          <text class="label"> 资料书 </text>
          <text class="label"> 考研书 </text>
          <text class="label"> 课外书 </text>
        </div>
      </div>
      <div class="main">
        <text class="labeltitle">地点：</text>
        <div class="labelzone">
          <text class="label"> 东校区 </text>
          <text class="label"> 南校区 </text>
          <text class="label"> 北校区 </text>
          <text class="label"> 珠海校区 </text>
        </div>
      </div>
      <div class="main">
        <text class="labeltitle">学院：</text>
        <div class="labelzone">
          <text class="label"> 法学院 </text>
          <text class="label"> 数据科学与计算机学院 </text>
          <text class="label"> 传播与设计学院 </text>
          <text class="label"> 医学院 </text>
        </div>
      </div>
    </div>
    <div class="footerzone">
      <div class="footer">
        <image class="footericon" @click="gohome()" src="https://upload-images.jianshu.io/upload_images/1409578-3c1a20f47f897e3e.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240"/>
        <image class="footericon" @click="seemessage()" src="https://upload-images.jianshu.io/upload_images/1409578-a18cd9af9f80d32e.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240"/>
        <image class="footericon" @click="seeprofile()" src="https://upload-images.jianshu.io/upload_images/1409578-aa3c5917b4badbf7.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240"/>
      </div>
    </div>
  </div>
</template>

<script>
const stream = weex.requireModule('stream');
export default {
  data() {
    return {
      boxes: [],
      showFilter: false,
    };
  },
  methods: {
    /* 回主页 */
    gohome() {
      this.$router.push({ path: '/home' });
    },
    /* 消息列表 */
    seemessage() {
      this.$router.push({ path: '/home/message' });
    },
    /* 个人信息 */
    seeprofile() {
      this.$router.push({ path: '/home/profile' });
    },

    goDetail(id) {
      this.$router.push({ path: `/book/${id}` });
    },

    triggerShowFilter() {
      this.showFilter = !this.showFilter;
    },
  },
  created() {
    stream.fetch({
      method: 'GET',
      url: 'http://123.207.86.98:3000/api/book',
      type: 'json',
      headers: {
        Authorization: `Bearer ${this.$store.default.state.token}`,
        'Content-Type': 'application/json',
      },
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
  width: 100%;
  min-height: 100%;
  align-items: center;
}
.searchzone {
  margin-top: 10px;
  border-radius: 40px;
  background: #e0e0e0;
  justify-content: center;
  flex-direction: row;
  align-items: center;
  height: 75px;
  width: 90%;
}

.search {
  border-radius: 40px;
  border-style: hidden;
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
  width: 90%; /*470px;*/
  height: 70px;
}
.searchfunfilter {
  flex-direction: row;
  justify-content: center;
  width: 50%; /*260px;*/
  height: 60px;
  border-right: 1px solid;
}
.searchfunrsort {
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 50%; /*260px;*/
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
.main {
  width: 90%; /*650px;*/
  /*height:20%;/*300px;*/
}
.labeltitle {
  font-size: 40px;
  color: #c0c0c0;
  border-bottom: 3px solid;
}
.labelzone {
  flex-wrap: wrap;
  flex-direction: row;
  height: 250px;
  width: 100%;
}
.label {
  margin-right: 15px;
  margin-top: 10px;
  height: 60px;
  font-size: 45px;
  color: #c0c0c0;
  border: 2px solid;
}

.search-dropdown {
  background-color: white;
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

.footerzone {
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 10%;
  border-top: 3px solid;
  color: #e0e0e0;
}
.footer {
  margin-top: 10px;
  flex-direction: row;
  justify-content: space-between;
  position: absolute;
  width: 600px;
  height: 120px;
}
.footericon {
  height: 96px;
  width: 96px;
}
</style>
