<template>
<div class="cartcontrol">
  <transition name="move">
    <div class="iconfont icon-remove_circle_outline"
    @click.stop="removeFoodFromCart"
    v-show="food.count>0"
    ></div>
  </transition>
  <div class="cart-count" v-show="food.count>0">{{food.count}}</div>
  <div class="iconfont icon-add_circle"
    @click.stop="addFoodToCart"
  ></div>
</div>
</template>

<script>

export default {
    props:{
        food:Object
    },
    methods: {
        addFoodToCart(){
            this.$store.dispatch('addToCart',{food:this.food});
        },
        removeFoodFromCart(){
          this.$store.dispatch('removeFromCart',{food:this.food})
        }
    },
}
</script>
<style lang="stylus" rel="stylesheet/stylus">
  @import "../../assets/stylus/mixins.styl"
  @import "../../assets/stylus/variable.styl"
  .cartcontrol
    font-size: 0
    .cart-decrease
      display: inline-block
      padding: 6px
      line-height: 24px
      font-size: 24px
      color: rgb(0, 160, 220)
    .icon-remove_circle_outline
      display: inline-block
      padding 6px
      line-height 24px
      font-size 24px
      color $green
      &.move-enter,&.move-leave-to
        opacity 0
        transform translateX(50px) rotateZ(180deg)
      &.move-enter-active,&.move.leave-active
        transition all .3s
    .cart-count
      display: inline-block
      vertical-align: top
      width: 12px
      padding-top: 6px
      line-height: 24px
      text-align: center
      font-size: 10px
      color: rgb(147, 153, 159)
    .icon-add_circle
      display: inline-block
      padding: 6px
      line-height: 24px
      font-size: 24px
      color $green
</style>
