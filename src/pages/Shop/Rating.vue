<template>
  <div class="ratings" ref="scrollWrapper">
    <div class="ratings-content">
      <div class="overview">
        <div class="overview-left">
          <h1 class="score">{{info.score}}</h1>
          <div class="title">综合评分</div>
          <div class="rank">高于周边商家{{info.rankRate}}%</div>
        </div>
        <div class="overview-right">
          <div class="score-wrapper">
            <div><Star :scoreText="info.serviceScore"></Star></div>
            <span class="title">服务态度</span>
            <span class="score">{{info.serviceScore}}</span>
          </div>
          <div class="score-wrapper">
            <div><Star :scoreText="info.foodScore"></Star></div>
            <span class="title">商品评分</span>
            <span class="score">{{info.foodScore}}</span>
          </div>
          <div class="delivery-wrapper">
            <span class="title">送达时间</span>
            <span class="delivery">{{info.deliveryTime}}分钟</span>
          </div>
        </div>
      </div>

      <div class="split"></div>

      <div>
        <RatingFilter 
          :count="ratingList.length"
          :ratingType="ratingType" 
          :setRatingType="setRatingType"
          >
        </RatingFilter>
      </div>

      <div class="rating-wrapper">
        <ul>
          <li class="rating-item" v-for="(rating, index) in ratingList" :key="index">
            <div class="avatar">
              <img width="28" height="28" :src="rating.avatar">
            </div>
            <div class="content">
              <h1 class="name">{{rating.username}}</h1>
              <div class="star-wrapper">
                <div><Star :scoreText="rating.score"></Star></div>
                <span class="delivery">送达时间{{rating.deliveryTime}}</span>
              </div>
              <p class="text">{{rating.text}}</p>
              <div class="recommend">
                <span class="iconfont icon-thumb_up" v-if="rating.rateType===0"></span>
                <span class="iconfont icon-thumb_down"
                v-if="rating.rateType===1"
                ></span>
              </div>
              <div class="time">{{rating.rateTime|timeFilter}}</div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import RatingFilter from './RatingFilter';
import Star from '@/components/Stars/Stars.vue';
import BScroll from 'better-scroll';
import { mapState } from 'vuex';

