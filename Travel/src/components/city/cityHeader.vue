<template>
  <div class="city-header">
  	<router-link to="/">
	  <div class="city-back iconfont icon-fanhui"></div>
	</router-link>
    选择城市
  </div>
</template>

<script>
export default {
  name: "cityHeader"
}
</script>

<style lang="stylus" scoped>
  @import '../../assets/styles/variable.styl'
  .city-header
  	background-color: $bgColor
  	height: .86rem
  	line-height: .86rem
  	text-align: center
  	color: $fontColor
  	font-size: .32rem
  	position: relative
  	.city-back
  		position: absolute
  		top: 0
  		left: 0
  		padding: 0 .4rem 0 .15rem
  		color: $fontColor
</style>