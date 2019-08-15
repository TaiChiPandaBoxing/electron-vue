<template>
  <div id="app">
    <header-top :url="url">INSTRUCTOR OPERATING STATION</header-top>
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
    this.$indexDB.addData([
      {
        id: 1,
        username: 'root',
        password: '123456'
      }
    ], () => {
      console.log('添加用户成功')
    })
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
