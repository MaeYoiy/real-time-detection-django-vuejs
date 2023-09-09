import Vue from 'vue'
import App from './App.vue'
import WebSocketService from './WebSocketService'; // สร้างไฟล์ WebSocketService.js สำหรับการเชื่อมต่อ WebSocket

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

WebSocketService.connect(); // เชื่อมต่อ WebSocket เมื่อโหลดแอป
