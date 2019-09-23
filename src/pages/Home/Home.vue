<template>
  <div>
    <Header :title="address">
        <span class="iconfont icon-sousuo" slot="left"></span>
        <span class="btns" slot="right">
            <a >登录</a>|<a >注册</a>
        </span>
    </Header>
    <div class="content">
        <div class="swiper-container">
                <!-- Additional required wrapper -->
                <div class="swiper-wrapper">
                    <!-- Slides -->
                    <div class="swiper-slide"
                     v-for="(categoriesItem,index) in categoriesArr" :key="index">
                        <!-- 强调食物种类的时候food可数 -->
                        <ul class="foods" v-for="(categories,index) in categoriesItem " :key="index">
                            <li class="food" v-for="category in categories" :key="category.id">
                                <a>
                                    <img 
                                    :src="`https://fuss10.elemecdn.com${category.image_url}`"
                                    width="50" height="50" />
                                    <span>{{category.title}}</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <!-- If we need pagination -->
                <div class="swiper-pagination"></div>
        </div>
        <div class="restaurant">
            <div class="hint">
                  <span class="iconfont icon-xuanxiang"></span>
                  附近商家
            </div>
            <ul>
                <li
                :key="shop.id" 
                @click="$router.push('/shop')"
                v-for="shop in shops" 
                >
                    <div class="left">
                        <img :src="'https://fuss10.elemecdn.com'+shop.image_path" alt="商家">
                    </div>
                    <div class="center">
                        <div class="title">
                            <span class="pingpai">品牌</span>
                            <span class="biaoti">
                                {{shop.name}}
                            </span>
                        </div>
                        <div class="score"> 
                            <Stars :scoreText="shop.rating"></Stars>
                            <span class="score-text">{{shop.rating}}</span>
                            <span class="sales">月销量{{shop.recent_order_num}}单</span>
                        </div>
                        <div class="price">￥{{shop.float_minimum_order_amount}}起送/配送费￥{{shop.float_delivery_fee}}</div>
                    </div>
                    <div class="right">
                        <!-- 服务 -->
                        <div class="top">
                            <span  
                            v-for="support in shop.supports" 
                            :key="support.id"
                            class="span1"
                            :style="{color:shop.icon_color}"
                            >
                                {{support.icon_name}}
                            </span>
                        </div>
                        <div class="bottom">
                            <span class="zhuansong">{{shop.delivery_mode.text}}</span>
                            <span class="zhunshi">准时达</span>
                        </div>
                    </div>
                </li> 
            </ul>
        </div>  
        <div class="seprator">
        </div>
    </div>
  </div>
</template>

<script>
import 'swiper/css/swiper.min.css';
import Swiper from 'swiper';
import {mapGetters,mapState} from 'vuex';
import Stars from '../../components/Stars/Stars';
export default {
    name:'Home',
    components:{
        Stars
    },
    async mounted() {
        this.$store.dispatch('getAddress',()=>{
            this.address=this.$store.state.address.address 
        });
        //swiper必须在界面渲染完成后才能初始化，数据改了并不代表着页面渲染完毕，需要勾在nextTick上初始化swiper。
        const token = localStorage.getItem("token_key")
        this.$store.dispatch('getCategories',{
            callback:()=>{
            this.$nextTick(
                ()=>{
                    new Swiper('.swiper-container', {
                        loop: true,
                        pagination: {
                        el: '.swiper-pagination'
                        }
                    })
                }
                )
            },
            token
        })
        //也可以 await this.$store.dispatch('getCategories')
        // 当这个promise有结果后 页面已经渲染完成了  
        this.$store.dispatch('getShopList',{token})
    },
    data() {
        return {
            address:'正在获取位置信息...'
        }
    },
    computed: {
        ...mapGetters(['categoriesArr']),
        ...mapState(['shops'])
    },
}
</script>

<style lang="stylus" scoped>
@import '../../assets/stylus/variable.styl'
    .btns a
        color #ffffff
        font-size 15px
    .content
      min-height 100%
      .swiper-container
          height 233px
          width 100%
          border-bottom 14px solid #f5f5f5
          overflow hidden
          .foods
              height 50%
              display flex
              margin-top 5px
              justify-content space-around
              .food
                  a
                      margin-top 20px
                      display flex
                      flex-flow column 
                      justify-content center
                      align-items center
          .swiper-pagination-bullet-active
              background-color $primary-color
      .restaurant
          min-height 404px
          padding 13px 9px 0px 14px
          .hint
              color #b1b1b1
              font-size 14px
              margin-bottom 20px
              .icon-xuanxiang
                  font-size 16px
                  padding-right 8px
                  color #464646
          ul li 
              display flex
              justify-content space-between
              height 88px
              margin-top 15px
              margin-bottom 15px
              &:first-of-type
                  margin-top 20px
              .left img
                  width 84px
                  height 88px
              .center
                  display flex
                  flex-flow column
                  justify-content space-around
                  .title 
                      display flex
                      align-items center
                      .pingpai    
                          font-size 13px
                          background-color #ffdf4d
                          margin-right 5px
                      .biaoti
                          width 110px
                          font-weight bold
                          white-space nowrap
                          overflow hidden
                          text-overflow ellipsis
                  .score
                      display flex
                      align-items center
                      justify-content space-around
                      font-size 10px 
                      .score-text
                          color #ff9c60
                      
                      .sales
                              color #7a7a7a
                  .price
                      color #7a7a7a
                      font-size 12px

              .right
                  .top
                      text-align right
                      margin-top 6px
                      .span1
                          font-size 11px
                          border 1px solid #aaa
                          color #7a7a7a
                          border-radius 2px
                          padding 0 1px
                          vertical-align middle
                  .bottom
                      margin-top 23px
                      display flex
                      font-size 10px
                      .zhuansong
                          padding 1px
                          margin-right 5px
                          color #ffffff
                          background-color $primary-color
                          vertical-align middle
                      .zhunshi
                          padding 1px
                          border 1px solid $primary-color
                          color $primary-color
                          vertical-align middle
      .seprator
          height 13px
</style>