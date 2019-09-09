<template>
  <div class="main">
    <div class="monitor">
      <div class="monitor-item">
        <span class="circle" :class="{'is-success': success}"></span>
        <label class="monitor-item-title">Control</label>
      </div>
      <div class="monitor-item">
        <span class="circle" :class="{'is-success': success}"></span>
        <label class="monitor-item-title">Control</label>
      </div>
      <div class="monitor-item">
        <span class="circle" :class="{'is-success': success}"></span>
        <label class="monitor-item-title">Control</label>
      </div>
      <div class="monitor-item">
        <span class="circle" :class="{'is-success': success}"></span>
        <label class="monitor-item-title">Control</label>
      </div>
      <div class="monitor-item">
        <span class="circle" :class="{'is-success': success}"></span>
        <label class="monitor-item-title">Control</label>
      </div>
      <icon-svg icon-name="shield-user-line" @click.native="goto"/>
    </div>
    <modal name="login" @before-close="visible=false">
      <div class="form-item">
        <icon-svg icon-name="shield-user-line" @click.native="goto"/>
        <label class="form-item-label" for="username">User</label>
        <input class="form-item-input" ref="username" type="text" placeholder="User Name" @focus="show" data-layout="normal" />
      </div>
      <div class="form-item">
        <icon-svg icon-name="shield-user-line" @click.native="goto"/>
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
import { keyboardMixin } from '@/mixin'
export default {
  mixins: [keyboardMixin],
  data () {
    return {
      success: true
    }
  },
  methods: {
    goto () {
      this.$router.push('/entry')
      // this.$modal.show('login')
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
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~@/assets/scss/variable';
.main {
  font-size: $font-size-medium;
}
.monitor {
  padding: 0 8px;
  .circle {
    margin: 0 8px;
    width: 0.3rem;
    height: 0.3rem;
    border-radius: 100%;
    background: radial-gradient(circle at 10px 10px, rgb(255, 0, 0), #000);
    &.is-success {
      background: radial-gradient(circle at 10px 10px, rgb(0, 255, 0), #000);
    }
  }
  &-item {
    display: flex;
    align-items: center;
    margin: 0.3rem 0.2rem;
    font-size: $font-size-medium;
    &-title {
      width: 120px;
      padding: 0 10px;
      letter-spacing: 2px;
    }
  }
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

/deep/ .touch-keyboard {
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
