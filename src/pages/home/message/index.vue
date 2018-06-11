<template>
  <div class="wrapped">
    <div class="messagetype">
      <div class="chatzone">
        <image class="chaticon" src="https://upload-images.jianshu.io/upload_images/1409578-e8a1839fcfa576eb.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240"/>
        <text class="unchosedtext"> 对话 </text>
      </div>
      <div class="securedzone">
        <image class="securedicon" src="https://upload-images.jianshu.io/upload_images/1409578-38cd6c89f304d208.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240"/>
        <text class="chosedtext"> 通知 </text>
      </div>
    </div>
    
    
    <div class="securedlist">
      <list class="list">
      <cell class="cell" v-for="item in boxes" v-if="item.publisherId==15331060">
        <div class="secureddetail">
          <text class="detailtextnotread"> 您的书《{{item.name}}》正在出售</text>
        </div>
        <div class="securedtime">
          <text class="timetextnotread">2018.6.15</text>
          <text class="timetextnotread">22:03</text>
        </div>
      </cell>
      
      /* 只是为了显示已读灰色效果，主体用上面即可， 没来的及改   */
       <cell class="cell">
        <div class="secureddetail">
          <text class="detailtextread"> 您的书《牛虻》正在出售</text>
        </div>
        <div class="securedtime">
          <text class="timetextread">2018.6.15</text>
          <text class="timetextread">20:03</text>
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
    data (){
      return{
        boxes: [{
          name: '小王子',
          description: '可刀可刀，可刀可刀。超级好看超级好看。超级好看超级好看',
          price:18,
          publisherId:15331060,
        }, {
          bookpicture:[
            'https://upload-images.jianshu.io/upload_images/1409578-2c55950226fc3761.jpg?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240'
          ],
          name: '小王子',
          description: '可刀可刀，可刀可刀。超级好看超级好看。超级好看超级好看',
          price:18,
          publisherId: '妮娜',
        }]
      }
    }
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

.securedlist{
  width:100%;
  height:50%;
  border-bottom:1px gray solid;
}
.list{
  flex-direction: column;
   width:100%;
}
.cell{
  padding: 20px 15px 5px 25px;
  flex-direction: row;
  justify-content: space-between;
  width:100%;
  height:130px;
  border-bottom:1px gray solid;
}

.secureddetail{
  width:70%;
  height:90%;
  flex-direction: column;
  justify-content:center;
}
.detailtextnotread{
  font-size:37px;
  font-weight:bold;
  text-overflow:ellipsis;
  overflow: hidden;
  white-space: nowrap;
}
.detailtextread{
  font-size:37px;
  font-weight:bold;
  color:gray;
  text-overflow:ellipsis;
  overflow: hidden;
  white-space: nowrap;
}
.securedtime{
  width:30%;
  height:90%;
  flex-direction: column;
  justify-content:center;
  align-items:flex-end;
}
.timetextnotread{}
.timetextread{
  color:gray;
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