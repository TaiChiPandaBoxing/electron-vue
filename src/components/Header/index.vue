<template>
  <div class="header">
    <div class="header-container">
      <div class="header-back" @click="goBack">
        <icon-svg icon-name="computer-line"/>
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
export default {
  name: 'HeaderTop',
  props: {
    url: {
      type: String,
      default: '/'
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
    height: 34px;
    justify-content: center;
    align-items: center;
    font-size: 0.24rem;
    background-color: #111212;
  }
  &-back {
    position: absolute;
    top: 0;
    left: 12px;
    width: 34px;
    height: 34px;
    cursor: pointer;
    background: #111212;
  }
  &-title {
    margin: 0 0 0 10px;
    color: $color-text;
    &::after {
      display: inline-block;
      content: '';
      width: 34px;
      height: 34px;
      // background: url('./images/logo.png');
    }
  }
  &-datetime {
    position: absolute;
    top: 0;
    right: 0;
    width: 1.8rem;
    height: 34px;
    &-middle {
      line-height: 34px;
    }
  }
}
</style>
