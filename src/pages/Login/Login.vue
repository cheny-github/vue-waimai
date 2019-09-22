<template>
  <div>
       <i class="iconfont icon-jiantou2" @click="$router.back()"></i>
       <div class="form">
         <h2 class="title">硅谷外卖</h2>
         <div class="labels">
           <span class="label-login"
            @click="go('/login/byphone')"
            :class="{active:$route.path.toLowerCase() === '/login/byphone'}"
           >
            短信登录
           </span>
           <span 
           class="label-login"
           @click="go('/login/bypassword')"
           :class="{active:$route.path.toLowerCase() === '/login/bypassword'}"
           >
            密码登录
           </span>
         </div>
         <keep-alive>
          <router-view ></router-view>
         </keep-alive>
       </div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      
    }
  },
  methods: {
    go(path){
      if (this.$route.path ===path) {
        return ;
      }
      this.$router.replace({
        path,

      })
    }
  },
}
</script>

<style lang="stylus" scoped>
.icon-jiantou2
  position fixed
  top  7px
  left 11px
  font-size 19px  
  color #b2b2b2
.form
  display flex
  flex-flow column
  align-items center
  .title
    font-size 45px
    font-weight bold
    color #02a774
    font-family '微软雅黑'
    margin-bottom 47px
  .labels
    display flex
    width 100%
    justify-content center
    .label-login
      margin 0 25px
      font-size 16px
      padding-bottom 7px
      &.active
        color  #19af81
        font-weight bold
        border-bottom 2px solid #19af81
</style>