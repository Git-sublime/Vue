<template>
  <div>
    <e-header></e-header>
    <e-swiper :list="res.swiperList"></e-swiper>
    <e-icons :list="res.iconList"></e-icons>
    <e-recommend :list="res.recommendList"></e-recommend>
    <e-weekend :list="res.weekendList"></e-weekend>
  </div>
</template>

<script>
  import eHeader from './eHeader.vue'
  import eSwiper from './swiper.vue'
  import eIcons from './homeIcons.vue'
  import eRecommend from './recommend.vue'
  import eWeekend from './weekend.vue'
  import axios from 'axios'
export default {
  components: {
    eHeader,eSwiper,eIcons,eRecommend,eWeekend
  },
  data () {
    return {
      res: {}
    }
  },
  mounted () {
    this.getData()
  },
  methods: {
    getData () {
      axios.get('./static/mock/index.json').then((res) => {
        const _res = res.data;
        if (_res.data && _res.ret) {
          this.res = _res.data;
        }
        // console.log(res)
      })
    }
  }
}
</script>

<style lang="stylus">
</style>
