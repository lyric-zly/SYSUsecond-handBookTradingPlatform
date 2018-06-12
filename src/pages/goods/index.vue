<template>
  <div class="container">
    <div>
      <list class="list">
        <cell class="cell" v-for="item in lists" :key="item.tradeId">
          <div class="panel">
            <div class="img">
              <image class="covers" src="https://upload-images.jianshu.io/upload_images/12650180-dd05a051754ddb19.jpg?imageMogr2/auto-orient/strip%7CimageView2/2/w/400"></image>
            </div>
            <div class="info">
              <div>
                <text calss="text-h2">{{item.name}}</text>
                <text class="text-h1">{{item.price}}</text>
              </div>
              <div class="op">
                <text class="buttons">确认收货</text>
                <text class="buttons">取消交易</text>
              </div>
            </div>
          </div>
        </cell>
      </list>
    </div>
  </div>
</template>

<script>
const stream = weex.requireModule('stream');
// const modal = weex.requireModule('modal');
export default {
  data() {
    return {
      lists: [
        {
          tradeId: '1',
          buyerId: '15331059',
          sellerId: '15331060',
          bookId: '2',
          publisherId: '15331060',
          name: 'test book2',
          author: 'tinglideng',
          img: 'default.jpg',
          campus: 'sysu',
          state: 3,
          description: 'test',
          phoneNum: '13719177172',
          comment: '计算机 测试',
          price: 13.7,
        }, {
          tradeId: '2',
          buyerId: '15331059',
          sellerId: '15331060',
          bookId: '2',
          publisherId: '15331060',
          name: 'test book2',
          author: 'tinglideng',
          img: 'default.jpg',
          campus: 'sysu',
          state: 3,
          description: 'test',
          phoneNum: '13719177172',
          comment: '计算机 测试',
          price: 13.7,
        }],
    };
  },
  created() {
    const TRADE_URL = 'http://123.207.86.98:3000/api/trade';
    stream.fetch(
      {
        method: 'GET',
        url: TRADE_URL,
        type: 'json',
      },
      (ret) => {
        if (!ret.ok) {
          // console.log('error');
        } else {
          // console.log('get' + ret)
          // this.lists = ret.data;
        }
      },
    );
  },

  methods: {

  },
};
</script>

<style scoped>
  .container {
    background-color: #F6F6F6;
    width: 100%;
  }

  .img {
    align-items: center;
  }

  .covers {
    height: 300px;
    width: 200px;
    margin: 25px;
  }

  .list {
    width: 100%;
  }

  .cell {
  }

  .panel {
    height: 350px;
    background-color: #FFFFFF;
    margin-left: 20px;
    margin-right: 20px;
    margin-bottom: 20px;
    margin-top: 20px;
    flex-direction: row;
  }

  .info {
    margin-left: 20px;
    margin-right: 20px;
    margin-bottom: 10px;
    margin-top: 20px;
    justify-content: space-between;
  }

  .op {
    flex-direction: row;
  }

  .right {
    width: 46px;
    height: 46px;
  }

  .block {
    background-color: #FFFFFF;
    width: 100px;
    top: -35px;
    margin-left: 200px;
    justify-content: center;
    align-items: center;
  }

  .line {
    background-color: #585858;
    height: 0.5px;
    width: 80px;
    margin-left: 10px;
    margin-right: 10px;
  }

  .buttons {
    width: 120px;
    height: 50px;
    font-size: 26px;
    border-color: #d4d4d4;
    border-width: 2px;
    border-radius: 35%;
    margin: 10px;
    padding: 5px;
  }

  .text-h1 {
    color: #ECAA96;
    font-size: 32px;
    margin-top: 20px;
  }

  .text-h2 {
    margin-top: 40px;
    margin-left: 10px;

  }
</style>
