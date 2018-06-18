<template>
  <div class="wrapped">
    <router-view />
  </div>
</template>

<script>
export default {
  data() {
    return {
      boxes: [
        // {
        //   bookId: 1,
        //   img: [
        //     'https://upload-images.jianshu.io/upload_images/1409578-2c55950226fc3761.jpg?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240',
        //   ],
        //   name: '小王子',
        //   description: '可刀可刀，可刀可刀。超级好看超级好看。超级好看超级好看',
        //   price: 18,
        //   publisherId: '妮娜',
        // },
        // {
        //   bookId: 2,
        //   img: [
        //     'https://upload-images.jianshu.io/upload_images/1409578-2c55950226fc3761.jpg?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240',
        //   ],
        //   name: '小王子',
        //   description: '可刀可刀，可刀可刀。超级好看超级好看。超级好看超级好看',
        //   price: 18,
        //   publisherId: '妮娜',
        // },
        // {
        //   bookId: 3,
        //   img: [
        //     'https://upload-images.jianshu.io/upload_images/1409578-2c55950226fc3761.jpg?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240',
        //   ],
        //   name: '小王子',
        //   description: '可刀可刀，可刀可刀。超级好看超级好看。超级好看超级好看',
        //   price: 18,
        //   publisherId: '妮娜',
        // },
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
    console.log('home mount');
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
  flex-grow: 1;
}
.topzone {
  background: white;
  flex-direction: column;
  align-items: center;
  width: 100%;
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
