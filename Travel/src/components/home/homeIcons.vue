<template>
  <div>
    <div class="hide" v-for="item of list"></div>
  	<swiper class="homeIcons" :options="swiperOptions">
  	  <swiper-slide v-for="(page, index) in pages" :key="index">
  	  	<div class="icon-item" v-for="(item, index) in page" :key="item.id">
  	  	  <div class="icon-item-wrapper">
  		  	  <img class="icon-img" :src="item.imgUrl" alt="">
  	  	  </div>
  		    <p class="icon-content" v-text="item.desc"></p>
  	  	</div>
	    </swiper-slide>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'homeIcons',
  props: {
    list: Array
  },
  data() {
  	return {
  	   swiperOptions: {
         loop: false
  	   }
  	}
  },
  computed: {
  	pages () {
  		const pages = [];
      if (this.list) {
        this.list.forEach((item, index) => {
          let page = Math.floor(index / 8);
          if (!pages[page]) {
            pages[page] = [];
          }
          pages[page].push(item)
        })
      }
      return pages
  	}
  }
}	
</script>

<style lang="stylus" scoped>
  .hide
    // display: none
  .homeIcons
    width: 100%
    height: 0
    padding-bottom: 50%
    font-size: 0
    overflow: hidden
    .icon-item
      width: 25%
      padding-bottom: 25%
      display: inline-block
      position: relative
      height: 0
      .icon-item-wrapper
      	position: absolute
      	top: 0
      	left: 0
      	bottom: .60rem
      	width: 100%
      	padding-top: .30rem
      	.icon-img
      		width: 50%
      		display: block
      		margin: 0 auto
      .icon-content
      	position: absolute
      	bottom: 0
      	left: 0
      	width: 80%
      	font-size: .24rem
      	text-align: center
      	line-height: .60rem
      	padding: 0 10%
      	overflow: hidden
      	white-space: nowrap
      	text-overflow: ellipsis
</style>