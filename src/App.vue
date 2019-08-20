<template>
  <div id="app">
    <header-top :show-back="$route.meta.showBack" :url="url">INSTRUCTOR OPERATING STATION</header-top>
    <router-view/>
  </div>
</template>

<script type="text/ecmascript-6">
import HeaderTop from '@/components/Header'
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
