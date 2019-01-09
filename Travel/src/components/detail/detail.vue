<template>
	<div>
		<detail-banner :sightName="res.sightName" :bannerImg="res.bannerImg" :gallaryImgs="res.gallaryImgs"></detail-banner>
		<keep-alive>
			<detail-header></detail-header>
		</keep-alive>
		<detail-list :categoryList="res.categoryList"></detail-list>
		<div class="content"></div>
	</div>
</template>

<script>
import axios from 'axios'
import detailBanner from './detailBanner.vue'
import detailHeader from './detailHeader.vue'
import detailList from './detailList.vue'
export default {
  name: 'detail',
  components: {
  	detailBanner,detailHeader,detailList
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
  	  axios.get('./static/mock/detail.json', {
  	  	params: {
  	  	  id: this.$route.params.id
  	  	}
  	  }).then((res) => {
  	  	this.res = res.data.data;
  	  })
  	}
  }
}
</script>

<style lang="stylus" scoped>
  .content
  	height: 30rem
</style>