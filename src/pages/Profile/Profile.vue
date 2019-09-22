<template>
  <div>
    <Header :title="'我的'"></Header>
    <div class="page">
      <div class="login" @click="goLogin">
        <div class="user"> 
          <i class="iconfont icon-person"></i>
          <div class="flex-container">
              <span 
                :class="{username:user.name}"
                v-if="!user._id || user.name"
              >
                {{user.name?user.name:'登录/注册'}}
              </span> 
              <span
               :class="{username:user.phone}"
               v-if="!user._id || user.phone"
              >
                <i class="iconfont icon-shouji"></i>
                {{userId?user.phone:'暂无绑定手机号'}}
              </span>
          </div>
          </div>
        <i class="iconfont icon-jiantou1" v-if="!userId"></i>
      </div>
      <!-- 余额，优惠 积分 -->
      <div class="info">
        <div class="balance info-item">
          <span class="shuzhi yuan">0.00<span class= "wenben">元</span></span>
          <span class="wenben-bottom">我的余额</span>
        </div>
        <div class="wodeyouhui info-item">
          <span class="shuzhi ge">0<span class="wenben">个</span></span>
          <span class="wenben-bottom">我的优惠</span>
        </div>
        <div class="jifen info-item">
          <span class="shuzhi fen">0<span class="wenben">分</span></span>
          <span class="wenben-bottom">我的积分</span>
        </div>
      </div>
      <!-- 我的订单，积分商城，硅谷外卖会员卡.... -->
      <ul class="service-list">
        <li class="service-item dingdan">
            <span class="left">
              <i class="iconfont icon-dingdan"></i>
              <p>我的订单</p>
            </span>
            <span class="right">
              <i class="iconfont icon-jiantou1"> </i>
            </span>
        </li>
        <li class="service-item shangcheng">
            <span class="left">
              <i class="iconfont icon-jifen"></i>
              <p>积分商城</p>
            </span>
            <span class="right">
              <i class="iconfont icon-jiantou1"> </i>
            </span>
        </li>
        <li class="service-item huiyuanka">
            <span class="left">
              <i class="iconfont icon-vip"></i>
              <p>硅谷外卖会员卡</p>
            </span>
            <span class="right">
              <i class="iconfont icon-jiantou1"> </i>
            </span>
        </li>
        <li class="service-item fuwuzhongxing">
            <span class="left">
              <i class="iconfont icon-fuwu"></i>
              <p>服务中心</p>
            </span>
            <span class="right">
              <i class="iconfont icon-jiantou1"> </i>
            </span>
        </li>
      </ul>
      <mt-button 
       type="danger" 
       class="btn-logout" 
       @click="clickLogOut"
       v-if="userId"
      >
       退出登录
      </mt-button>
    </div>
  </div>
</template>

<script>
import {mapGetters, mapState} from 'vuex';

export default {
  computed:{
    ...mapGetters(['userId']),
    ...mapState(['user'])

  },
  methods:{
    clickLogOut(){
      this.$store.dispatch('logOut')
    },
    goLogin(){
      if (this.userId) {
        return
      }
      this.$router.push('/login')
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '../../assets/stylus/variable.styl'
@import '../../assets/stylus/mixins.styl'
  .page
    background-color #f5f5f5
    height 651px
    .login
      height 113px
      background-color $primary-color
      display flex
      align-items center
      justify-content space-between
      box-sizing border-box
      padding  0  18px 0 12px
      position relative
      .user 
        display flex
        .icon-person
          height 67px
          width 67px
          text-align center
          line-height 67px
          font-size 69px
          overflow hidden 
          background-color #ccc
          color #fefefe
          border-radius 50%
        .flex-container
          display flex
          flex-flow column
          justify-content space-between
          color  #ffffff
          span:first-of-type
            text-align center
            font-size 20px
            font-weight bold
          span:last-of-type
            font-size 15px
            display flex
            align-items center
          .username
            text-align center
            font-size 25px !important 
            align-self center 
            margin auto 10px

      .icon-jiantou1
        font-size 12px
        color #ffffff
      &::before
        content ''
        top 0
        left 0
        display block
        position absolute
        height 2px
        background-color #eee
        width 100%
    .info
      height 91px
      display flex
      .info-item
        height 100%
        width 141px
        background-color #fff
        display flex
        flex-flow column
        justify-content center
        align-items center
        &:nth-of-type(2)
          margin 0 2px
        .shuzhi
          font-size 28px
          font-weight bold
        .yuan
          color #ff9900
        .ge    
          color #ff5f3e
        .fen
          color #6ac20b
        .wenben
          font-size 16px
        .wenben-bottom
          font-size 15px
          color #6e6e6e
    .service-list
      margin-top 10px
      .service-item
        padding  0  18px 0 12px
        height 57px
        display flex
        align-items center
        justify-content space-between
        background-color #fff
        margin-bottom 2px
        .left 
          display flex
          align-items center
          color #777777 
          font-size 18px  !important
          .iconfont
            margin-right 8 px
          .icon-dingdan
            color #70cdb1 
          .icon-jifen
            color #ff5f3e
          .icon-vip
            color #ff9f0f
          .icon-fuwu
            color #02a774
        .right
          .icon-jiantou1
            font-size 12px
            color #ccc
      .fuwuzhongxing
          margin-top 9px
    .btn-logout
      margin-top 12px
      width 100%

        
        
        
          






</style>