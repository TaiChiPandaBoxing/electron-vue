<template>
  <div class="footer">
    <div class="footer-container">
      <div class="footer-btn-fix">
        <icon-svg icon-name="plane-fill"/>
        <span class="footer-btn-label">Control</span>
      </div>
      <div class="footer-btn-fix" @click.stop="toggle('item1')">
        <icon-svg icon-name="plane-fill"/>
        <span class="footer-btn-label">item1</span>
        <ul class="footer-dropdown-menu" v-show="name === 'item1'"  @click.stop="select">
          <li>item1-1</li>
          <li>item1-2</li>
        </ul>
      </div>
      <div class="footer-btn-fix" @click.stop="toggle('item2')">
        <icon-svg icon-name="plane-fill"/>
        <span class="footer-btn-label">item2</span>
        <ul class="footer-dropdown-menu" v-show="name === 'item2'"  @click.stop="select">
          <li>item2-1</li>
          <li>item2-2</li>
        </ul>
      </div>
      <div class="footer-btn-fix" @click.stop="toggle('item3')">
        <icon-svg icon-name="plane-fill"/>
        <span class="footer-btn-label">item3</span>
        <ul class="footer-dropdown-menu" v-show="name === 'item3'" @click.stop="select">
          <li>item3-1</li>
          <li>item3-2</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  name: 'FooterBottom',
  props: {
  },
  data () {
    return {
      isShow: false,
      name: null
    }
  },
  created () {
  },
  mounted () {
    document.addEventListener('click', (e) => {
      this.name = null
    })
  },
  methods: {
    toggle (name) {
      this.name = name
    },
    select (e) {
      if (e.target.nodeName === 'LI') {
        console.log(e.target.textContent)
      } else {

      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~@/assets/scss/variable';
.footer {
  line-height: normal;
  &-container {
    display: flex;
    height: 1rem;
    position: relative;
    font-size: 0.32rem;
    background: $color-footer-background;
  }
  &-btn-fix {
    display: flex;
    padding: 0 0.2rem;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
  &-btn-label {
    color: #fff;
  }
  &-dropdown-menu {
    position: absolute;
    padding: 20px;
    top: -1.2rem;
  }
}
</style>
