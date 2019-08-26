<template>
  <div>
    <v-select v-model="selected" :options="['Vue.js','React']"></v-select>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  data () {
    return {
      selected: ''
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
