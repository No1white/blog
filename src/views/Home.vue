<template>
  <div class="container">
      <!--轮播图      -->
      <div class="carousel slide"  data-ride="carousel" id="homeCarousel" >
        <ol class="carousel-indicators" >
          <li data-target="#homeCarousel" data-slide-to="0" class="active" ></li>
          <li data-target="#homeCarousel" data-slide-to="1" ></li>
          <li data-target="#homeCarousel" data-slide-to="2" ></li>
          <li data-target="#homeCarousel" data-slide-to="3" ></li>
          <li data-target="#homeCarousel" data-slide-to="4" ></li>
        </ol>
        <div class="carousel-inner">
          <div class="carousel-item " v-for="(banner,index) in articles.banners" :class="index==0?'active':''"
               @click="goToDetail(banner.articleId)">
            <img :src="banner.thumbnail" alt="" >
          </div>
        </div>
        <a href="#homeCarousel" class="carousel-control-prev" role="button" data-slide="prev">
          <span class="carousel-control-prev-icon"></span>
        </a>
        <a href="#homeCarousel" class="carousel-control-next" role="button" data-slide="next">
          <span class="carousel-control-next-icon"></span>
        </a>
      </div>
      <!--右侧导航      -->
      <RightNavigation :categorys="articles.categorys"  v-bind:comArticles="articles.comArticles" @goToDetail="goToDetail" ></RightNavigation>

<!--    热门文章-->
      <div class="hotArtiCle">
        <h2 class="title">热门文章 <span class="badge badge-danger">Hot</span></h2>
        <Article class="articleList" :articles="articles.articles" ></Article>
      </div>
<!--    分页-->

      <Paging :articleNum="articles.articleNum" @getArticle="getAricles"></Paging>
  </div>
</template>

<script>

import Article from '../components/Article'
import RightNavigation from '../components/RightNavigation'
import Paging from '../components/Paging'
import { mapActions, mapState } from 'vuex'


export default {
  name: 'Home',
  async mounted() {
    this.$store.dispatch('getArticle',{page:0});

  },
  methods: {
    goTo(){
      console.log(this.articles)
      console.log(this.articles.articleNum)
      console.log(this.articles.comArticles)
    },
    goToDetail(id){

      this.$router.push('/article_detail?articleId='+id)
    },
    getAricles(page) {
      console.log(page)
      this.$store.dispatch('getArticle',{page})

    },
  },
  computed: {
    ...mapState(['articles']),
    ...mapActions(['getArticle'])


  },
  components: {
    Article,
    RightNavigation,
    Paging
  }
}
</script>
<style lang="scss" scoped>
    .container{
      position: relative;
      margin-top: 10px;
      .carousel{
        width: 100%;
        height: 100%;
        .carousel-inner{
          width: 100%;
          height: 100%;
          .carousel-item{
            img{
              width: 100%;
              height: 100%;
            }
          }
        }
        width: 70%;
        border: 4px solid #eeeeee;
      }

      .hotArtiCle{
        width: 70%;
        height: auto;

        margin-top: 1rem;
        .title{
          background: white;
          text-align: left;
          padding: 1rem;
          font-size: 1rem;
        }
        .articleList{
          margin-top: 0.5rem;

        }
      }
      .paging{
        margin: 2rem 0rem;
        button{
          margin:0 5px;
        }
      }

    }
</style>
