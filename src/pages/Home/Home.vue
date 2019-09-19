<template>
  <div>
    <Header :title="'good good study day day up'">
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
                    <div class="swiper-slide">
                        <!-- 强调食物种类的时候food可数 -->
                        <ul class="foods">
                            <li class="food">
                                <a >
                                    <img src="./images/nav/1.jpg" width="50" height="50" />
                                    <span>辣条</span>
                                </a>
                            </li>
                            <li class="food">
                                <a >
                                    <img src="./images/nav/2.jpg" width="50" height="50" />
                                    <span>辣条</span>
                                </a>
                            </li>
                            <li class="food">
                                <a >
                                    <img src="./images/nav/3.jpg" width="50" height="50" />
                                    <span>辣条</span>
                                </a>
                            </li>
                            <li class="food">
                                <a >
                                    <img src="./images/nav/4.jpg" width="50" height="50" />
                                    <span>辣条</span>
                                </a>
                            </li>
                        </ul>
                        <ul class="foods">
                            <li class="food">
                                <a >
                                    <img src="./images/nav/5.jpg" width="50" height="50" />
                                    <span>辣条</span>
                                </a>
                            </li>
                            <li class="food">
                                <a >
                                    <img src="./images/nav/6.jpg" width="50" height="50" />
                                    <span>辣条</span>
                                </a>
                            </li>
                            <li class="food">
                                <a >
                                    <img src="./images/nav/7.jpg" width="50" height="50" />
                                    <span>辣条</span>
                                </a>
                            </li>
                            <li class="food">
                                <a >
                                    <img src="./images/nav/8.jpg" width="50" height="50" />
                                    <span>辣条</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div class="swiper-slide">
                            <ul class="foods">
                                    <li class="food">
                                        <a >
                                            <img src="./images/nav/9.jpg" width="50" height="50" />
                                            <span>辣条</span>
                                        </a>
                                    </li>
                                    <li class="food">
                                        <a >
                                            <img src="./images/nav/10.jpg" width="50" height="50" />
                                            <span>辣条</span>
                                        </a>
                                    </li>
                                    <li class="food">
                                        <a >
                                            <img src="./images/nav/11.jpg" width="50" height="50" />
                                            <span>辣条</span>
                                        </a>
                                    </li>
                                    <li class="food">
                                        <a >
                                            <img src="./images/nav/12.jpg" width="50" height="50" />
                                            <span>辣条</span>
                                        </a>
                                    </li>
                                </ul>
                                <ul class="foods">
                                    <li class="food">
                                        <a >
                                            <img src="./images/nav/13.jpg" width="50" height="50" />
                                            <span>辣条</span>
                                        </a>
                                    </li>
                                    <li class="food">
                                        <a >
                                            <img src="./images/nav/14.jpg" width="50" height="50" />
                                            <span>辣条</span>
                                        </a>
                                    </li>
                                    <li class="food">
                                        <a >
                                            <img src="./images/nav/1.jpg" width="50" height="50" />
                                            <span>辣条</span>
                                        </a>
                                    </li>
                                    <li class="food">
                                        <a >
                                            <img src="./images/nav/1.jpg" width="50" height="50" />
                                            <span>辣条</span>
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
                <li>
                    <div class="left">
                        <img src="./images/shop/1.jpg" alt="商家">
                    </div>
                    <div class="center">
                        <div class="title">
                            <span class="pingpai">品牌</span>
                            <span class="biaoti">
                                脆皮鸡，麻辣香锅，温馨粥道，烧烤，盖浇饭，红烧肉
                            </span>
                        </div>
                        <div class="score"> 
                            <span class="stars">
                                <span class="star"></span>
                                <span class="star"></span>
                                <span class="star"></span>
                                <span class="star"></span>
                                <span class="star"></span>
                            </span>
                            <span class="score-text">3.1</span>
                            <span class="sales">月销量106单</span>
                        </div>
                        <div class="price">￥20起送/配送费￥3</div>
                    </div>
                    <div class="right">
                        <!-- 服务 -->
                        <div class="top">
                            <span class="span1">保</span>
                            <span class="span1">准</span>
                            <span class="span1">票</span>
                        </div>
                        <div class="bottom">
                            <span class="zhuansong">硅谷专送</span>
                            <span class="zhunshi">准时达</span>
                        </div>
                    </div>
                </li> 
                <li>
                    <div class="left">
                        <img src="./images/shop/2.jpg" alt="商家">
                    </div>
                    <div class="center">
                        <div class="title">
                            <span class="pingpai">品牌</span>
                            <span class="biaoti">
                                脆皮鸡，麻辣香锅，温馨粥道，烧烤，盖浇饭，红烧肉
                            </span>
                        </div>
                        <div class="score"> 
                            <span class="stars">
                                <span class="star"></span>
                                <span class="star"></span>
                                <span class="star"></span>
                                <span class="star"></span>
                                <span class="star"></span>
                            </span>
                            <span class="score-text">4.1</span>
                            <span class="sales">月销量106单</span>
                        </div>
                        <div class="price">￥20起送/配送费￥3</div>
                    </div>
                    <div class="right">
                        <!-- 服务 -->
                        <div class="top">
                            <span class="span1">保</span>
                            <span class="span1">准</span>
                            <span class="span1">票</span>
                        </div>
                        <div class="bottom">
                            <span class="zhuansong">硅谷专送</span>
                            <span class="zhunshi">准时达</span>
                        </div>
                    </div>
                </li> 
                <li>
                    <div class="left">
                        <img src="./images/shop/3.jpg" alt="商家">
                    </div>
                    <div class="center">
                        <div class="title">
                            <span class="pingpai">品牌</span>
                            <span class="biaoti">
                                脆皮鸡，麻辣香锅，温馨粥道，烧烤，盖浇饭，红烧肉
                            </span>
                        </div>
                        <div class="score"> 
                            <span class="stars">
                                <span class="star"></span>
                                <span class="star"></span>
                                <span class="star"></span>
                                <span class="star"></span>
                                <span class="star"></span>
                            </span>
                            <span class="score-text">5</span>
                            <span class="sales">月销量1006单</span>
                        </div>
                        <div class="price">￥10起送/配送费￥3</div>
                    </div>
                    <div class="right">
                        <!-- 服务 -->
                        <div class="top">
                            <span class="span1">保</span>
                            <span class="span1">准</span>
                            <span class="span1">票</span>
                        </div>
                        <div class="bottom">
                            <span class="zhuansong">硅谷专送</span>
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
export default {

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
                      .stars
                          display flex
                          .star
                              height 10px
                              width 10px
                              font-size 0px
                              margin 0 1px
                              background url('./images/stars/star_off.png') 
                              background-size cover

                              @media (-webkit-min-device-pixel-ratio:2),(min-resolution:2)
                                  background url('./images/stars/star_off@2x.png') 
                                  background-size cover
                              @media (-webkit-min-device-pixel-ratio:3),(min-resolution:3)
                                  background url('./images/stars/star_off@3x.png') 
                                  background-size cover
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