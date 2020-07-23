<template>
    <div class="container">
      <div class="topGuide">
        <span class="iconfont icon-shouye_tianchong" ></span>


        <span class="iconfont icon-icon-test3"></span>
        <p class="articleTitle">{{mdData.articleTitle}}</p>
      </div>
      <div class="articleInfo">
        <div class="articleTitle">{{mdData.articleTitle}}</div>
        <div class="info">
          <p class="language">{{mdData.language}}</p>
          <p class="postedTime">{{mdData.postedTime}}</p>
          <p class="pageView">{{mdData.pageView}}浏览</p>
          <p class="commentsNum">{{mdData.commentsNum}}评论</p>
        </div>
      </div>
      <div class="mdContainer" ref="mdContainer"  >

        <div id="doc-content" ref="docContent">
            <textarea style="display:none;" id="text">

            </textarea>
        </div>
      </div>

    </div>
</template>

<script>
import { reqArticleMd } from '../api/api'
import { mapState } from 'vuex'
export default {
  name: 'ArticleDetail',
  data () {
    return {
      mdData: { }
    }
  },
  computed: {
    ...mapState(['articles'])
  },
  async mounted () {
    const result = await reqArticleMd(this.$route.query.articleId)
    console.log(result.data.mdData)
    this.mdData = result.data.mdData
    var _this = this
    _this.$nextTick(() => {
      const blogEditor = editormd.markdownToHTML("doc-content",{
        placeholder : '欢迎使用editor.md 编辑器',
        width : "100%",
        height : '880',
        emoji :false,
        /* path : '../../../static/editor.md-master/lib/' ,*/
        path : '/editor.md-master/lib/',
        //pluginPath:'/plugins',
        edit:false,
        markdown:this.mdData.articleContent,
        taskList: true,
        tex: true, // 默认不解析
        flowChart: true, // 默认不解析
        sequenceDiagram: true, // 默认不解析
        codeFold: true,
        toolbar: false
      });

      _this.blogEditor = blogEditor;
    });

  },
  methods:{
    goTo(path){

    }
  },
  created() {

  },
  components: {

  }
}
</script>

<style scoped lang="scss">
  .test{
    height: 200px;
    background: red;
  }
  .container{
    margin-top: 5px;
    background: white;
    .topGuide{
      text-align: left;
      margin-left: 1rem;
      .icon-shouye_tianchong{
        cursor: pointer;

      }
      span{
        font-size: 2rem;
      }
      p{
        font-size: 1rem;
        vertical-align: middle;
        display: inline-block;
      }
      .articleTitle{
        color: rgba(0,0,0,.4);
      }
    }
    .articleInfo{
      border-top: 2px solid #eeeeee;
      .articleTitle{
        font-size: 2rem;
      }
      .info{
        .language{
          &:before{
            content:'\e615' ;
            margin-right: 3px;
            font-family: "iconfont" !important;
          }
        }
        .postedTime{
          &:before{
            content:'\e656' ;
            margin-right: 3px;
            font-family: "iconfont" !important;
          }
        }
        .pageView{
          &:before{
            content:'\e61d' ;
            margin-right: 3px;
            font-family: "iconfont" !important;
          }
        }
        .commentsNum{
          &:before{
            content:'\e695' ;
            margin-right: 3px;
            font-family: "iconfont" !important;
          }
        }
        p{
          span{
            margin: 0 4px;
          }
          margin-left: 10px;
          display: inline-block;
        }
      }
    }
  }
</style>
