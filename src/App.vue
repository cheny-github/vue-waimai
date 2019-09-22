<template>
  <div id="app">
    <Content></Content>
    <Footer></Footer>
  </div>
</template>

<script>
  import Content from './components/Content/Content'
  import Footer from './components/Footer/Footer'
  import { reqAutoLogin } from './api';
  export default {
    name: 'app',
    components:{
      Content,
      Footer
    },
   async mounted(){
      //  自动登录
      const token = localStorage.getItem('token_key') || '';
      const result = await reqAutoLogin(token);
      if (result.code ===0) {
        this.$store.dispatch('autoLogIn',result.data)
      }
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