<template>
	<div>
		<div class="title">热门推荐</div>
		<div class="recommend-wrapper">
			<ul>
				<router-link tag="li" class="recItem" v-for="(item, index) in list" :key="item.id" :to="'/detail/' + item.id">
					<img class="item-img" :src="item.imgUrl" alt="">
					<div class="item-right">
						<p class="item-title" v-text="item.title"></p>
						<p class="item-desc" v-text="item.desc"></p>
						<!-- <p class="item price" v-text="item.price"></p> -->
						<p class="item-price">
							<span class="sign">￥</span>
							<span class="price" v-text="item.price"></span>
							<span class="text">起</span>
							<span class="address" v-text="item.address"></span>
						</p>
					</div>
				</router-link>
			</ul>
		</div>
	</div>
</template>

<script>
export default {
  name: "homeRecommend",
  props: {
    list: Array
  },
  filters: {
  	formatPrice (value) {
  		if (!value) return '';
  		let sValue = value.toString();
  		return '￥' + sValue + '元';
  	}
  }
}
</script>

<style lang="stylus" scoped>
  .title
  	margin-top: .2rem
  	line-height: .6rem
  	background: #f5f5f5;
  	text-indent: .2rem
  .recItem
  	height: 1.6rem
  	margin: .2rem .2rem 0
  	padding-bottom: .2rem
  	border-bottom: .01rem solid #eee
  	display: flex
  	.item-img
  		width: 1.6rem
  	.item-right
  		flex: 1
  		padding: .05rem 0 0 .2rem
  		min-width: 0
  		.item-title
  			font-weight: 700
  			font-size: .32rem
  			padding-bottom: .17rem
  			overflow: hidden
  			white-space: nowrap
  			text-overflow: ellipsis
  		.item-desc
  			width: 100%
  			font-size: .26rem
  			color: #777
  			margin-right: .2rem
  			overflow: hidden
  			white-space: nowrap
  			text-overflow: ellipsis
  		.item-price
  			margin-top: .4rem
  			color: #ff8300
  			line-height: .36rem
  			.sign
  				font-size: .26rem
  			.price
  				font-size: .36rem
  				margin-left: -0.1rem
  			.text
  				color: #666
  				font-size: .26rem
  			.address
  				font-size: .20rem
  				color: #999
  				float: right
  				max-width: 1.2rem
  				margin-right: .02rem
  				overflow: hidden
  				white-space: nowrap
  				text-overflow: ellipsis
  				
</style>