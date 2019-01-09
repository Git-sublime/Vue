<template>
	<div>
		<div class="title">周末去哪儿</div>
		<div class="recommend-wrapper">
			<ul>
				<li class="recItem" v-for="(item, index) in list" :key="item.id">
					<div class="item-img-wrapper">
						<img class="item-img" :src="item.imgUrl" alt="">
					</div>
					<div class="item-right">
						<p class="item-title" v-text="item.title"></p>
						<p class="item-desc" v-text="item.desc"></p>
					</div>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
export default {
  name: "homeWeekend",
  props: {
    list: Array
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
  	padding-bottom: .2rem
  	.item-img-wrapper
  		width: 100%
  		height: 0
  		padding-bottom: 33.9%
  		overflow: hidden
  		margin-bottom: .15rem
  		.item-img
  			width: 100%
  	.item-right
  		padding: .05rem 0 0 .2rem
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
  			margin-bottom: .1rem
  			
</style>