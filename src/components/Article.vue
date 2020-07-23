<template>
    <div class="essayContainer">
      <div class="essayList">
        <div class="essayItem"  v-for="article in articles" :key="article.articleId" @click="goToDetail(article.articleId)">
          <div class="titleLine">

            <h4 class="essayTitle"> <span class="badge badge-danger">{{article.language}}</span> {{article.articleTitle}}</h4>
          </div>
          <div class="essayContent ">
            <div class="imgWrap">
              <img :src="article.thumbnail" class="essayImg " alt="">
            </div>
            <p class="content  ">{{filterMarkdown(article.articleContent)}}
            </p>
          </div>
          <div class="essayInfo">
             <div class="info">
               <p> <span class="iconfont icon-time"></span>{{article.postedTime}}</p>
               <p> <span class="iconfont icon-liulan"></span>{{article.pageView}}浏览</p>
               <p>  <span class="iconfont icon-pinglun"></span>{{article.commentsNum}}评论</p>
             </div>


            </div>
        </div>

      </div>

    </div>

</template>

<script>
export default {
  props:['articles'],
  name: "Essay",
  methods: {
    goToDetail(id){

      this.$router.push('/article_detail?articleId='+id)

    },
    filterMarkdown(content){

      return content.replace(/(#|`)/g,'')
    }
  }
}
</script>

<style scoped lang="scss">
  .essayContainer{
    width: 100%;

    .essayList{
      width: 100%;
      margin: 0;
      padding: 0;
      .essayItem{
        width: 100%;
        background: white;
        padding: 0 1rem;
        margin-top: 0.5rem;
        padding-top: 0.5rem;
        &:hover{
          .essayImg{
            transform: scale(1.1);
          }
        }
        overflow: hidden;
        .titleLine{
          cursor:pointer;
          text-align: left;
          .essayTitle{
            font-size: 1rem;
          }
        }
        .essayContent{
          cursor: pointer;
          display: flex;
          .imgWrap{
            width: 20rem;
            height: 8rem;
            overflow: hidden;
            .essayImg{

              width: 20rem;
              height: 8rem;
              transition: all 2s;
              &:hover{
                transform: scale(1.3);
              }
            }

          }


          .content{
            display: -webkit-box;
            height: 50%;
            width: 100%;
            text-overflow: ellipsis;
            -webkit-box-orient: vertical;
            -webkit-line-clamp:3;
            overflow: hidden;
          }
        }
        .essayInfo{
          float: right;
          .info{
            display: flex;
            p{
              margin-left: 1rem;
            }
          }
        }
      }
    }
  }
</style>
