<template>
  <div id="app">
    <Header></Header>
    <Content></Content>
    <Footer></Footer>
  </div>
</template>

<script>
  import Header from './components/Header/Header'
  import Content from './components/Content/Content'
  import Footer from './components/Footer/Footer'
  export default {
    name: 'app',
    components:{
      Header,
      Content,
      Footer
    }
  }
</script>

<style lang="stylus" scoped>
#app
  min-height 100%
  box-sizing border-box
  position relative
  padding-bottom 55px
  padding-top 51px
</style>