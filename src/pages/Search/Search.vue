<template>
  <div class="page">
    <Header :title="'搜索'"></Header>
    <div class="search-bar">
      <input type="search" >
       <button>提交 </button>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="stylus" scoped>
  .page
    background-color #f2f2f2
  .search-bar
    height 66px
    width 100%  
    background-color #fff 
    display flex    
    justify-content space-around
    align-items center
    input[type="search"]
      width 324px
      height 40px
      background-color #f2f2f2
      font-size 18px
      border-radius 3px
      color #666 
      font-weight 4
    button 
      height 40px
      width 74px
      border-radius 3px
      background-color #02a774
      font-size 19px
      text-align center
      line-height 40px
      color #ffffff
      font-weight bold
      border none
      outline none
      &:hover
        opacity .7



</style>