<template>
	<div class="container" @click="hideGallery">
	  <div class="img-wrapper">
		  <swiper class="swiper":options="swiperOption">
		     <swiper-slide v-for="(item, index) in gallaryImgs" :key="index">
		       <img class="swiper-img" :src="item" alt="">
		     </swiper-slide>
		     <div class="swiper-pagination"  slot="pagination"></div>
	   	  </swiper>
   	  </div>
	</div>
</template>

<script>
export default {
  name: 'Gallery',
  props: {
  	gallaryImgs: Array
  },
  data () {
  	return {
  	  swiperOption: {
  	    pagination: '.swiper-pagination',
  	    loop: false,
  	    paginationType: 'fraction',
  	    observer: true,
  	    observeParents: true
  	  }
  	}
  },
  methods: {
  	hideGallery () {
  	  this.$emit('hide', false)
  	}
  }
}
</script>

<style lang="stylus" scoped>
  .container >>> .swiper-container
  	overflow: inherit
  .container
  	position: fixed
  	top: 0
  	left: 0
  	bottom: 0
  	right: 0
  	background: #333
  	z-index: 99
  	display: flex
  	flex-direction: column
  	justify-content: center
  	.img-wrapper
  		height: 0
  		width: 100%
  		padding-bottom: 100%
  		position: relative
  		.swiper
  			position: absolute
  			top: 0
  			left: 0
  			bottom: 0
  			right: 0
  			.swiper-slide
	  			display: flex
			  	flex-direction: column
			  	justify-content: center
  				.swiper-img
  					width: 100%
			.swiper-pagination
				color: #fff
				bottom: -1rem
  					
</style>