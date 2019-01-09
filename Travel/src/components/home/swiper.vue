<template>
  <div class="wrapper">
    <swiper :options="swiperOption" class="swiper" v-if="list">
       <!-- slides -->
       <swiper-slide v-for="(item, index) in list" :key="item.id">
         <img :src="item.imgUrl" alt="">
       </swiper-slide>       <!-- Optional controls -->
       <div class="swiper-pagination"  slot="pagination"></div>
     </swiper>
   </div>
</template>

<script>
export default {
  name: 'homeSwiper',
  props: {
    list: Array
  },
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        loop: true,
        autoplay:4000
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
  .wrapper >>> .swiper-pagination-bullet-active
    background: #fff !important  
  .wrapper >>> .swiper-slide
    height: 2rem
    overflow: hidden
    background: #f5f5f5
  img
    width: 100%
</style>
