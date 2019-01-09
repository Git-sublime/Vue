<template>
  <div>
    <div class="city-search">
    	<div class="search">
    	 <input v-model="keyWord" type="text" placeholder="输入城市名或拼音" class="search-input">
    	</div>
    </div>
    <transition name="fade">
      <div class="result" ref="wrapper" v-show="keyWord">
        <ul>
          <li class="result-item border-bottom" v-for="(item, index) in list" :key="item.id" v-text="item.name" @click="handleCityClick(item.name)"></li>
          <li class="notFound" v-show="!list.length">{{this.$store.state.city}}</li>
        </ul>
      </div>
    </transition>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
  name: "cityHeader",
  props: {
    cities: Object
  },
  data () {
    return {
      keyWord: '',
      list: [],
      timer: null
    }
  },
  mounted () {
    this.scroll = new BScroll(this.$refs.wrapper)
  },
  methods: {
    handleCityClick (city) {
      this.$store.dispatch("changeCity", city)
      this.keyWord = ''
    }
  },
  watch: {
    keyWord () {
      if (this.timer) {
        clearTimeout(this.timer)
      };
      this.timer = setTimeout(() => {
        const resultList = [];
        for (let i in this.cities) {
          this.cities[i].forEach((value) => {
            if (value.spell.indexOf(this.keyWord) > -1 || value.name.indexOf(this.keyWord) > -1) {
              resultList.push(value);
            }
          })
        }
        this.list = resultList;
      }, 100)
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import '../../assets/styles/variable.styl' 
  .fade-enter, .fade-leave-to
    opacity: 0
  .fade-enter-active, .fade-leave-active
    transition: opacity .1s
    
  .city-search
  	background-color: $bgColor
  	height: .7rem
  	line-height: .7rem
  	padding: .08rem .1rem
  	text-align: center
  	.search
  		background-color: $bgColor
	  	.search-input
	  		text-align: center
	  		box-sizing: border-box
	  		width: 100%
	  		border-radius: .1rem
	  		height: .65rem
	  		color: #666
	  		padding: 0 .1rem 
  .result
    position: absolute
    top: 1.72rem
    left: 0
    bottom: 0
    width: 100%
    overflow: hidden
    background-color: #f5f5f5
    z-index: 1 
    color: #666  
    .result-item
      line-height: .62rem
      background-color: #fff
      text-indent: .2rem
    .notFound
      line-height: .62rem
      text-align: center
      margin-top: .2rem
  		
</style>