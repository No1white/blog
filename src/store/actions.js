import {
  GET_ARTICLE
} from './mutation-types'
import {
  reqArticle,
  reqTechnology,
  reqNote
}  from '../api/api'

export default {
  async getArticle({commit},params){

    if(typeof page ==='object') {
      return ;
    }
    const result = await reqArticle(params.page,params.category);


    commit(GET_ARTICLE,result.data.articles);
  },
  async getTechnology({commit},params){

    if(typeof page ==='object') {
      return ;
    }
    const result = await reqTechnology(params.page,params.category);
    console.log(result)
    commit(GET_ARTICLE,result.data.articles);
  },
  async getNote({commit},params){

    if(typeof page ==='object') {
      return ;
    }
    const result = await reqNote(params.page,params.category);
    console.log(result)
    commit(GET_ARTICLE,result.data.articles);
  }



}
