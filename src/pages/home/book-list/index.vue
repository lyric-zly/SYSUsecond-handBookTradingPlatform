<template>
  <div class="wrapped">
    <div class="searchzone">
      <input type="text" placeholder=" 搜索" class="search" :autofocus=true value=""/>
      <image class="searchicon" src="https://upload-images.jianshu.io/upload_images/1409578-fe71f0a49c9910b7.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/96"/>
    </div>
    <div class="searchfunzone">
      <div class="searchfunfilter">
        <image class="searchfuniconleft" src="https://upload-images.jianshu.io/upload_images/1409578-14476b94d3532fff.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240"/>
        <text class="searchfuntext">筛选</text>
      </div>
      <div class="searchfunrsort">
        <image class="searchfuniconright" src="https://upload-images.jianshu.io/upload_images/1409578-d79a13daa64a9508.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240"/>
        <text class="searchfuntext">价格排序</text>
      </div>
    </div>
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
export default {
  methods: {
    /* 回主页 */
    gohome() {
      this.$router.push({ path: '/home' });
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
