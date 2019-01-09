<template>
  <div class="city">
	<c-header></c-header>
	<c-search :cities="cities"></c-search>
	<c-list :hotCities="hotCities" :cities="cities" :letter="letter"></c-list>
	<c-alphabet :cities="cities" @change="handleClickAlphabet"></c-alphabet>
  </div>
</template>

<script>
import cHeader from './cityHeader.vue'
import cSearch from './citySearch.vue'
import cList from './cityList.vue'
import cAlphabet from './Alphabet.vue'
import axios from 'axios'
export default {
  name: 'city',
  components: {
  	cHeader,cSearch,cList,cAlphabet
  },
  data () {
    return {
      hotCities: [],
      cities: {},
      letter: ""
    }
  },
  mounted () {
    this.getData()
  },
  methods: {
    getData () {
      axios.get('./static/mock/city.json').then((res) => {
        const _res = res.data;
        this.hotCities = _res.data.hotCities;
        this.cities = _res.data.cities;
      })
    },
    handleClickAlphabet (letter) {
      this.letter = letter;
    }
  }
}
</script>

<style lang="stylus" scoped>	
</style>