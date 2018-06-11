<template>
  <div class="wrapped">
    
    <div class="messagetype">
      <div class="chatzone">
        <image class="chaticon" src="https://upload-images.jianshu.io/upload_images/1409578-6cf9b27bb569f9fc.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240"/>
        <text class="chosedtext"> 对话 </text>
      </div>
      <div class="securedzone">
        <image class="securedicon" src="https://upload-images.jianshu.io/upload_images/1409578-e71f1d77aebc583d.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240"/>
        <text class="unchosedtext"> 通知 </text>
      </div>
    </div>
    
    <div class="chatlist">
      <list class="list">
        <cell class="cell" v-for="item in boxes" v-if="item.recieverId==15331059">
          <image class="sellervir" src="https://upload-images.jianshu.io/upload_images/1409578-e846c3ea7c900734.jpg?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240"/>
          <div class="chattextzone">
            <div class="chatnametime">
              <text class="sellernametext">{{item.senderId}} </text>
              <text class="posttimetext">{{item.max}}</text>
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
        <image class="footericon" src="https://upload-images.jianshu.io/upload_images/1409578-ffd1470f7531581e.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240"/>
        <image class="footericon" src="https://upload-images.jianshu.io/upload_images/1409578-f16e7e7d86bec92b.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240"/>
        <image class="footericon" src="https://upload-images.jianshu.io/upload_images/1409578-bcfdd8377f19ec24.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240"/>
      </div>
    </div>
  </div>
</template>



<script>
  export default {
    data () {
      return {
        boxes: [{
         sessionId:1,
         senderId:15331060,
         recieverId:15331059,
         content:'你好，请问在吗？',
         max:'2018-06-07T07:49:39.000Z',
        }, {
         sessionId:2,
         senderId:15331078,
         recieverId:15331059,
         content:'你好，请问在吗？请问《小王子》还在吗还在吗？',
         max:'2018-06-07 07:49:39',
        }],
      };
    },
  }
</script>

<style type="text/css">
input::-ms-input-placeholder{text-align: center;}
input::-webkit-input-placeholder{
  text-align: center;
  color: #ffffff;
}
</style>

<style scoped>
.wrapped{
  align-items: center;
}

.messagetype{
  padding-top: 20px;
  padding-bottom: 10px;
  flex-direction: row;
  justify-content:space-between;
  width:100%;
  height:9%;
  border-bottom:2px gray solid;
  
}
.chatzone{
  flex-direction: row;
  justify-content:center;
  align-items: center;
  width:50%;
  height:85%;
  border-right:1px gray solid;
}

.chaticon{
  height:60px;
  width:60px; 
}

.chosedtext{
  font-size: 40px;
  color:#00CACA;
}

.securedzone{
  flex-direction: row;
  justify-content:center;
  align-items: center;
  width:50%;
  height:85%;
}

.securedicon{
  height:70px;
  width:70px; 
}

.unchosedtext{
  font-size: 40px;
  color:#C0C0C0;
}

.chatlist{
  /*flex-direction: column;*/
  /*justify-content:flex-start;*/
  width:100%;
  height:50%;
  /*border-bottom:2px gray solid;*/
}

.list{
  flex-direction: column;
  width:100%;
}

.cell{
  padding-top: 20px;
  /*padding-top: 20px;*/
  padding-bottom: 5px;
  flex-direction: row;
  justify-content: flex-start;
  width:100%;
  height:150px;
  border-bottom:1px gray solid;
}

.chatvirzone{
  /*justify-content:center;
  align-items: center;*/
  width:120px;
  height:90%;
}
.sellervir{
  height:120px;
  width:120px;
}

.chattextzone{
  flex-direction: column;
  justify-content: center;
  width:83%;
  height:100%;
}

.chatnametime{
  flex-direction: row;
  justify-content: space-between;
  width:100%;
}
/*.sellername{
  width:70%;
  height:100%;
}*/
.sellernametext{
  font-size: 35px;
  font-weight: bold;
}

.posttimetext{
  color:gray;
}


.chatdetailtext{
  color:gray;
  font-size: 30px;
  text-overflow:ellipsis;
  overflow: hidden;
  white-space: nowrap;
  width:92%;
}


.footerzone{
  justify-content:center;
  align-items: center;
  position:absolute;
  bottom:0;
  width:100%;
  height:9%;
  border-top:2px gray solid;
}
.footer{
 /* margin-top:10px;*/
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  position:absolute;
  width:100%;
  height:100%;
}
.footericon{
  height:70px;
  width:70px;
}
</style>