//template
<template>
  <div class="container">
      <div class="aboutMe">
        <img src="../../public/img/avatar.jpg"  class="avatar" alt="">
        <h2 class="nickName">空白</h2>
        <p class="email">1072368472@qq.com</p>
        <p class="occupation">职业：学生</p>
        <a class="github" href="https://github.com/No1white">github</a>
      </div>
  </div>
</template>

<script>
export default {
  name: 'componentsTooltips',

};
</script>
<style scoped lang="scss">
  .container{
    margin-top: 1rem;
    background: white;
    padding-bottom: 20px;
    .aboutMe{
      img{
        width: 200px;
        height: 200px;
        border-radius: 50%;
        margin-top: 20px;
      }
    }
  }
</style>
