<template>
  <div class="header">
    <div class="header-container" @dblclick="toggleFullScreen">
      <div class="header-back">
        <icon-svg v-if="showBack" icon-name="arrow-left-s-line" @click.native="goBack"/>
      </div>
      <h1 class="header-title">
        <slot/>
      </h1>
      <div class="header-datetime">
        <span class="header-datetime-time">{{time}}</span>
        <span class="header-datetime-date">{{date}}</span>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import { PrefixZero } from '@/lib/utils.js'
import { remote } from 'electron'
export default {
  name: 'HeaderTop',
  props: {
    url: {
      type: String,
      default: '/'
    },
    showBack: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      time: null,
      date: null
    }
  },
  created () {
    this.datetimeRun()
  },
  methods: {
    datetimeRun () {
      const now = new Date()
      const year = now.getFullYear()
      const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec']
      let month = months[now.getMonth()]
      let day = now.getDate()
      let hour = now.getHours()
      let minute = now.getMinutes()
      this.time = `${PrefixZero(hour)}:${PrefixZero(minute)}`
      this.date = `${PrefixZero(day)}-${month}-${year}`
      setTimeout(this.datetimeRun, 1000)
    },
    goBack () {
      const { url } = this
      if (url.substr(0, 1) !== '/') console.error(`url格式不对,请检查url字符串第一个字符是否为"/"`)
      this.$router.push(this.url)
    },
    toggleFullScreen () {
      const win = remote.getCurrentWindow()
      if (win.isFullScreen()) {
        win.setFullScreen(false)
      } else {
        win.setFullScreen(true)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~@/assets/scss/variable';
.header {
  position: relative;
  &-container {
    display: flex;
    width: 100%;
    padding: 2px 0;
    align-items: center;
    justify-content: space-between;
    font-size: $font-size-medium;
    background-color: $color-header-background;
  }
  &-back {
    padding: 0 10px;
    cursor: pointer;
  }
  &-title {
    display: flex;
    align-items: center;
    margin: 0 0 0 10px;
    color: $color-text;
    -webkit-app-region: drag;
    &::before {
      display: inline-block;
      content: '';
      width: 26px;
      height: 32px;
      margin: 0 10px;
      background: url('../../assets/images/logo.png') center / 100% no-repeat;
    }
  }
  &-datetime {
    display: flex;
    padding: 0 10px;
    width: 140px;
    justify-content: space-between;
  }
}
</style>
