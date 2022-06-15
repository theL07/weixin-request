/*
 * @Description: 请求接口配置文件
 * @Author: theL07
 * @Date: 2022-06-15 10:05:26
 * @LastEditTime: 2022-06-15 10:06:09
 * @LastEditors: theL07
 */
const config = {
  /**
   * 接口地址
   */
  host: {
    api: {
      develop: 'https://xxxxx',
      trial: 'https://xxxxx',
      release: 'https://xxxxx',
    },
    test: {
      develop: 'https://xxxxx-uat.xxx',
      trial: 'https://xxxxx-uat.xxx',
      release: 'https://xxxxx-uat.xxx',
    }
  }
  // 其他自定义配置项
}
export default config