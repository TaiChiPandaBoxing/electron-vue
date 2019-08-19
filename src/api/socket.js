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
  // 作为get获取数据的回调对象存储
  this.messageList = {}
  // 自定义Ws连接函数：服务器连接成功
  this.onopen = (e) => {
    this.isHeartflag = true
    console.log(e)
  }
  // 自定义Ws消息接收函数：服务器向前端推送消息时触发
  this.onmessage = (e) => {
    // 处理各种推送消息
    const message = JSON.parse(e.data)
    const eventName = message.action.splice('Rsp', '')
    // 执行回调
    this.messageList[eventName](message)
  }
  // 自定义Ws异常事件：Ws报错后触发
  this.onerror = (e) => {
    console.log('error')
    this.isHeartflag = false
    this.reConnect()
  }
  // 自定义Ws关闭事件：Ws连接关闭后触发
  this.onclose = (e) => {
    this.reConnect()
    console.log('close')
  }
  // 初始化websocket连接
  this.initWs()
}
// 初始化websocket连接
WBT.prototype.initWs = function () {
  window.WebSocket = window.WebSocket || window.MozWebSocket
  if (!window.WebSocket) { // 检测浏览器支持
    console.error('错误: 浏览器不支持websocket')
    return
  }
  var that = this
  this.socket = new WebSocket(this.url) // 创建连接并注册响应函数
  this.socket.onopen = function (e) {
    that.onopen(e)
  }
  this.socket.onmessage = function (e) {
    that.onmessage(e)
  }
  this.socket.onclose = function (e) {
    that.onclose(e)
    that.socket = null // 清理
  }
  this.socket.onerror = function (e) {
    that.onerror(e)
  }
  return this
}
// 断线重连
WBT.prototype.reConnect = function () {
  if (this.isReconnect) return
  this.isReconnect = true
  // 没连接上会一直重连，设置延迟避免请求过多
  setTimeout(function () {
    this.initWs()
    this.isReconnect = false
  }, 2000)
}
// 发送消息后回调
WBT.prototype.sendMsg = function (options, callback) {
  const name = options.action.replace('Req', '')
  // 存储事件
  this.messageList[name] = callback
  this.socket.send(JSON.stringify(options))
}

export default WBT
