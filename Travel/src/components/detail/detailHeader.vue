<template>
	<div>
    <router-link tag="div" to="/" class="return-btn" v-show="showReturnBtn">
      <div class="header-left iconfont icon-fanhui"></div>
    </router-link>
    <div class="detail-header" :style="opacityStyle" v-show="!showReturnBtn">
      <router-link tag="span" to="/" class="header-left iconfont icon-fanhui"></router-link>
      详细信息
    </div>
	</div>
</template>

<script>
export default {
  name: 'detailHeader',
  data () {
    return {
      showReturnBtn: true,
      opacityStyle: {
        opacity: 0
      }
    }
  },
  methods: {
    handleScroll () {
      const scrollTop =  document.documentElement.scrollTop
      if (scrollTop > 60) {
        let opacity = scrollTop / 140;
        opacity = opacity > 1 ? 1 : opacity;
        this.opacityStyle = { opacity }
        this.showReturnBtn = false
      } else {
        this.showReturnBtn = true
      }
    }
  },
  activated () {
    window.addEventListener("scroll", this.handleScroll)
  },
  deactivated () {
    window.removeEventListener("scroll", this.handleScroll)
  }
}
</script>

<style lang="stylus" scoped>
  @import '../../assets/styles/variable.styl'
  .return-btn
    position: absolute
    top: .2rem
    left: .2rem
    height: .8rem
    width: .8rem
    border-radius: .4rem
    background: rgba(0,0,0,.8)
    color: #fff
    line-height: .8rem
    text-align: center
  .detail-header
    z-index: 2
    position: fixed
    top: 0
    left: 0
    right: 0
    height: .86rem
    line-height: .86rem
    background: $bgColor
    text-align: center
    font-size: .32rem
    color: #fff
    .header-left
      position: absolute
      top: 0
      left: 0
      padding: 0 .4rem 0 .15rem
      color: $fontColor
</style>