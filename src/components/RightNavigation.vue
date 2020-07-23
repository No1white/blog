<template>
  <div class="rightNavigation">
    <div class="connect">
      <div class="authorInfo">
        <h4 class="authorName">作者：white</h4>
        <p class="info">职业：学生</p>
        <p class="Emial">Emial：<span>1072368472@qq.com</span></p>
      </div>
      <a href="https://github.com/No1white">
        <span class="iconfont icon-github"></span>
      </a>
      <a href="">
        <span class="iconfont icon-weibo"></span>
      </a>
      <a href="">
        <span class="iconfont icon-yooxi"></span>
      </a>
      <a href="">
        <span class="iconfont icon-QQ"></span>
      </a>
    </div>
    <div class="category">
      <h4 class="categoryTitle">分类</h4>
      <div class="btnGroup">
        <button class="btn btn-primary" v-for="(category,index) in categorys"
                @click="getArticle(category)" :class="btnClasses[index]">{{category}}</button>
      </div>
    </div>
    <div class="newest">
      <a href="#"  v-for="(article,index) in comArticles" @click="goToDetail(article.articleId)" ><span class="badge "   :class="spanClasses[index%7]">[{{index}}] </span>  {{article.articleTitle}}</a>

    </div>
  </div>
</template>

<script>
    export default {
        name: "RightNavigation",
        props:['categorys','comArticles'],
        data() {
          return {
            btnClasses:['btn-primary','btn-info','btn btn-success','btn-danger','btn-dark','btn-secondary','btn-primary'],
            spanClasses:['badge-primary','badge-info','badge badge-success','badge-danger','badge-dark','badge-secondary','badge-primary']
          }
        },
        methods:{
          getArticle(category){
            console.log(category)
            this.$store.dispatch('getArticle',{page:0,category})
            this.$store.state.category = category;

          },
          goToDetail(articleId){
            this.$emit("goToDetail",articleId)
          }
        }
    }
</script>

<style scoped lang="scss">
  .rightNavigation{
    position: absolute;
    width: 30%;
    right: 0;
    top: 0;
    height: auto;

    .connect{
      padding: 0.5rem;
      height: 9rem;
      background: white;
      p{
        margin: 0;
      }
      a{
        text-decoration: none;
        color: black;
        span{
          font-size: 2rem;
        }
        margin:0 1rem;
      }
    }
    .category{
      margin-top: 0.5rem;
      background: white;
      .categoryTitle{
        padding-top: 0.5rem;
        border-bottom: 1px solid #eeeeee;
      }
      .btnGroup{
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        button{
          width: 40%;
          margin:0.5rem 0.5rem;
        }

      }
    }
    .newest{
      margin-top: 1rem;
      background: white;
      a{
        margin-top: 0.4rem;
        padding: 5px 0px;
        border-top: 1px solid #efefef;
        text-decoration: none;
        color: black;
        display: block;
      }
    }
  }
</style>
