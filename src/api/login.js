import { request } from "../utils/request";

class LoginInfo {
  userLogin(name, password) {
    return request({
      method: 'post',
      url: '/login',
      data: {
        name,
        password
      }
    })
  }
}

export default new LoginInfo()