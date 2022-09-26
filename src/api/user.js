import request from '@/utils/request'

export const getUserInfoAPI = (id) => {
  return request({
    url: `/user-service/user/${id}`
  })
}
