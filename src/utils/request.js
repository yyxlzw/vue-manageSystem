// 封装第三方框架
import axios from 'axios'
// success和failure 都是函数 自定义的
import router from "../router"

import { ElMessageBox } from 'element-plus'
export function request(config) {
  // 1、创建axios 实例
  const instance = axios.create({
    baseURL: "http://localhost:9000",
    timeout: ""
  })
  // 2、axiso拦截器
  // 一 发送拦截器
  // 能干啥呢
  // 比如config中的信息不符合服务的要求
  // 比如每次发送网络请求时，都希望再界面中显示一个请求图标
  // 某些网络请求 比如登录(token)， 必须携带一些特殊信息
  instance.interceptors.request.use(config => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.token = token
    }
    return config  // 一定要返回这个 不然拦截掉后就没结果了
  }, err => {
    console.log(err);
  })

  // 二 响应拦截
  instance.interceptors.response.use(res => {
    return res.data  // 这里只需要返回data
  }, err => {
    console.log(err.response);
    // 当响应码为401证明token过期 或者没有token
    switch (err.response.status) {
      case 400:
        ElMessageBox.alert(err.response.data.message, '提示', {
          confirmButtonText: 'OK',
        })
        break;
      case 401:
        ElMessageBox.alert('请先登录', '提示', {
          confirmButtonText: 'OK',
          callback: () => {
            router.replace('/login');
          },
        })
        break;
    }
  })


  // 3、发送真正的网络请求
  return instance(config)
  // 真正发送请求
  // instance(config)
  // .then(res => {
  //   resolve(res)
  // })
  // .catch(err => {
  //   reject(err)
  // })
}