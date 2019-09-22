<template>
    <ValidationObserver class="input-groups" v-slot:="{valid}">

      <ValidationProvider
        rules="required" 
        v-slot="{ errors }"
        class="validator"
        name="用户名"
      >
          <input
          class="form-control txtbox"
          v-model="username"
          placeholder="手机号/邮箱/用户名"
          />
          <span     
            style="color: red;"
            class="msg-err">{{ errors[0] }}
          </span>
      </ValidationProvider>

    
      <ValidationProvider
        rules="required" 
        v-slot="{ errors }"
        class="validator"
        name="密码"
        slim
      >
        <input 
        v-model="password" 
        class="form-control txtbox"
        placeholder="密码"
        />
        <span     
          style="color: red;"
          class="msg-err">{{ errors[0] }}
        </span>
      </ValidationProvider>

      <ValidationProvider
        rules="required" 
        v-slot="{ errors }"
        class="validator"
        name="验证码"
        slim
      >
        <div class="captcha">
          <input 
          v-model="captcha" 
          name="captcha"
          class="form-control txtbox"
          placeholder="验证码"
          maxlength="4"
          /> 
          <img class="yanzhengma" @click="getCatpcha" ref="img" src="http://localhost:4000/captcha" alt="验证码">
        </div>
        <span     
          style="color: red;"
          class="msg-err">{{ errors[0] }}
        </span>
      </ValidationProvider>

      <button class="form-control btn-ok"  @click="logIn(!!valid)">登录</button>
      
      <span class="about">关于我们</span>
    </ValidationObserver>
</template>

<script>
import {ValidationObserver} from 'vee-validate';
import {reqLoginByPassword} from '../../../api';
export default {
  data() {
    return {
      username:'',
      password:'',
      captcha:'',
    }
  },
  methods:{
    async logIn(valid){
      if (valid) {
        const {username,password,captcha} = this;
            this.$store.dispatch('loginByPwd',{username,password,captcha})
      }
    },
    async getCatpcha(){
      this.$refs.img.src = "http://localhost:4000/captcha?"+Date.now();
    }
  },
  components:{
    ValidationObserver
  },
}
</script>

<style lang="stylus" scoped>
.input-groups
  display flex
  flex-direction column
  align-items center
  .validator
    display flex
    flex-flow column
  .form-control
    margin 8px 0
    height 55px
    width 342px
    border-radius 4px
    line-height 55px
    padding-left 4px
  .txtbox
    border 1px solid #cccccc
    font-size 20px
    color #666 
    outline none 
    &::placeholder
      color #b2b2b2
  .msg-err
    align-self flex-start
    margin 8px 0
  .hint
    width 342px
    margin-top 8px
    margin-bottom 37px 
    color #aaa
    span
      color #48bf9b
  .btn-ok
    margin-top 37px - 8px
    text-align center
    color #ffffff
    background-color #4cd96f
    font-size 16px
    border none
    outline none
    &:hover
      opacity .7
  .about
    margin-top 22px - 8px
    font-size 13px
    color #b2b2b2
  .captcha
    display flex
    flex-flow wrap
    position relative
    justify-content center
    .yanzhengma
      position absolute
      right  0
      bottom 0
      top 0
      margin auto 0
      width 171px
      height 55px
</style>