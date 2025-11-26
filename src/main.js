import { createApp } from 'vue'
import App from './App.vue'

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import zhTw from 'element-plus/es/locale/lang/zh-tw'

import './assets/iconfont/iconfont.css'
import './assets/scss/style.scss'
import router from './router'

import 'swiper/swiper-bundle.css'

import Card from './components/Card.vue'
import axios from 'axios'

const app = createApp(App)

app.use(ElementPlus, { locale: zhTw })
app.use(router)
app.component('m-card', Card)

app.config.globalProperties.$http = axios.create({
  baseURL: 'http://localhost:3000/web/api'
})

app.mount('#app')
