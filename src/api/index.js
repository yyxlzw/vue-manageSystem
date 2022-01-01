import { request } from "../utils/request";

class Index {
  getUser(offset, size) {
    return request({
      url: `/users?offset=${offset}&size=${size}`
    })
  }

  getMoment() {
    return request({
      url: "/moment"
    })
  }

  getComment() {
    return request({
      url: "/comment"
    })
  }

  getInfoCount() {
    return request({
      url: "/users/info"
    })
  }
}

export default new Index()