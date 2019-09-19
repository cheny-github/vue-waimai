<template>
  <div class="footer">
      <ul class="menu-items">
          <li class="menu-item waimai" @click="go('/home',0)" 
          :class="{active:activeNumber===0}">
              <a>
                  <span class="iconfont icon-waimai"></span>
                  <span class="menu-text">外卖</span>
              </a>
          </li>
          <li class="menu-item search"
            :class="{active:activeNumber===1}"
           @click="go('/search',1)">
              <a >
                  <span class="iconfont icon-search"></span>
                  <span class="menu-text">搜索</span>
              </a>
          </li>
          <li class="menu-item order" 
           :class="{active:activeNumber===2}"
           @click="go('/order',2)" 
          >
              <a>
                  <span class="iconfont icon-dingdan"></span>
                  <span class="menu-text">订单</span>
              </a>
          </li>
          <li class="menu-item wode" :class="{active:activeNumber===3}"
            @click="go('/profile',3)"
          >
              <a>
                  <span class="iconfont icon-geren"></span>
                  <span class="menu-text">我的</span>
              </a>
          </li>

      </ul>
  </div>
</template>

<script>
export default {
    name:'Footer',
    data() {
        return {
            // 指定哪一个底部导航元素处于激活状态 
            activeNumber:undefined
        }
    },
    methods: {
        go(path,activeNumber){
            // this.$route.path
            if (path === this.$router.history.current.path.toLowerCase()) { 
                return
            }
            this.activeNumber =activeNumber
            this.$router.replace(path)
        }
    },
    beforeMount(){
        this.activeNumber = this.$route.meta.activeNumber
    }
}
</script>

<style lang="stylus" scoped>
@import '../../assets/stylus/mixins'
.footer
  border-1px-top()
  height 55px
  width 100%
  position fixed
  z-index 99
  background-color #fff
  bottom 0
  left 0
  padding-top 4px
  .menu-items
    height 100%
    display flex
    justify-content space-around
    .menu-item
      &.active a
        color #02a774
      a
        display flex
        flex-direction column
        align-items center
        justify-content space-around
</style>