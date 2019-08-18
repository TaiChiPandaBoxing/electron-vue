<template>
  <div>
    Control
    <icon-svg icon-name="shield-user-line" @click.native="goto"/>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  data () {
    return {
    }
  },
  methods: {
    goto () {
      this.$router.push('/test')
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
