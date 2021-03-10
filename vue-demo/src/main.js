import Vue from 'vue'
//配置了jsconfig.json文件，绝对路径用@代替了
import App from '@/App'

Vue.config.productionTip = false
var add=100

new Vue({
  render: h => h(App),
}).$mount('#app')
