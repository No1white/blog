import {GET_ARTICLE} from './mutation-types'

export default {
  [GET_ARTICLE](state,articles){



    state.articles =articles;

  }
}
