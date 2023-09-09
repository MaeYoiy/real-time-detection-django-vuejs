<script setup>
import Vue from 'vue'
import App from './App.vue'
import WebSocketService from './WebSocketService'; // สร้างไฟล์ WebSocketService.js สำหรับการเชื่อมต่อ WebSocket

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

WebSocketService.connect(); // เชื่อมต่อ WebSocket เมื่อโหลดแอป

</script>
<template>
  <div id="app">
    <h1>Real-time Object Detection</h1>
    <video ref="webcam" autoplay playsinline width="640" height="480"></video>
    <canvas ref="output" width="640" height="480"></canvas>
  </div>
</template>

<script>
export default {
  mounted() {
    this.setupCamera();
  },
  methods: {
    async setupCamera() {
      const videoElement = this.$refs.webcam;
      const constraints = {
        video: true
      };

      try {
        const stream = await navigator.mediaDevices.getUserMedia(constraints);
        videoElement.srcObject = stream;
      } catch (error) {
        console.error('Error accessing the webcam:', error);
      }
    }
  }
}
</script>
