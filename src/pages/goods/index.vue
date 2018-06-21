<template>
  <div class="container">
    <wxc-minibar v-bind:title="title" background-color="#c6e9eb" text-color="#FFFFFF"/>
    <div>
      <list class="list">
        <cell class="cell" v-for="item in lists" :key="item.tradeId">
          <div class="panel">
            <div class="img">
              <image v-if="item.img === 'default.jpg'" class="covers" src="https://upload-images.jianshu.io/upload_images/12650180-dd05a051754ddb19.jpg?imageMogr2/auto-orient/strip%7CimageView2/2/w/400" />
              <image v-else class="covers" src="item.img"/>
            </div>
            <div class="info">
              <div>
                <text calss="text-h2">{{item.name}}</text>
                <text class="text-h1">{{item.price}}</text>
              </div>
              <div v-if="sn === 1" class="op">
                <wxc-button text="下架" type="white" size="small" class="buttons"></wxc-button>
                <wxc-button text="编辑" type="white" size="small" class="buttons"></wxc-button>
              </div>
              <div v-else-if="sn === 2" class="op">
                <wxc-button text="取消交易" type="white" size="small" class="buttons"></wxc-button>
              </div>
              <div v-else-if="sn === 3" class="op">
                <wxc-button text="确认收货" type="white" size="small" class="buttons"></wxc-button>
                <wxc-button text="取消交易" type="white" size="small" class="buttons"></wxc-button>
              </div>
            </div>
          </div>
        </cell>
      </list>
    </div>
  </div>
</template>

<script>
import { WxcMinibar, WxcButton } from 'weex-ui';

const stream = weex.requireModule('stream');
// const modal = weex.requireModule('modal');
export default {
  components: { WxcMinibar, WxcButton },
  data() {
    return {
      title: 'MiniBar',
      sn: -1,
      sid: 123456,
      lists: [],
    };
  },
  created() {
    this.sn = Number(this.$route.params.state);
    switch (this.sn) {
      case 1:
        this.title = '正在出售';
        break;
      case 2:
        this.title = '等待确认';
        break;
      case 3:
        this.title = '等待收货';
        break;
      case 4:
        this.title = '已确认';
        break;
      default:
        break;
    }

    if (Number(this.$route.params.state) === 1) {
      const USER_URL = 'http://123.207.86.98:3000/api/user/login';
      stream.fetch(
        {
          method: 'GET',
          url: USER_URL,
          type: 'json',
          headers: {
            Authorization: `Bearer ${this.$store.default.state.token}`,
            'Content-Type': 'application/json',
          },
        },
        (ret) => {
          if (ret.ok) {
            this.sid = ret.data.studentId;
          }
        },
      );

      const BOOK_URL = 'http://123.207.86.98:3000/api/book';
      stream.fetch(
        {
          method: 'GET',
          url: BOOK_URL,
          type: 'json',
          headers: {
            Authorization: `Bearer ${this.$store.default.state.token}`,
            'Content-Type': 'application/json',
          },
        },
        (ret) => {
          if (ret.ok) {
            this.lists = ret.data.filter(item => (item.publisherId === this.sid
              && item.state === Number(this.$route.params.state)));
          }
        },
      );
    } else {
      const TRADE_URL = 'http://123.207.86.98:3000/api/trade';
      stream.fetch(
        {
          method: 'GET',
          url: TRADE_URL,
          type: 'json',
          headers: {
            Authorization: `Bearer ${this.$store.default.state.token}`,
            'Content-Type': 'application/json',
          },
        },
        (ret) => {
          if (!ret.ok) {
            //
          } else {
            this.lists = ret.data.filter(item => item.state === Number(this.$route.params.state));
          }
        },
      );
    }
  },

  methods: {
  },
};
</script>

<style scoped>
  .container {
    background-color: #F6F6F6;
    width: 100%;
    height: 100%;
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
    margin-left: 10px;
    margin-right: 10px;
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
