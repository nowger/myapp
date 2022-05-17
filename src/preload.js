const { ipcRenderer } = require('electron')

// 同步消息  调用的结果就是回复
console.log(ipcRenderer.sendSync('同步消息', '同步参数')) // prints "我回复了同步消息"


// 因为是异步,所以在这里等待消息的回复
ipcRenderer.on('asynchronous-reply', (event, arg) => {
  console.log(arg) // prints "pong"
})
// 异步消息发送
ipcRenderer.send('asynchronous-message', 'ping')
