<template>
  <div>
    <div class="shopcart">
      <div class="content">
        <div class="content-left">
          <div class="logo-wrapper" @click="()=>{
            flagShowCartList=!flagShowCartList;
            $nextTick(()=>{BScroll.refresh();})
            }"> 
            <div class="logo" :class="{highlight:this.totalCount>0}">
              <i class="iconfont icon-shopping_cart highlight"></i>
            </div>
            <div class="num" v-if="this.totalCount>0">{{totalCount}}</div>
          </div>
          <div class="price highlight">￥{{totalPrice}}</div>
          <div class="desc">另需配送费{{this.info.deliveryPrice}}￥</div>
        </div>
        <div class="content-right">
          <div class="pay not-enough" :class="{enough:flagToOrder}">
            {{feeText}}
          </div>
        </div>
      </div>
      <transition name="cartmove">
      <div class="shopcart-list" v-show="flagShowCartList"  >
        <div class="list-header">
          <h1 class="title">购物车</h1>
          <span class="empty" @click.stop.prevent="clearCart">清空</span>
        </div>
        <div class="list-content" ref="shopCartList">
          <ul class="scroll-wrapper">
            <li class="food"
              v-for="(food, index) in cart" :key="index"
            >
              <span class="name">{{food.name}}</span>
              <div class="price"><span>￥{{food.price*food.count}}</span></div>
              <div class="cartcontrol-wrapper">
                <!-- <div class="cartcontrol">
                  <div class="iconfont icon-remove_circle_outline"></div>
                  <div class="cart-count"></div>
                  <div class="iconfont icon-add_circle"></div>
                </div> -->
                <CartControl :food="food"></CartControl>
              </div>
            </li>
          </ul>
        </div>
      </div>
      </transition>
    </div>

    <div 
      class="list-mask" 
      v-show="flagShowCartList"
      @click.prevent="flagShowCartList=false"
    >
  </div>
</div>
</template>

<script>
import { mapState, mapGetters } from 'vuex';
import CartControl from 'components/CartControl/CartControl';
import BScroll from 'better-scroll';
export default {
    name:'Cart',
    components:{
        CartControl
    },
    computed:{
      
        ...mapState({
            cart:state=>state.shop.cart,
            info:state=>state.shop.info
        }),
        ...mapGetters(['totalCount','totalPrice']),
        // 下单按钮的文本
        feeText(){
          if (this.totalCount ===0) {
            this.flagToOrder=false;
            return `起送费${this.info.minPrice}元`
          }
          let fee =   this.totalPrice -this.info.minPrice;
          if (fee<0) {
            this.flagToOrder=false;
            return '还差'+Math.abs(fee)+'元起送';
          }else{
            this.flagToOrder=true;
            return '下单';
          }
        },
    },
    data() {
      return {

        // 标识：满足配送费可下单
        flagToOrder:false,
        // 标识：控制展示购物车内详细内容的显示
        flagShowCartList:false
      }
    },
    methods:{
      clearCart(){
        this.$store.dispatch('clearCart');
        this.flagShowCartList=false;
      }
    },
    mounted(){
        this.BScroll=new BScroll(this.$refs.shopCartList,{click:true});
    },
    watch:{
      totalCount(){
        this.$nextTick(()=>{this.BScroll.refresh();})
        // this.BScroll.refresh();
      }
    }
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
@import '../../assets/stylus/mixins.styl';
  .shopcart
    position: fixed
    left: 0
    bottom: 0
    z-index: 50
    width: 100%
    height: 48px
    .content
      display: flex
      background: #141d27
      font-size: 0
      color: rgba(255, 255, 255, 0.4)
      .content-left
        flex: 1
        .logo-wrapper
          display: inline-block
          vertical-align: top
          position: relative
          top: -10px
          margin: 0 12px
          padding: 6px
          width: 56px
          height: 56px
          box-sizing: border-box
          border-radius: 50%
          background: #141d27
          .logo
            width: 100%
            height: 100%
            border-radius: 50%
            text-align: center
            background: #2b343c
            &.highlight
              background: $green
            .icon-shopping_cart
              line-height: 44px
              font-size: 24px
              color: #80858a
              &.highlight
                color: #fff
          .num
            position: absolute
            top: 0
            right: 0
            width: 24px
            height: 16px
            line-height: 16px
            text-align: center
            border-radius: 16px
            font-size: 9px
            font-weight: 700
            color: #ffffff
            background: rgb(240, 20, 20)
            box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.4)
        .price
          display: inline-block
          vertical-align: top
          margin-top: 12px
          line-height: 24px
          padding-right: 12px
          box-sizing: border-box
          border-right: 1px solid rgba(255, 255, 255, 0.1)
          font-size: 16px
          font-weight: 700
          &.highlight
            color: #fff
        .desc
          display: inline-block
          vertical-align: top
          margin: 12px 0 0 12px
          line-height: 24px
          font-size: 10px
      .content-right
        flex: 0 0 105px
        width: 105px
        .pay
          height: 48px
          line-height: 48px
          text-align: center
          font-size: 12px
          font-weight: 700
          &.not-enough
            background: #2b333b
          &.enough
            background: #00b43c
            color: #fff
    .shopcart-list
      position: absolute
      left: 0
      top: 0 
      z-index: -1
      width: 100%
      transform translateY(-100%)
      &.cartmove-enter,&.cartmove-leave-to
        transform translateY(0%)
      &.cartmove-enter-active,&.cartmove-leave-active
        transition transform .3s

      .list-header
        height: 40px
        line-height: 40px
        padding: 0 18px
        background: #f3f5f7
        border-bottom: 1px solid rgba(7, 17, 27, 0.1)
        .title
          float: left
          font-size: 14px
          color: rgb(7, 17, 27)
        .empty
          float: right
          font-size: 12px
          color: rgb(0, 160, 220)

      .list-content
        padding: 0 18px
        max-height: 217px
        overflow: hidden
        background: #fff
        .food
          position: relative
          padding: 12px 0
          box-sizing: border-box
          bottom-border-1px(rgba(7, 17, 27, 0.1))
          .name
            line-height: 24px
            font-size: 14px
            color: rgb(7, 17, 27)
          .price
            position: absolute
            right: 90px
            bottom: 12px
            line-height: 24px
            font-size: 14px
            font-weight: 700
            color: rgb(240, 20, 20)
          .cartcontrol-wrapper
            position: absolute
            right: 0
            bottom: 6px

  .list-mask
    position: fixed
    top: 0
    left: 0
    width: 100%
    height: 100%
    z-index: 40
    backdrop-filter: blur(10px)
    opacity: 1
    background: rgba(7, 17, 27, 0.6)
    &.fade-enter-active, &.fade-leave-active
      transition: all 0.5s
    &.fade-enter, &.fade-leave-to
      opacity: 0
</style>