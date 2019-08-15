<template>
  <svg class="svg-icon" aria-hidden="true">
    <use :xlink:href="name"></use>
  </svg>
</template>

<script type="text/ecmascript-6">
export default {
  name: 'icon-svg',
  props: {
    iconName: {
      type: String,
      required: true
    }
  },
  computed: {
    name: function () {
      return `#icon-${this.iconName}`
    }
  }
}
</script>

<style lang="scss" scoped>
.svg-icon {
  width: 2em;
  height: 2em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
</style>
