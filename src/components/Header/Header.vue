<template>
  <div class="header">

          <slot name="left"></slot>
          <span class="header-text">{{title}}</span>
          <slot name="right"></slot>

  </div>
</template>

<script>
export default {
  props:{
    title:String,
  }
}
</script>

<style lang="stylus" scoped>
@import '../../assets/stylus/variable.styl';
  .header
      height 51px
      width 100%
      position fixed
      z-index 99
      top 0
      left 0
      background-color $primary-color
      color #ffffff
      display flex
      align-items center
      justify-content space-around
      .header-text
          width 188px
          line-height 30px
          overflow hidden
          white-space nowrap
          text-overflow ellipsis
          font-size 20px
          text-align center
          
</style>