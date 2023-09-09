// WebSocketService.js

class WebSocketService {
    constructor() {
      this.socket = null;
    }
  
    connect() {
      this.socket = new WebSocket('http://localhost:8000/camera/'); // เปลี่ยน your_server_address ตาม URL ของเซิร์ฟเวอร์ของคุณ
      this.socket.onopen = this.onOpen;
      this.socket.onmessage = this.onMessage;
      this.socket.onclose = this.onClose;
    }
  
    onOpen(event) {
      console.log('WebSocket is open now.');
    }
  
    onMessage(event) {
      const data = JSON.parse(event.data);
      const message = data.message;
  
      // ทำสิ่งที่คุณต้องการกับข้อมูลผลลัพธ์ที่ได้จาก WebSocket
    }
  
    onClose(event) {
      console.error('WebSocket closed unexpectedly:', event);
    }
  
    send(message) {
      if (this.socket.readyState === WebSocket.OPEN) {
        this.socket.send(JSON.stringify({ message }));
      }
    }
  }
  
  const webSocketService = new WebSocketService();
  export default webSocketService;
  