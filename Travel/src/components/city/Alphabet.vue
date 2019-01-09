<template>
  <ul class="city-Alphabet">
  	<li v-for="(item, key, index) of cities" :key="index" v-text="key" @click="handleClick" :ref="key"></li>
  </ul>
</template>

<script>
export default {
  name: "cityAlphabet",
  props: {
  	cities: Object
  },
  methods: {
  	handleClick (e) {
  	  this.$emit('change', e.target.innerText);
  	}
  }
}
</script>

<style lang="stylus" scoped>
  @import '../../assets/styles/variable.styl'
  .city-Alphabet
  	position: fixed 
  	top: 1.72rem
  	right: 0
  	bottom: 0
  	width: .6rem
  	display: flex
  	flex-direction: column
  	justify-content: center
  	li
  		text-align: center
  		height: .4rem
  		line-height: .4rem
  		color: $bgColor
</style>