<template>
  <div class="scroll-box" ref="wrapper">
    <div  class="scroll-content">
    	<div class="area" ref="currentPosition">
    		<div class="title">您的位置</div>
    		<ul class="list">
    				<li class="active">{{this.$store.state.city}}</li>
    		</ul>
    	</div>
    	<div class="area">
    		<div class="title">热门城市</div>
    		<ul class="list">
    				<li v-for="(item, index) in hotCities" :key="item.id" v-text="item.name" @click="handleCityClick(item.name)"></li>
    		</ul>
    	</div>
      <div>
      	<div class="area" v-for="(items, key, index) of cities" :key="index">
      		<div class="title" :ref="key">{{key}}</div> 
      		<ul class="list-sort">
            <li v-for="(item, index) in items" :key="item.id" v-text="item.name" @click="handleCityClick(item.name)"></li>  
          </ul>
      	</div>
      </div>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
  name: "cityList",
  props: {
    hotCities: Array,
    cities: Object,
    letter: String
  },
  mounted () {
    this.scroll = new BScroll(this.$refs.wrapper);
  },
  methods: {
    handleCityClick (city) {
      this.$store.dispatch("changeCity", city)
      const currentPosn = this.$refs.currentPosition
      this.scroll.scrollToElement(currentPosn)
    }
  },
  watch: {
    letter () {
      if (this.letter) {
        let element = this.$refs[this.letter][0];
        this.scroll.scrollToElement(element);
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import '../../assets/styles/variable.styl'
  .scroll-box
    position: absolute
    width: 100%
    top: 1.72rem
    left: 0
    bottom: 0
    overflow: hidden
    .title
      line-height: .60rem
      background-color: #f5f5f5
      text-indent: .2rem
    .list
      box-sizing: border-box
      padding: .2rem .2rem 0
      width: 100%
      display: flex
      justify-content: space-between
      align-items: center
      flex-wrap: wrap
      .active
        border: .01rem solid $bgColor
        color: $bgColor
      li
        width: 30%;
        height: .48rem
        line-height: .48rem
        border: .01rem solid #ccc
        border-radius: .05rem
        text-align: center
        margin-bottom: .2rem
    .list-sort
      li
        line-height: .6rem
        text-indent: .2rem
        border-bottom: .01rem solid #f5f5f5
</style>