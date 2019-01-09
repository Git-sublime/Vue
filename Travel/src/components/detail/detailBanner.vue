<template>
  <div>
	<div class="banner" @click="isShowGallery">
		<img class="banner-img" :src="bannerImg" alt="">
		<div class="banner-info">
			<div class="title">{{sightName}}</div>
			<div class="number"><span class="iconfont icon-tupian head-seach-icon"></span>{{imgNumber}}</div>
		</div>
	</div>
	<transition name="fade">
		<gallery v-show="showGallery" @hide="notShowGallery" :gallaryImgs="gallaryImgs"></gallery>
	</transition>
  </div>
</template>

<script>
import gallery from './gallery.vue'
export default {
  name: 'detailBanner',
  props: {
  	sightName: String,
  	bannerImg: String,
  	gallaryImgs: Array
  },
  components: {
  	gallery
  },
  data () {
  	return {
  	  showGallery: false
  	}
  },
  computed: {
  	imgNumber () {
  	  if (this.gallaryImgs) {
		return this.gallaryImgs.length  	  	
  	  }
  	}
  },
  methods: {
  	isShowGallery () {
  	  this.showGallery = true
  	},
  	notShowGallery () {
  	  this.showGallery = false
  	}
  }
}
</script>

<style lang="stylus" scoped>
  .fade-enter, .fade-leave-to
  	opacity: 0
  .fade-enter-active, .fade-leave-active
  	transition: opacity .2s

  .banner
  	overflow: hidden
  	height: 0
  	padding-bottom: 55%
  	position: relative
  	.banner-img
  		width: 100%
  	.banner-info
  		position: absolute
  		left: 0
  		right: 0
  		bottom: 0
  		line-height: .64rem
  		color: #fff
  		display: flex
  		align-items: center
  		background-image: linear-gradient(top, rgba(0,0,0,0), rgba(0,0,0,.5))
  		.title
  			flex: 1
  			text-indent: .2rem
  			overflow: hidden
  			text-overflow: ellipsis
  			white-space: nowrap
  			font-size: .30rem
  		.number
  			line-height: .4rem
  			height: .4rem
  			padding: 0 .2rem
  			border-radius: .2rem
  			background-color: rgba(0, 0, 0, .8)
  			margin-right: .2rem
  			font-size: .24rem
  			.iconfont
  				font-size: .24rem
  				margin-right: .05rem
</style>