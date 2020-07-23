<template>
    <div class="container">
      <div class="paging">
        <div class="btn-group">
          <button class="btn btn-light" @click="getAricles(0)">首页</button>
          <button class="btn btn-light" @click="pageBack">上一页</button>
          <button class="btn btn-light" v-for="i in getPage" :key="i" @click="getAricles(i+1)">{{i+1}}</button>

          <button class="btn btn-light" @click="nextPage" >下一页</button>
          <button class="btn btn-light" @click="getAricles(Math.floor(articleNum/10)+1)" >尾页</button>
          <button class="btn btn-light" >共{{Math.floor(articleNum/10 <= 0 ? 1 :Math.floor(articleNum/10)+1)}}页</button>

        </div>
      </div>
    </div>
</template>

<script>
    export default {
        props: ['articleNum'],
        name: "Paging",
        data() {
          return {
              page:0,
              maxPage:0,
          }
        },

        mounted () {

        },
        computed: {
          getPage(){
            let arr = [];

            for(let i =0;i<=Math.floor(this.articleNum/10);i++) {
              console.log(i)
              arr.push(i);
            }
            this.maxPage = arr.length;
            return arr;
          }
        },
        methods: {
          getAricles(page) {

           this.$emit('getArticle',page)

            // this.$store.dispatch('getArticle',{page})

          },
          nextPage(){

            this.getAricles(this.page+1>this.maxAge?this.maxPage:this.page+1);
          },
          pageBack(){
            this.getAricles(this.page-1<=0?0:this.page-1);
          }
        }

    }
</script>

<style scoped lang="scss">
  .paging{
    width: 70%;
    margin: 2rem 0rem;
    button{
      margin:0 5px;
    }
  }
</style>
