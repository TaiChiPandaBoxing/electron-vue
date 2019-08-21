<template>
  <div class="ios">
    <div class="ios-main">
      <nav-side :routes="routes" :index="index" @change="goto"/>
      <router-view/>
    </div>
    <footer-bottom/>
  </div>
</template>

<script type="text/ecmascript-6">
import NavSide from 'components/NavSide'
import FooterBottom from 'components/Footer'
export default {
  components: {
    NavSide,
    FooterBottom
  },
  data () {
    return {
      index: this.$route.name
    }
  },
  computed: {
    // 提取路由router配置中关于ios页面的设置
    routes: function () {
      const { routes } = this.$router.options
      return routes[1].children.slice(0, -1)
    }
  },
  methods: {
    goto (path) {
      this.index = path
    }
  }
}
</script>

<style lang="scss" scoped>
.ios {
  display: flex;
  flex-direction: column;
  &-main {
    display: flex;
  }
}
</style>
