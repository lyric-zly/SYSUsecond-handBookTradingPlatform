<template>
  <div class="identity">
    <router-view class="pos" />
  </div>
</template>

<script>
export default {
  data() {},
};
</script>

<style scoped>
.identity {
  background-position: center center;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background-size: cover;
  background-image: url('https://wx3.sinaimg.cn/mw690/006tzQZEgy1frtl3g34dyj30u01hcgnk.jpg');
}
</style>
