import {getAxios,postAxios} from './request'

export function reqArticle(page,category) {return getAxios('/?page='+page+'&category='+category)} //获取文章
export function reqArticleMd(articleId) {return getAxios('/article/?articleId='+articleId)} //获取文章的md文件
export function reqTechnology (page,category) {return getAxios('/technology?page='+page+'&category='+category)} //获取技术专栏
export function reqNote (page,category) {return getAxios('/note?page='+page+'&category='+category)} //获取生活笔记
