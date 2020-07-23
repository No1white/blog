<template>
  <div>
    <div id="doc-content" ref="docContent">
		<textarea style="display:none;" id="text">
      {{this.mdJson}}
		</textarea>
    </div>
  </div>
</template>

<script>

  export default {
    props:['mdJson'],
    data() {
      return {
        blogEditor:{}
      }
    },
    methods: {

    },
    mounted() {
      console.log(this.mdJson);
    },
    created(){
      console.log(this.mdJson)
      var _this = this;
      _this.$nextTick(() =>{
        const blogEditor = editormd.markdownToHTML("doc-content",{
          placeholder : '欢迎使用editor.md 编辑器',
          width : "100%",
          height : "880",
          emoji :false,
          /* path : '../../../static/editor.md-master/lib/' ,*/
          path : '/editor.md-master/lib/',
          //pluginPath:'/plugins',
          edit:false,
          markdown:this.mdJson,
          taskList: true,
          tex: true, // 默认不解析
          flowChart: true, // 默认不解析
          sequenceDiagram: true, // 默认不解析
          codeFold: true,
          toolbar  : false,
          /**设置主题颜色*/
          /* editorTheme: "pastel-on-dark",
           theme: "gray",
           previewTheme: "dark"*/
        });
        //将刚刚定义的对象 存到vue中，用的时候再取出来
        _this.blogEditor = blogEditor;
      });
    }
  }
  // console.log($('#test'))
  // console.log($('#doc-content'))
  // var testEditor;
  // $(function () {
  //   testEditor = editormd.markdownToHTML("doc-content", {//注意：这里是上面DIV的id
  //     htmlDecode: "style,script,iframe",
  //     emoji: true,
  //     taskList: true,
  //     tex: true, // 默认不解析
  //     flowChart: true, // 默认不解析
  //     sequenceDiagram: true, // 默认不解析
  //     codeFold: true,
  //   });});
</script>

