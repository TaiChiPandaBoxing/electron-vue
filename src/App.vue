<template>
  <div id="app">
    <header-top :show-back="$route.meta.showBack" :url="url">INSTRUCTOR OPERATING STATION</header-top>
    <router-view/>
  </div>
</template>

<script type="text/ecmascript-6">
import HeaderTop from '@/components/Header'
import { remote } from 'electron'

const path = require('path')
const fs = require('fs')
export default {
  components: {
    HeaderTop
  },
  data () {
    return {
      url: '/'
    }
  },
  created () {
    const appPath = remote.app.getAppPath()
    const filePath = path.join(appPath, '../config/user.json').replace(/\\/g, '/')
    fs.stat(filePath, (error, stats) => {
      if (error) console.log(error)
      let result = JSON.parse(fs.readFileSync(filePath))
      console.log(result)
    })
    // this.$socket.sendMsg({
    //   action: 'loginReq',
    //   action2: 'loginRsp',
    //   params: {
    //     user: 'root',
    //     password: '123456'
    //   }
    // }, (data) => {
    //   console.log(data, 1)
    // })
  },
  watch: {
    $route: {
      handler: function (to, from) {
        switch (to.name) {
          case 'Entry':
            this.url = '/test'
            break
          case 'Detail':
            this.url = from.path
            break
          default:
            this.url = '/'
        }
      },
      deep: true
    }
  }
}
</script>

<style lang="scss">
@import "~@/assets/scss/index";
</style>
