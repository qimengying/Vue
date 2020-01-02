<template>
  <div>
      <van-tabbar v-model="active">
        <van-tabbar-item icon="home-o" to="/"></van-tabbar-item>
        <van-tabbar-item icon="search" to="middle"></van-tabbar-item>
        <van-tabbar-item icon="friends-o" to="mine"></van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
     data() {
    return {
      active: 0
    }
  }
}
</script>

<style>

</style>