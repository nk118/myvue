import { createApp } from 'vue'
import App from './App.vue'
// 引入 Bootstrap 的樣式和 JS 文件
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import { library } from '@fortawesome/fontawesome-svg-core'
// 引入 AOS 的樣式和 JS 文件
import 'aos/dist/aos.css'
import AOS from 'aos'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { fas } from '@fortawesome/free-solid-svg-icons'

library.add(fas)
const app = createApp(App)

// 註冊 FontAwesome 元件爲全局元件
app.component('font-awesome-icon', FontAwesomeIcon)
AOS.init()
app.mount('#app')
