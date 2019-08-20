<template>
  <nav class="navbar">
    <ul class="navbar-nav">
      <template v-for="route in routes">
        <li class="nav-item" :key="route.name" @click.stop="switchRoute(route.name)">
          <icon-svg :icon-name="index === route.name ? route.meta.iconActive : route.meta.icon"/>
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
      width: 100%;
      height: 0.82rem;
    }
    &-name {
      padding: 10px 0;
    }
  }
}
</style>
