function WBT (config = {}) {
  /*
  websocket接口地址
  1、http请求还是https请求 前缀不一样
  2、ip地址host
  3、端口号
  */
  const protocol = (window.location.protocol === 'http:') ? 'ws://' : 'wss://'
  const host = window.location.host
  const port = ':8087'
  // 接口地址url
  this.url = config.ip || protocol + host + port
  // socket对象
  this.socket = null
  // 心跳状态  为false时不能执行操作 等待重连
  this.isHeartflag = false
  // 重连状态  避免不间断的重连操作
  this.isReconnect = false
  // 确保this.socket在发送消息之前的readyState状态为1
  this.timer = null
  // 作为get获取数据的回调对象存储
  this.messageList = {}
  // 自定义Ws连接函数：服务器连接成功
  this.onopen = (e) => {
    this.isHeartflag = true
    console.log('websocket connect success')
  }
  // 自定义Ws消息接收函数：服务器向前端推送消息时触发
  this.onmessage = (e) => {
    // 处理各种推送消息
    const message = JSON.parse(e.data)
    // 添加type字段标识是否是实时通信，以便做不同的处理
    if (message.type === 'RTC') {
      // 执行实时事件
      this.handleEvent(message)
    } else if (message.type === 'HTTP') {
      // 获取事件名称
      const eventName = message.action.replace('Rsp', '')
      // 执行回调
      this.messageList[eventName](message)
    } else {
      console.log(message)
    }
  }
  // 自定义Ws异常事件：Ws报错后触发
  this.onerror = (e) => {
    console.log('websocket connect error')
    this.isHeartflag = false
    this.reconnect()
  }
  // 自定义Ws关闭事件：Ws连接关闭后触发
  this.onclose = (e) => {
    this.reconnect()
    console.log('websocket connect close')
  }
  // 初始化websocket连接
  this.initWs()
}
// 初始化websocket连接
WBT.prototype.initWs = function () {
  window.WebSocket = window.WebSocket || window.MozWebSocket
  // 检测浏览器支持
  if (!window.WebSocket) throw new Error('Error: Browsers do not support websocket')
  const self = this
  this.socket = new WebSocket(this.url) // 创建连接并注册响应函数
  this.socket.onopen = function (e) {
    self.onopen(e)
  }
  this.socket.onmessage = function (e) {
    self.onmessage(e)
  }
  this.socket.onclose = function (e) {
    self.onclose(e)
    self.socket = null // 清理
  }
  this.socket.onerror = function (e) {
    self.onerror(e)
  }
  return this
}
// 断线重连
WBT.prototype.reconnect = function () {
  if (this.isReconnect) return
  this.isReconnect = true
  // 没连接上会一直重连，设置延迟避免请求过多mmm
  setTimeout(() => {
    this.initWs()
    this.isReconnect = false
  }, 2000)
}
// 处理消息
WBT.prototype.handleEvent = function (message) {
  const action = message.action
  // 根据action处理事件
  if (this.handleAction[action]) this.handleAction[action](message)
}
// 事务处理 根据action
WBT.prototype.handleAction = {
  // 更新数据
  'updateRsp': function (data) {
    console.log(data.action)
  }
}
// 发送消息后回调
WBT.prototype.sendMsg = function (options, callback) {
  if (this.socket === null) return
  if (this.socket.readyState === 1) {
    // 存储事件
    const name = options.action.replace('Req', '')
    this.messageList[name] = callback
    // 发送消息
    this.socket.send(JSON.stringify(options))
    if (this.timer) clearInterval(this.timer)
  } else {
    if (this.timer) clearInterval(this.timer)
    this.timer = setInterval(() => {
      this.sendMsg(options, callback)
    }, 20)
  }
}

export default WBT
