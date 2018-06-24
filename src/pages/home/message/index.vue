<template>
  <div class="wrapped">
    <div class="messagetype">
      <div class="chatzone">
        <image class="chaticon" src="https://upload-images.jianshu.io/upload_images/1409578-6cf9b27bb569f9fc.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240" />
        <text class="chosedtext"> 对话 </text>
      </div>
      <div class="securedzone">
        <image class="securedicon" src="https://upload-images.jianshu.io/upload_images/1409578-e71f1d77aebc583d.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240" />
        <text class="unchosedtext"> 通知 </text>
      </div>
    </div>
    <div class="chatlist">
      <list class="list">
        <cell class="cell" v-for="item in boxes" :key="item.sessionId">
          <image class="sellervir" src="https://upload-images.jianshu.io/upload_images/1409578-e846c3ea7c900734.jpg?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240" />
          <div class="chattextzone">
            <div class="chatnametime">
              <text class="sellernametext">{{item.senderId}} </text>
              <text class="posttimetext">{{item.time}}</text>
            </div>
            <div class="chatdetail">
              <text class="chatdetailtext">{{item.content}}</text>
            </div>
          </div>
        </cell>
      </list>
    </div>
    <div class="footerzone">
      <div class="footer">
        <image class="footericon" @click="gohome()" src="https://upload-images.jianshu.io/upload_images/1409578-ffd1470f7531581e.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240" />
        <image class="footericon" src="https://upload-images.jianshu.io/upload_images/1409578-f16e7e7d86bec92b.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240" />
        <image class="footericon" @click="seeprofile()" src="https://upload-images.jianshu.io/upload_images/1409578-bcfdd8377f19ec24.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240" />
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
    };
  },
  methods: {
    /* 回主页 */
    gohome() {
      this.$router.push({ path: '/home' });
    },
    /* 个人信息 */
    seeprofile() {
      this.$router.push({ path: '/home/profile' });
    },
  },
  created() {
    stream.fetch({
      method: 'GET',
      url: 'http://123.207.86.98:3000/api/message/last',
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
input::-ms-input-placeholder{text-align: center;}
input::-webkit-input-placeholder{
  text-align: center;
  color: #ffffff;
}
</style>

<style scoped>
.wrapped {
  width: 100%;
  align-items: center;
}

.messagetype {
  padding-top: 20px;
  padding-bottom: 10px;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  height: 9%;
  background: white;
  border-bottom: 1px gray solid;
}
.chatzone {
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 50%;
  height: 85%;
  border-right: 1px gray solid;
}
.chaticon {
  height: 60px;
  width: 60px;
}
.chosedtext {
  font-size: 40px;
  color: #00CACA;
}

.securedzone {
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 50%;
  height: 85%;
}

.securedicon {
  height: 70px;
  width: 70px;
}

.unchosedtext {
  font-size: 40px;
  color: #C0C0C0;
}

.chatlist {
  /*flex-direction: column;*/
  /*justify-content: flex-start;*/
  width: 100%;
  height: 50%;
  /*border-bottom: 2px gray solid;*/
}

.list {
  flex-direction: column;
  width: 100%;
}

.cell {
  padding: 10px 10px 10px 10px;
  flex-direction: row;
  justify-content: flex-start;
  width: 100%;
  height: 150px;
  border-bottom: 1px gray solid;
}

.chatvirzone {
  /*justify-content:center;
  align-items: center;*/
  width: 120px;
  height: 90%;
}
.sellervir {
  height: 130px;
  width: 130px;
}

.chattextzone {
  padding: 10px 10px 10px 10px;
  flex-direction: column;
  justify-content: center;
  width: 83%;
  height: 100%;
}

.chatnametime {
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
}
/*.sellername {
  width: 70%;
  height: 100%;
}*/
.sellernametext {
  font-size: 45px;
  //font-weight: bold;
}

.posttimetext {
  color: gray;
}


.chatdetailtext {
  color: gray;
  font-size: 35px;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  width: 92%;
}

.footerzone {
  justify-content: center;
  align-items: center;
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 11%;
  border-top: 1px gray solid;
  //box-shadow: 0 -5px 10px rgba(0, 0, 0, 0.2);
  background: white;
}
.footer {
  margin-top: 4px;
  flex-direction: row;
  justify-content: space-around;
  position: absolute;
  width: 100%;
  height: 100%;
}
.footericon {
  height: 80px;
  width: 80px;
}
</style>
