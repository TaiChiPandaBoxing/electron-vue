<template>
  <div class="ios">
    <nav-side :routes="routes" :index="index" @change="goto"/>
    <router-view/>
  </div>
</template>

<script type="text/ecmascript-6">
import NavSide from 'components/NavSide'
export default {
  components: {
    NavSide
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
</style>
