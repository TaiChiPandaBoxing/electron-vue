<template>
  <button @click="click" :disabled="disabled" :class="btnClass" :type="htmlType">
    <slot></slot>
  </button>
</template>

<script type="text/ecmascript-6">
export default {
  props: {
    type: {
      type: String,
      default: ''
    },
    htmlType: {
      type: String,
      default: 'button'
    },
    disabled: {
      type: Boolean,
      default: false
    },
    size: {
      type: String,
      default: ''
    }
  },
  computed: {
    btnSize () {
      let sizes = ['small', 'large', 'mini']
      return this.size && ~sizes.indexOf(this.size) ? `v-button--${this.size}` : ''
    },
    btnType () {
      let types = ['success', 'loading', 'info', 'warning', 'primary', 'danger']
      return this.type && ~types.indexOf(this.type) ? `v-button--${this.type}` : ''
    },
    btnClass () {
      return ['v-button', this.btnSize, this.btnType]
    }
  },
  methods: {
    click (event) {
      this.$emit('click', event)
    }
  }
}
</script>

<style lang="scss" scoped>
.v-button,
.v-button--default{
  display: inline-block;
  line-height: 1;
  white-space: nowrap;
  cursor: pointer;
  background: #fff;
  border: 1px solid #c0ccda;
  color: #1f2d3d;
  text-align: center;
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  padding: 10px 15px;
  font-size: 14px;
  border-radius: 4px;
}
.v-button:hover,
.v-button--default:hover{
  color: #20a0ff;
  border-color: #20a0ff;
}
.v-button--large{
  padding: 11px 19px;
  font-size: 16px;
  border-radius: 4px;
}
.v-button--small{
  padding: 7px 9px;
  font-size: 12px;
  border-radius: 4px;
}
.v-button--mini{
  padding: 4px 6px;
  font-size: 12px;
  border-radius: 3px;
}
.v-button--primary{
  color: #fff;
  background-color: #20a0ff;
  border-color: #20a0ff;
}
.v-button--primary:hover{
  background: #4db3ff;
  border-color: #4db3ff;
  color: #fff;
}
.v-button--success{
  color: #fff;
  background-color: #13ce66;
  border-color: #13ce66;
}

.v-button--success:hover{
  background: #42d885;
  border-color: #42d885;
  color: #fff;
}
.v-button--warning{
  color: #fff;
  background-color: #f7ba2a;
  border-color: #f7ba2a;
}

.v-button--warning:hover{
  background: #f9c855;
  border-color: #f9c855;
  color: #fff;
}
.v-button--danger{
  color: #fff;
  background-color: #ff4949;
  border-color: #ff4949;
}
.v-button--danger:hover{
  background: #ff6d6d;
  border-color: #ff6d6d;
  color: #fff;
}
.v-button--info{
  color: #fff;
  background-color: #50bfff;
  border-color: #50bfff;
}
.v-button--info:hover,
.v-button--loading,
.v-button--loading:hover{
  background: #73ccff;
  border-color: #73ccff;
  color: #fff;
}
.v-button--loading,
.v-button--loading:hover{
    cursor: default;
}
.v-button[disabled],
.v-button[disabled]:hover{
  background-color: #fff;
  border-color: #d3dce6;
  color: #c0ccda;
  cursor: not-allowed;
}
</style>
