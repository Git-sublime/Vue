<template>
	<div>
		<div class="categoryList" v-for="(item, index) in categoryList" :key="index">
      <div class="cateContent border-bottom">{{item.title}}</div>
      <div class="cateChildren" v-if="item.children">
        <detail-list :categoryList="item.children"></detail-list>
      </div>
    </div>
	</div>
</template>

<script>
export default {
  name: 'detailList',
  props: {
    categoryList: Array
  }
}
</script>

<style lang="stylus" scoped>
  .categoryList
    line-height: .64rem
    text-indent: .2rem
  .cateChildren
    padding: 0 .2rem
</style>