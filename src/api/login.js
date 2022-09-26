import request from '@/utils/request'

// 请求验证码图片
export const getCodeAPI = (clientToken) => {
  return request({
    url: `/user-service/user/imageCode/${clientToken}`,
    responseType: 'blob'
  })
}
// 去登陆 获取token
export const toLoginAPI = (data) => {
  return request({
    url: '/user-service/user/login',
    method: 'POST',
    data
  })
}
