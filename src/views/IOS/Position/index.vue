<template>
  <div>
    <v-select v-model="selected" :clearable="false" :options="['Vue.js','React']"></v-select>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  data () {
    return {
      selected: 'Vue.js'
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
