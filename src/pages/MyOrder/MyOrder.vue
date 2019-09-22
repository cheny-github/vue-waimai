<template>
  <div>
    <Header :title="'订单列表'"></Header>
    <div class="order-not-login">
      <img src="./images/person.png" alt="未登录">
      <span>登录后查看外卖订单</span>
      <button>立即登录</button>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="stylus" scoped>
    .order-not-login
      height 651px
      display flex
      flex-flow column
      align-items center
      justify-content center
      button 
        background-color #02a774
        color #ffffff
        height 45px
        width 110px
        border-radius 6px
        border none
        outline none
        &:hover
          opacity .7
      span 
        margin 10px 0
        font-size 18px
        color #6a6a6a
</style>