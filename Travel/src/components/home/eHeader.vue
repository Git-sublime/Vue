<template>
  <div class="header">
    <div class="header-left iconfont icon-fanhui"></div>
    <div class="header-input">
      <span class="iconfont icon-sousuo head-seach-icon"></span>
      <input class="search-input" type="text" placeholder="输入城市/景点/游玩主题">
    </div>
    <router-link to="/city">
      <div class="header-right">
        <span>{{this.$store.state.city}}</span>
        <span class="iconfont icon-xiangxia"></span>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'homeHeader'
}
</script>

<style lang="stylus" scoped>
    @import '../../assets/styles/variable.styl'
  .header
    line-height: .86rem
    background: $bgColor
    display: flex
    color: #fff
    .header-left
      width: .44rem
      float: left
      height: 100%
      padding: 0 .05rem 0 .15rem
    .header-input
      flex: 1
      height: .62rem
      line-height: .62rem
      margin: .12rem .15rem 0 .1rem
      padding: 0 .1rem;
      border-radius: .1rem
      background-color: #fff
      color: #ccc
      display: flex
      .search-input
        line-height: .62rem
        border: 0 
        flex: 1
        text-indent: .1rem
    .header-right
      // min-width: 1.22rem
      padding-right: .2rem
      float: right
      height: 100%
      color: #fff
      .icon-xiangxia
        margin-left: .02rem
        font-size: .28rem
        
</style>
