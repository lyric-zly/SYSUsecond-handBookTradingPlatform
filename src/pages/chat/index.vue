<template>
  <div class = "box">
      <div class="title lightshadow">
          <text class="back" @click="go_back()"> <</text>
          <text class="titletext">{{name}}</text>
      </div>
      <scroller class="list">
        <cell v-for="(index, clum) in lists" :ref = "clum"> 
          <div class="panel">
            <text class="text1" :ref="'text1'+clum" >{{index}}</text>
          </div>
        </cell>
      </scroller>  
          <div class="input-wrapper1">  
            <image class="input-img1" src="https://wx2.sinaimg.cn/mw690/006tzQZEgy1frtl3fk45cj302o02o0sh.jpg"></image> 
            <div class = "box_send">
              <input  v-model="information" @input="oninputUserPassword" @change="onchangeUserPassword" class="input1"  placeholder="请输入message" value=""/>  
              <text class="send_text send" @click="send_message()">发送</text>  
            </div>
      </div>  
  </div>
</template>

<script>
  var stream = weex.requireModule('stream');  
  var navigator = weex.requireModule('navigator');
  var modal = weex.requireModule('modal');
  const dom = weex.requireModule('dom')
  var interval_time = 1000;
  var now_sessionId = 1;//用于测试的房间号
  var tem = 0;
  var timer; 
  export default {
    data () {
      return {
        name: '聊天室',
        information: '',
        lists:[]
      }
    },
     created() { 
	 //第一次执行
	 stream.fetch({
                                method: 'GET',
                                url: `http://123.207.86.98:3000/api/message/${this.$route.query.sessionId}`,
                                type: 'json',
                                headers: {
                                  Authorization: `Bearer ${this.$store.default.state.token}`,
                                  'Content-Type': 'application/json',
                                },
                              }, (ret) => {
                                //debugger;
                                if (!ret.ok) {
                                  modal.toast({ message: 'get message fail', duration: 1.0 })
                                } else {
                                  //modal.toast({ message: 'get message successfully' + this.lists.length + ret.data.length, //duration: 1.0 })   
                                  if (this.lists.length < ret.data.length) {//判断有新消息
                                    for (let i = this.lists.length; i < ret.data.length; i++) {
                                      this.lists.push(ret.data[i].senderId + ': ' + ret.data[i].content);

                                    }
                                    setTimeout(() =>{
                                        const el = this.$refs[this.lists.length - 3]
                                        dom.scrollToElement(el, { offset: 0 })//滚动到对应的最后一条消息
                                        },interval_time); 
                                  }
                                }
                              }, (response) => {
                                //debugger;    
                              });
	 
             now_sessionId = this.$route.query.sessionId;
                     timer =  setInterval(() => {
                              stream.fetch({
                                method: 'GET',
                                url: `http://123.207.86.98:3000/api/message/${this.$route.query.sessionId}`,
                                type: 'json',
                                headers: {
                                  Authorization: `Bearer ${this.$store.default.state.token}`,
                                  'Content-Type': 'application/json',
                                },
                              }, (ret) => {
                                //debugger;
                                if (!ret.ok) {
                                  modal.toast({ message: 'get message fail', duration: 1.0 })
                                } else {
                                  //modal.toast({ message: 'get message successfully' + this.lists.length + ret.data.length, //duration: 1.0 })   
                                  if (this.lists.length < ret.data.length) {//判断有新消息
                                    for (let i = this.lists.length; i < ret.data.length; i++) {
                                      this.lists.push(ret.data[i].senderId + ': ' + ret.data[i].content);

                                    }
                                    setTimeout(() =>{
                                        const el = this.$refs[this.lists.length - 3]
                                        dom.scrollToElement(el, { offset: 0 })//滚动到对应的最后一条消息
                                        },interval_time); 
                                  }
                                }
                              }, (response) => {
                                //debugger;    
                              });
                              //debugger;
                            }, interval_time);
            setTimeout(() =>{
              const el = this.$refs[this.lists.length - 3]
              dom.scrollToElement(el, { offset: 0 })//滚动到对应的最后一条消息
              },interval_time);  
                  },

      destroyed() {
			clearInterval(timer) ;
			console.log('在页面被销毁时调用');
		},
      
    
  methods: {

    send_message: function() {
     stream.fetch({
                                method: 'POST', 
                                url: `http://123.207.86.98:3000/api/message/${this.$route.query.sessionId}`,  
                                headers:{  
                                        Authorization: `Bearer ${this.$store.default.state.token}`,
                                        'Content-Type': 'text/plain',},
                        body:( this.information)
                      }, (ret) => {
                        if(!ret.ok){
                          modal.toast({ message: 'post message fail', duration: 1.0 });  
                          }else{
                            //modal.toast({ message: 'post message successfully', duration: 1.0 });
                          }
                        },(response) => {
                      });

              setTimeout(() =>{
              const el = this.$refs[this.lists.length - 3]
              dom.scrollToElement(el, { offset: 0 })//滚动到对应的最后一条消息
              },interval_time);  
                    this.information = ""; 
    }, 
     
    oninputUserPassword: function(event){
      this.information =  event.value;
    },
  
  onchangeUserPassword: function(event){
      this.information =  event.value; 
    },
	go_back: function(){
      //modal.toast({ message: 'goback', duration: 1.0 });  
      //clearInterval(timer) ;
	  //modal.toast({ message: 'get message fail', duration: 1.0 })
      this.$router.go(-1); 
    }
  }
  }
</script>

<style scoped>
  .box {
    display: flex;
    flex-direction: column;
    //justify-content: space-between;
    //align-content: space-between;
  }
  .title{
    position: absolute;
    top: 0;
    left: 0;
    background: #00E3E3;
    height:80px;
    width:100%;
  }
  .lightshadow {
    box-shadow: 0 10px 15px rgba(0, 0, 0, 0.2);
  }
  .back{
    font-size: 80px;
    color:#FFFFFF;
  }
  .titletext{
    position: absolute;
    text-align: center;
    font-size: 50px;
    width: 100%;
    color:#FFFFFF;
  }
  .list {
   height: 1050px;
    width: 100%;
    bottom: 80px;
    top: 80px;
  }
  .panel {
    margin-top: 35px;
    margin-bottom: 35px;
  }
   .text1 {
    margin-left: 25px;
    margin-right: 25px;
    font-size: 40px;
    text-align: left;
    color: #41B883;
  } 
  .send_text{
    position: absolute; 
    right: 0;
    text-align: center;
    width:230px;
    height:80px;
    border:2px solid;
    border-radius:2px;
    background: #00CACA;
  }
  .send{
      font-size: 40px;
      color: #E0E0E0;
        top:15px;  
        right: 15px;  
        width: 16%;  
        height: 60px; 
  }
    .input-wrapper1{  
        top:  90px ;
        width: 100%;  
        height: 90px;
        bottom: 30px;  
    }  
    .box_send{
      flex-direction: row;
    }
    .input1 {  
        font-size: 30px;  
        height: 80px;  
        width: 70%;
        left: 11%;  
        right: 230px;
        top: 0px;  
        bottom: 40px;  
        border-width:2px; 
        border-color: #AAAAAA;  
        border-radius:10px;  
        outline: none;  
    }  
    .input-img1{  
        position: absolute;  
        top:10px;  
        left: 15px;  
        width: 60px;  
        height: 60px;  
    }  
</style>

