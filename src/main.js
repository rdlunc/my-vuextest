/*
入口JS
 */
import Vue from 'vue'
import App from './App.vue'

import './base.css'
import store from "./store";

// 创建vm
//compiler
// new Vue({
//   el: '#app',
//   components: {App}, // 映射组件标签
//   template: '<App/>' // 指定需要渲染到页面的模板
// })

//runtime
new Vue({
  render: h => h(App),
  store //所有组件对象都多一个属性：$store
}).$mount('#app')