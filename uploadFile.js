/*
 * @Description: 上传文件请求
 * @Author: theL07
 * @Date: 2022-06-15 10:09:35
 * @LastEditTime: 2022-06-15 10:20:45
 * @LastEditors: theL07
 */
import config from './config'
export const uploadFile = function (data) {
  const accountInfo = uni.getAccountInfoSync()
  const env = accountInfo.miniProgram.envVersion ?? 'develop'
  return new Promise((resolve, reject) => {
    wx.uploadFile({
      url: config.host.api[env] + '/api/upload',
      filePath: data.filePath,
      name: 'file',
      formData: {
        'user': 'test'
      },
      success: function (res) {
        res.data = JSON.parse(res.data)
        resolve(res.data)
      },
      fail: function (err) {
        reject(err)
      }
    })
  })
}