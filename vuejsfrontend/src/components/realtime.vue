<template>
    <div>
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
  