export default {
  name:'Rating',
  components:{
    RatingFilter,
    Star,
  },
  data() {
    return {
          /**
         * 显示的评论类型
         * showType取值：
         *  Infinity 显示全部评论
         *  1 只显示好评
         *  2 只显示差评
         * 负值：直显示有内容的评论
         *      -1 只显示有内容的好评
         *      -2 只显示有内容的差评
         * -Infinity 只显示有内容的评论
         */
        ratingType:Infinity
    }
  },
  computed:{
    ...mapState({
      info:state=>state.shop.info,
      ratings:state=>state.shop.ratings
    }),
    ratingList(){ //评论列表
    this.$nextTick(()=>{this.BScroll.refresh()});
    let ratingType = this.ratingType;
    // 由于过滤掉没有内容的评论的操作时相同的，所以根据符号的正负，把操作分离出来
    // 然后放到最后判断
    let flagRemoveNoContent = ratingType<0;
    ratingType= Math.abs(ratingType);
    let result;
    switch (true) {
      case ratingType ===Infinity: //全部评论
        result = this.ratings
        break;
      case ratingType ===1: //好评
        result = this.ratings.filter(rating=>rating.rateType === 0)
        break;
      case ratingType ===2: //差评
        result = this.ratings.filter(ratings=>ratings.rateType ===1)
      default:
        break;
    }
    // 过滤掉没有评论内容的
    flagRemoveNoContent && (result= result.filter(rating=>rating.text));
    
    return result;
    },
  },
  methods:{
    getRecommondStyle(rateType){
      if (rateType ===0) {
        
      }else{

      }
    },
    setRatingType(ratingType){
      this.ratingType =ratingType;
    }
  },
  filters:{
    timeFilter(dateStamp){
      const date = new Date(dateStamp);
      return `${date.getFullYear()}-${date.getMonth()+1}-${date.getDay()} ${date.getHours().toString().padStart(2,'0')}:${date.getMinutes().toString().padStart(2,'0')}:${date.getSeconds().toString().padStart(2,'0')}`
    }
  },
  mounted(){
    // 滑动插件 接管DOM
    this.BScroll= new BScroll(this.$refs.scrollWrapper,{
      click:true
    });
  },
  watch:{
    //数据变化，重新计算betterScroll的内容高度
    // 数据变化不代表界面更新
    ratings(){
      this.$nextTick(()=>{this.BScroll.refresh();})
    }
  }

}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import '../../assets/stylus/mixins.styl';
  .ratings
    position: absolute
    top: 225px
    bottom: 0
    left: 0
    width: 100%
    overflow: hidden
    background: #fff
    .overview
      display: flex
      padding: 18px 0
      .overview-left
        flex: 0 0 137px
        padding: 6px 0
        width: 137px
        border-right: 1px solid rgba(7, 17, 27, 0.1)
        text-align: center
        @media only screen and (max-width: 320px)
          flex: 0 0 120px
          width: 120px
        .score
          margin-bottom: 6px
          line-height: 28px
          font-size: 24px
          color: rgb(255, 153, 0)
        .title
          margin-bottom: 8px
          line-height: 12px
          font-size: 12px
          color: rgb(7, 17, 27)
        .rank
          line-height: 10px
          font-size: 10px
          color: rgb(147, 153, 159)
      .overview-right
        flex: 1
        padding: 6px 0 6px 24px
        @media only screen and (max-width: 320px)
          padding-left: 6px
        .score-wrapper
          margin-bottom: 8px
          font-size: 0
          display flex
          .title
            display: inline-block
            line-height: 18px
            vertical-align: top
            font-size: 12px
            color: rgb(7, 17, 27)
          .stars
            margin 0 10px
            .star
              display: inline-block
              vertical-align: top
              width 15px
              height 15px
              margin 0 2px
          .score
            display: inline-block
            line-height: 18px
            vertical-align: top
            font-size: 12px
            color: rgb(255, 153, 0)
        .delivery-wrapper
          font-size: 0
          .title
            line-height: 18px
            font-size: 12px
            color: rgb(7, 17, 27)
          .delivery
            margin-left: 12px
            font-size: 12px
            color: rgb(147, 153, 159)
    .rating-wrapper
      padding: 0 18px
      overflow hidden
      .rating-item
        display: flex
        padding: 18px 0
        bottom-border-1px(rgba(7, 17, 27, 0.1))
        .avatar
          flex: 0 0 28px
          width: 28px
          margin-right: 12px
          img
            border-radius: 50%
        .content
          position: relative
          flex: 1
          .name
            margin-bottom: 4px
            line-height: 12px
            font-size: 10px
            color: rgb(7, 17, 27)
          .star-wrapper
            margin-bottom: 6px
            font-size: 0
            .star
              display: inline-block
              margin-right: 2px
              vertical-align: top
            .delivery
              display: inline-block
              vertical-align: top
              line-height: 12px
              font-size: 10px
              color: rgb(147, 153, 159)
          .text
            margin-bottom: 8px
            line-height: 18px
            color: rgb(7, 17, 27)
            font-size: 12px
          .recommend
            line-height: 16px
            font-size: 0
            .icon-thumb_up, .icon-thumb_down, .item
              display: inline-block
              margin: 0 8px 4px 0
              font-size: 9px
            .icon-thumb_up
              color: $yellow
            .icon-thumb_down
              color: rgb(147, 153, 159)

            .item
              padding: 0 6px
              border: 1px solid rgba(7, 17, 27, 0.1)
              border-radius: 1px
              color: rgb(147, 153, 159)
              background: #fff
          .time
            position: absolute
            top: 0
            right: 0
            line-height: 12px
            font-size: 10px
            color: rgb(147, 153, 159)
</style>
