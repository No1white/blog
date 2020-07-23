import axios from 'axios'
import qs from 'qs'
import {BaseUrl} from './config'

// 封装数据返回失败提示函数---------------------------------------------------------------------------
function errorState (response) {
  // 隐藏loading
  // 如果http状态码正常，则直接返回数据
  if (response && (response.status === 200 || response.status === 304 || response.status === 400)) {
    // 如果不需要除了data之外的数据，可以直接 return response.data
    return response
  } else {
    alert('数据获取错误')
  }
}
// 封装数据返回成功提示函数---------------------------------------------------------------------------
function successState (res) {
  // 隐藏loading
  // 统一判断后端返回的错误码(错误码与后台协商而定)
  if (res.data.code === '000000') {
    alert('success')
    return res
  }
}
// 封装axios--------------------------------------------------------------------------------------
function apiAxios (method, url, params) {
  let httpDefault = {
    method: method,
    baseURL: BaseUrl,
    url: url,
    // `params` 是即将与请求一起发送的 URL 参数
    // `data` 是作为请求主体被发送的数据
    params: method === 'GET' || method === 'DELETE' ? params : null,
    data: method === 'POST' || method === 'PUT' ? qs.stringify(params) : null,
    timeout: 10000
  }

  // 注意**Promise**使用(Promise首字母大写)
  return new Promise((resolve, reject) => {
    axios(httpDefault)
      // 此处的.then属于axios
      .then((res) => {

        resolve(res)


      }).catch((response) => {

      reject(response)
    })
  })
}

// 输出函数getAxios、postAxios、putAxios、delectAxios，供其他文件调用-----------------------------
// Vue.js的插件应当有一个公开方法 install。这个方法的第一个参数是 Vue 构造器，第二个参数是一个可选的选项对象。
export function getAxios(url,params){return apiAxios('GET',url,params)}
export function postAxios(url,params){return apiAxios('POST',url,params)}
export function putAxios(url,params){return apiAxios('PUT',url,params)}


// export default {
//   install: function (Vue) {
//     Vue.prototype.getAxios = (url, params) => apiAxios('GET', url, params)
//     Vue.prototype.postAxios = (url, params) => apiAxios('POST', url, params)
//     Vue.prototype.putAxios = (url, params) => apiAxios('PUT', url, params)
//     Vue.prototype.delectAxios = (url, params) => apiAxios('DELECT', url, params)
//   }
// }
