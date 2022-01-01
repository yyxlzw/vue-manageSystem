import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 引入 ElementPlus 
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
// 引入阿里图标
import "./assets/css/iconfont.css";

const app = createApp(App)
app.use(store)
app.use(router)
app.mount('#app')

app.use(ElementPlus)
