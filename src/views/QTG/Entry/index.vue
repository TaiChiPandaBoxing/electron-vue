<template>
  <div>
    Control
    <div id="pdf-path"></div>
    <icon-svg icon-name="shield-user-line" @click.native="print"/>
    <webview ref="printWebview" src="./template.html" style="display:inline-flex;" minwidth="1000" minheight="660" nodeintegration/>
  </div>
</template>

<script type="text/ecmascript-6">
const fs = require('fs')
export default {
  data () {
    return {
    }
  },
  mounted () {
    this.webview = document.querySelector('webview')
    this.webview.addEventListener('dom-ready', () => {
      this.webview.openDevTools()
      this.webview.send('ping')
    })
    this.webview.addEventListener('ipc-message', (event) => {
      if (event.channel === 'pong') this.flag = true
    })
  },
  methods: {
    print () {
      this.webview.printToPDF({}, function (error, data) {
        if (error) throw error
        fs.writeFile('C:/Users/Administrator/Desktop/print.pdf', data, function (error) {
          if (error) throw error
        })
      })
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
