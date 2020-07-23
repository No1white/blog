export default {
  getArticle: (state) => {
      return (articleId)=>state.articles.find(item => item.articleId ==articleId)
  },
  getArticle2: function (state) {

    return function (articleId) {
      return state.articles.find(item => item.articleId ==articleId)
    }
  }
}
