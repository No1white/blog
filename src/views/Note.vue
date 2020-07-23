<template>
  <div class="container">
      <Header title="生活笔记"></Header>
      <div class="articleContainer">
        <Article  :articles="articles.articles"></Article>
      </div>
      <RightNavigation :categorys="articles.categorys"  v-bind:comArticles="articles.comArticles" @goToDetail="goToDetail"></RightNavigation>
    <Paging :articleNum="articles.articleNum"  @getArticle="getAricles"></Paging>
  </div>
</template>

<script>
import Header from '../components/Header'
import Article from '../components/Article'
import RightNavigation from '../components/RightNavigation'
import Paging from '../components/Paging'
import { mapState } from 'vuex'
export default {
  name: 'Note',
  mounted () {
    this.$store.dispatch('getNote',{page:0});

  },
  computed: {
    ...mapState(['articles']),

  },
  methods:{
    goToDetail(id){

      this.$router.push('/article_detail?articleId='+id)
    },
    getAricles(page) {

      this.$store.dispatch('getNote',{page})

    }
  },
  components: {
    Header,
    Article,
    RightNavigation,
    Paging
  }
}
</script>

<style scoped lang="scss">
  .container{
    position: relative;
    .articleContainer{
      width: 70%;
      height: auto;
    }
  }
</style>
