<template>
  <div>
    <ShopHeader></ShopHeader>
    <div class="tab">
      <router-link
        :to="{name:'foods'}"
        replace
        class="tab-item"
        :class="{active:activeNumber===0}"
      >点餐</router-link>
      <router-link
        :to="{name:'rating'}"
        replace
        class="tab-item"
        :class="{active:activeNumber===1}"
      >评价</router-link>
      <router-link
        :to="{name:'detail'}"
        replace
        class="tab-item"
        :class="{active:activeNumber===2}"
      >店家</router-link>
    </div>
        <router-view></router-view>
        <Cart v-if="$route.path === '/shop/foods'"></Cart>
  </div>
</template>

<script>
import ShopHeader from "./ShopHeader";
import Cart from './Cart';
export default {
  components: {
    ShopHeader,
    Cart
  },
  computed: {
    activeNumber() {
      return this.$route.meta.shopActiveNumber;
    }
  },
  mounted() {
    this.$store.dispatch("getGoods");
    this.$store.dispatch("getInfo");
    this.$store.dispatch("getRatings");
  },
  data() {
    return {
      // flagShowCart:false
    }
  },
};
</script>

<style lang="stylus" scoped>
@import '../../assets/stylus/mixins.styl';

.tab {
  height: 40px;
  line-height: 40px;
  background: #fff;
  top: -54px;
  width: 360px;
  left: 40px;
  bottom-border-1px(rgba(7, 17, 27, 0.1));

  .tab-item {
    float: left;
    width: 33.33333%;
    text-align: center;
    font-size: 14px;
    color: rgb(77, 85, 93);

    &.active {
      color: #19af81;
      font-weight: bold;
      border-bottom: 2px solid #19af81;
    }

    a {
      display: block;
      position: relative;

      &.router-link-active {
        color: #02a774;

        &::after {
          content: '';
          position: absolute;
          left: 50%;
          bottom: 1px;
          width: 35px;
          height: 2px;
          transform: translateX(-50%);
          background: #02a774;
        }
      }
    }
  }
}
</style>