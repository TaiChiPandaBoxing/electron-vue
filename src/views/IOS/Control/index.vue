<template>
  <div class="main">
    Control
    <icon-svg icon-name="shield-user-line" @click.native="goto"/>
    <div>
      <label for="username">User</label>
      <input type="text" placeholder="Text input" @focus="show" data-layout="normal" />
    </div>
    <div>
      <label for="password">Password</label>
      <input type="password" placeholder="Text input" @focus="show" data-layout="normal" />
    </div>
    <button>Login</button>
    <vue-touch-keyboard :options="options" v-show="visible" :layout="layout" :cancel="hide" :accept="accept" :input="input" :next="next"/>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  data () {
    return {
      visible: false,
      layout: 'normal',
      input: null,
      options: {
        useKbEvents: false,
        preventClickEvent: false
      }
    }
  },
  methods: {
    goto () {
      this.$router.push('/test')
    },
    accept (text) {
      alert('Input text: ' + text)
      this.hide()
    },
    show (e) {
      console.log(11111111111111111111)
      this.input = e.target
      this.layout = e.target.dataset.layout
      if (!this.visible) this.visible = true
    },
    hide () {
      this.visible = false
    },
    next () {
      let inputs = document.querySelectorAll('input')
      let found = false
      Array.forEach.call(inputs, (item, i) => {
        if (!found && item === this.input && i < inputs.length - 1) {
          found = true
          this.$nextTick(() => {
            inputs[i + 1].focus()
          })
        }
      })
      if (!found) {
        this.input.blur()
        this.hide()
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~@/assets/scss/variable';
.main {
  font-size: $font-size-medium;
}
</style>
