/*
 * @Description: 接口请求设置
 * @Author: theL07
 * @Date: 2022-06-15 10:16:02
 * @LastEditTime: 2022-06-15 10:19:37
 * @LastEditors: theL07
 */

import config from './config'
const accountInfo = uni.getAccountInfoSync()
const env = accountInfo.miniProgram.envVersion ?? 'develop'
const token = uni.getStorageSync('token')
const request = {
  async init(options) {
    // 解构赋值
    let {
      url,
      api = 'api',
      data = {},
      method = 'GET',
      cType = 'application/x-www-form-urlencoded;charset=UTF-8',
    } = options
    // 请求头
    const header = {}
    // 请求地址
    const host = config.host[api][env]
    // 根据业务需求添加header参数等...
    header['Content-Type'] = cType
    // 设置请求头token
    header.token = token

    // #ifdef VUE3
    try {
      var res = await uni.request({
        url: `${host}${url}`,
        data,
        method,
        header,
      })
    } catch (e) {
      uni.showToast({
        title: '网络出小差了~',
        icon: 'none',
      })
      return
    }
    // #endif
    // #ifndef VUE3
    // 执行请求
    var [error, res] = await uni.request({
      url: `${host}${url}`,
      data,
      method,
      header,
    })
    // 网络出错
    if (error) {
      uni.showToast({
        title: '网络出小差了~',
        icon: 'none',
      })
      return
    }
    // #endif
    // 请求成功处理逻辑
		const res_data = res.data
    if (res_data.state === 'ok') {
      return res_data
    } else if (res_data.msg) {
			if (res_data.msg === '未登录') {
        uni.removeStorageSync('token')
				return Promise.reject({
					msg: '未登录',
					state: 'fail'
				})
			} else {
				return Promise.reject({
					msg: res_data.msg,
					state: 'fail'
				})
			}
		} else {
      return Promise.reject({
        msg: '请求失败',
        state: 'fail'
      })
    }
  },
}
export default request.init