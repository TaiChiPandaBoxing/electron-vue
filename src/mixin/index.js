export const keyboardMixin = {
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
    accept () {
      this.hide()
    },
    show (e) {
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
      Array([]).forEach.call(inputs, (item, i) => {
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