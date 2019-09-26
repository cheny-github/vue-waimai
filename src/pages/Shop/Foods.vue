<template>
  <div>
      <keep-alive>
    <div  class="goods">
   <div class="menu-wrapper" ref="scrollLeft">
      <ul 
        ref="menuList"
      >
        <!-- class current -->
        <li class="menu-item " 
        v-for="(good, index) in goods" :key="index"
        :class="{current:index === currentIndex}"
        @click="scrollRightTo(index)"
        >
            <span class="text bottom-border-1px" >  <img class="icon"
            v-if="good.icon" :src="good.icon">{{good.name}}</span>
          </li>
        </ul>
      </div>
      <!-- 右边食物列表 -->
      <div class="foods-wrapper" ref="scrollRight">
        <ul ref="foodsUl">
          <li class="food-list-hook" v-for="(good, index) in goods" :key="index"
          >
            <h1 class="title">{{good.name}}</h1>
            <ul>
              <!-- 食物 -->
              <li class="food-item bottom-border-1px"
                v-for="(food, index) in good.foods" :key="index"
                @click.stop="showFoodDetail(food)"
              >
                <div class="icon">
                  <img width="57" height="57"
                      :src="food.icon">
                </div>
                <div class="content">
                  <h2 class="name">{{food.name}}</h2>
                  <p class="desc">{{food.description}}</p>
                  <div class="extra">
                    <span class="count">月售{{food.sellCount}}份</span>
                    <span>好评率{{food.rating}}%</span></div>
                  <div class="price">
                    <span class="now">￥{{food.price}}</span>
                    <span class="old" v-if="food.oldPrice || food.oldPrice===0">￥{{food.oldPrice}}</span>
                  </div>
                  <div class="cartcontrol-wrapper">
                    <CartControl :food="food"></CartControl>
                  </div>
                </div>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>

  </keep-alive>
  <Food 
   v-if="showFood" 
   :closeFoodDetail="closeFoodDetail"
   :food="selectedFood"
  ></Food>
  </div>




</template>

<script>
import {mapState} from 'vuex';
import BScroll from '@better-scroll/core';
import CartControl from 'components/CartControl/CartControl';
import Food from './Food';
export default {
  components:{
    CartControl,
    Food
  },
  computed: {
    ...mapState({
      goods:state=>state.shop.goods
    }),
    currentIndex(){
      const {foodsHeightList} =this;
      const {scrollY}=this;
      
      const index = foodsHeightList.findIndex((foodsHeight,index)=> {
        return scrollY>=foodsHeight&& scrollY <foodsHeightList[index+1]
      })
      // 滚动scrollLeft
      const elementToScroll = this.$refs.menuList && 
      this.$refs.menuList.children[index];
     
      elementToScroll
        &&
      this.scrollLeft.scrollToElement(elementToScroll,300)

      return index;
    }
  },
  data() {
    return {
      scrollY:0,
      foodsHeightList:[],
      showFood:false,
      selectedFood:{} //要显示详情的Food
    }
  },
  watch:{
    goods(){
     this.initScroll()
    } 
  },

  methods:{
    initScroll(){
      this.$nextTick(
        ()=>{
          this.scrollRight = new BScroll(this.$refs.scrollRight,{
            probeType:1,
            click:true
          });
          this.scrollRight.on("scrollEnd",({y})=>{
            this.scrollY=Math.abs(y);
          })
          this.scrollRight.on("scroll",({y})=>{
            this.scrollY = -y;
          });

          this.scrollLeft = new BScroll(this.$refs.scrollLeft,{
            probeType:1,
            click:true
          })


          // 计算每一个foods相对于scroll容器的y轴偏移量
          const foodsList=[...this.$refs.foodsUl.children];
          const foodsHeightList= [0];
          let height =0;
          foodsList.forEach((foods) => {
              height+=foods.clientHeight;
              foodsHeightList.push(height);
          });
          this.foodsHeightList = foodsHeightList;
      })
    },
    scrollRightTo(index){
      const elementToScroll= this.$refs.foodsUl.children[index];
      // probeType=1，在编程跳转下不分发事件。scrollY在最后scrollEnd中更新
      this.scrollRight.scrollToElement(elementToScroll,300);
      // 由于 leftScroll的active class由scrollY决定，先修改scrollY激活当前点击的元素，以免出现延迟效果。
      this.scrollY=this.foodsHeightList[index];
    },
    // 显示食品详情
    showFoodDetail(food){
      this.selectedFood =food;
      this.showFood =true;
    },
    closeFoodDetail(){
      this.showFood=false;
      this.selectedFood = {};
    }
    
  },
  beforeRouteEnter(to,from,next){
    // 如果从下面两个路径跳过来，则表示goods已经初始化好了
    if (['/shop/rating','/shop/detail'].indexOf(from.path)!==-1) {
      next((component)=>component.initScroll())
    }
    next()
  }
}
</script>

<style lang="stylus" scoped>
  @import "../../assets/stylus/mixins.styl"
  .goods
    display: flex
    position: absolute
    top: 225px
    bottom: 46px
    width: 100%
    background: #fff;
    overflow: hidden
    .menu-wrapper
      flex: 0 0 80px
      width: 80px
      background: #f3f5f7
      .menu-item
        display: table
        height: 54px
        width: 56px
        padding: 0 12px
        line-height: 14px
        &.current
          position: relative
          z-index: 10
          margin-top: -1px
          background: #fff
          color: $green
          font-weight: 700
          .text
            border-none()
        .icon
          display: inline-block
          vertical-align: top
          width: 12px
          height: 12px
          margin-right: 2px
          background-size: 12px 12px
          background-repeat: no-repeat
        .text
          display: table-cell
          width: 56px
          vertical-align: middle
          bottom-border-1px(rgba(7, 17, 27, 0.1))
          font-size: 12px
    .foods-wrapper
      flex: 1
      .title
        padding-left: 14px
        height: 26px
        line-height: 26px
        border-left: 2px solid #d9dde1
        font-size: 12px
        color: rgb(147, 153, 159)
        background: #f3f5f7
      .food-item
        display: flex
        margin: 18px
        padding-bottom: 18px
        bottom-border-1px(rgba(7, 17, 27, 0.1))
        &:last-child
          border-none()
          margin-bottom: 0
        .icon
          flex: 0 0 57px
          margin-right: 10px
        .content
          flex: 1
          .name
            margin: 2px 0 8px 0
            height: 14px
            line-height: 14px
            font-size: 14px
            color: rgb(7, 17, 27)
          .desc, .extra
            line-height: 10px
            font-size: 10px
            color: rgb(147, 153, 159)
          .desc
            line-height: 12px
            margin-bottom: 8px
          .extra
            .count
              margin-right: 12px
          .price
            font-weight: 700
            line-height: 24px
            .now
              margin-right: 8px
              font-size: 14px
              color: rgb(240, 20, 20)
            .old
              text-decoration: line-through
              font-size: 10px
              color: rgb(147, 153, 159)
          .cartcontrol-wrapper
            position: absolute
            right: 0
            bottom: 12px
</style>