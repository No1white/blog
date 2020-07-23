<template>
    <div class='container'>
      <Header title="技术专栏"></Header>
      <div class='articleContainer'>
        <Article  :articles="articles.articles" ></Article>
      </div>
      <RightNavigation :categorys="articles.categorys"  v-bind:comArticles="articles.comArticles" @goToDetail="goToDetail" ></RightNavigation>
      <Paging :articleNum="articles.articleNum"  @getArticle="getAricles"></Paging>
    </div>
</template>

<script>
import Header from '../components/Header'
import Article from '../components/Article'
import RightNavigation from '../components/RightNavigation'
import Paging from '../components/Paging'
import { mapActions, mapState } from 'vuex'
export default {
  name: 'Technology',
  mounted () {
    this.$store.dispatch('getTechnology',{page:0});

  },
  computed: {
    ...mapState(['articles']),

  },
  methods:{
    goToDetail(id){

      this.$router.push('/article_detail?articleId='+id)
    },
    getAricles(page) {

      this.$store.dispatch('getTechnology',{page})

    }
  },
  components: {
    Header,
    RightNavigation,
    Article,
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
        Articles{

        }
      }
    }

</style>
