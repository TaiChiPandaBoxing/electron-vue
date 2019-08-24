<template>
  <nav class="navbar">
    <ul class="navbar-nav">
      <template v-for="route in routes">
        <li class="nav-item" :key="route.name" @click="switchRoute(route.name)">
          <icon-svg class="nav-item-icon" :icon-name="index === route.name ? route.meta.iconActive : route.meta.icon"/>
          <span class="nav-item-name">{{route.name}}</span>
        </li>
      </template>
    </ul>
  </nav>
</template>

<script type="text/ecmascript-6">
export default {
  name: 'NavSide',
  props: {
    routes: {
      type: Array,
      required: true
    },
    index: {
      type: [Number, String]
    }
  },
  methods: {
    switchRoute (name) {
      this.$router.push(`/${name}`)
      this.$emit('change', name)
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~@/assets/scss/variable';
.navbar {
  display: flex;
  text-align: center;
  font-size: 0.3rem;
  background: $color-navside-background;
  &-nav {
    display: flex;
    width: 1.8rem;
    flex-direction: column;
    justify-content: space-between;
  }
  .nav-item {
    display: flex;
    cursor: pointer;
    color: $color-text;
    flex-direction: column;
    align-items: center;
    &-icon {
      padding: 0.10rem 0;
    }
    &-name {
      padding: 0.04rem 0;
      font-size: 0.2rem;
    }
  }
}
</style>
