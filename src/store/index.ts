import { createStore } from 'vuex'

export default createStore({
  // 状态管理
  state: {
    tabs: [
      {
        title: "个人主页",
        path: "/home/index",
      },
    ]
  },
  // 专用修改state数据 通过commit触发
  mutations: {
    ADD_TABS(state, payload) {
      // state.tabs.find(item => item.title === payload.title  查询数组中对象有没有该title 如果没有会返回und
      if (!(state.tabs.find(item => item.title === payload.title))) {
        state.tabs.unshift(payload)
      }
    },
    REMOVE_TABS(state, payload) {
      for (let i = 0; i < state.tabs.length; i++) {
        if (state.tabs[i].title === payload) {
          state.tabs.splice(i, 1)
        }
      }
    },
  },
  // 通过dispatch触发 不能直接修改state 得在组件中通过dispatch触发action函数内部commit触发mutation修改state值
  actions: {
  },
  // 模块化管理
  modules: {
  }
})
