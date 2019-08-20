<template>
  <div class="main">
    Control
    <icon-svg icon-name="shield-user-line" @click.native="goto"/>
    <modal name="login" @before-close="visible=false">
      <div class="form-item">
        <label class="form-item-label" for="username">User</label>
        <input class="form-item-input" ref="username" type="text" placeholder="User Name" @focus="show" data-layout="normal" />
      </div>
      <div class="form-item">
        <label class="form-item-label" for="password">Password</label>
        <input class="form-item-input" ref="password" type="password" placeholder="Password" @focus="show" data-layout="normal" />
      </div>
      <button class="form-submit" @click="login">Login</button>
      <vue-touch-keyboard class="touch-keyboard" :options="options" v-if="visible" :layout="layout" :cancel="hide" :accept="accept" :input="input" :next="next"/>
    </modal>
    <v-dialog/>
  </div>
</template>

<script type="text/ecmascript-6">
import { Decrypt } from '@/lib/utils'
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
      this.$modal.show('login')
    },
    login () {
      this.$localforage.getItem('user').then((data) => {
        const username = this.$refs.username.value
        const password = this.$refs.password.value
        let user = null
        for (let item of data) {
          if (item.username === username) {
            user = item
            break
          }
        }
        if (!user) {
          this.$modal.show('dialog', {
            tilte: 'Alert',
            text: '用户不存在',
            buttons: [
              {
                title: 'Close'
              }
            ]
          })
          return
        }
        const name = user.username
        const pass = Decrypt(user.password)
        if (username === name && password === pass) {
          this.visible = false
          if (user.role === 1) {
            this.$modal.show('dialog', {
              tilte: 'Alert',
              text: '管理员身份登录',
              buttons: [
                {
                  title: 'Close',
                  hander: () => {
                    this.$router.push('/test')
                  }
                }
              ]
            })
          } else {
            this.$modal.show('dialog', {
              tilte: 'Alert',
              text: '普通用户登录',
              buttons: [
                {
                  title: 'Close',
                  hander: () => {
                    this.$router.push('/test')
                  }
                }
              ]
            })
          }
        }
      })
    },
    accept (text) {
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
</script>

<style lang="scss" scoped>
@import '~@/assets/scss/variable';
.main {
  font-size: $font-size-medium;
}
.form {
  &-item {
    display: flex;
    padding: 24px 80px;
    align-items: center;
    color: $color-text-d;
    &-label {
      flex: 1;
    }
    &-input {
      flex: 2;
      padding: 4px 8px;
      border: 1px solid #000;
    }
  }
  &-submit {
    display: block;
    margin: 48px auto;
  }
}
.touch-keyboard {
  position: fixed;
  left: 0;
  right: 0;
  bottom: 30px;
  margin: auto;
  width: 1000px;
}
/deep/ .v--modal-overlay {
  color: #000;
}
</style>
