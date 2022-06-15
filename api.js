/*
 * @Description: 接口请求
 * @Author: theL07
 * @Date: 2022-06-15 10:20:55
 * @LastEditTime: 2022-06-15 10:21:33
 * @LastEditors: theL07
 */
// 接口
import Request from './request'
// 测试
const demo = (data) => {
  return Request({
    url: '/applet/index/getRecommendDocs',
    data,
    api: 'test'
  })
}

export default {
  demo
}