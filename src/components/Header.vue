<template>
  <div class="topHader">
    <span class="iconfont icon-home-fill"></span>
    <span class="iconfont icon-icon-test3"></span>
    <h4 class="title">{{title}}</h4>
  </div>
</template>

<script>
    export default {
        name: "Header",
        props:['title']
    }
</script>

<style scoped lang="scss">
  .topHader{
    width: 70%;
    margin-top: 10px;
    background: white;
    text-align: left;
    padding-left: 20px;
    span{
      font-size: 24px;
    }
    .title{
      font-size: 20px;
      line-height: 20px;
      display: inline-block;
    }
  }
</style>
