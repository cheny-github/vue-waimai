<template>
    <ValidationObserver v-slot="{valid}" class="input-groups">
        <ValidationProvider
                rules="phone"
                v-slot="{ errors }"
                class="validator"
                name="手机号"
        >
            <input
                    class="form-control txtbox"
                    v-model="phone"
                    placeholder="手机号"
                    maxlength="11"
            />
            <span
                    style="color: red;"
                    class="msg-err">{{ errors[0] }}</span>
        </ValidationProvider>

        <ValidationProvider
                rules="required"
                v-slot="{ errors }"
                class="validator"
                name="验证码"
        >
            <div class="sms">
                <input
                        v-model="code"
                        class="form-control txtbox"
                        maxlength="6"
                        placeholder="验证码"
                />
                <span
                        class="getyanzhengma"
                        @click="getYanzhengma"
                >
                    {{timeout > 0 ?`已发送验证码(${timeout})`:'获取验证码'}}
                </span>
            </div>
            <span
                    style="color: red;"
                    class="msg-err"
            >
          {{ errors[0] }}
        </span>
        </ValidationProvider>
        <div class="hint">
            温馨提示：未注册硅谷外卖账号的手机号，登录时将自动注册，且代已同意
            <span>《用户服务协议》</span>
        </div>
        <button class="form-control btn-ok" @click="Login(!!valid)">登录</button>
        <span class="about">关于我们</span>
    </ValidationObserver>
</template>

<script>
    import {ValidationObserver} from 'vee-validate';
    import {reqSendCode} from '../../../api/index';
    // import { Toast } from 'mint-ui';
    export default {

        name: 'ByPhone',
        props:['fromLogin'],
        components: {
            ValidationObserver
        },
        data() {
            return {
                phone: '',
                code: '',
                timeout: '', //两次发送验证码间隔
            }
        },
        methods: {
            async Login(valid) {
                if (valid) {
                    const {phone, code} = this;
                    this.$store.dispatch('loginBySMS',{phone,code});
                }
            },
            getYanzhengma() {
                if (this.timeout > 0) {
                    return;
                }
                this.timeout = 10;
                // 发送验证码
                (async () => {
                    const {phone} = this
                    const result = await reqSendCode(phone);
                    if (result.code !== 0) {
                        alert(result.msg)
                    }
                })();

                const timeid = setInterval(() => {
                    this.timeout--;
                    if (this.timeout <= 0) {
                        clearInterval(timeid);
                    }
                }, 1000);
            }
        },
        
    }
</script>

<style lang="stylus" scoped>
    .input-groups
        display flex
        flex-direction column
        align-items center

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
            color #b2b2b2
            outline none

            &::placeholder
                color #b2b2b2

        .validator
            display flex
            flex-flow column

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

        .sms
            display flex
            flex-flow column
            align-items center
            position relative

            .msg-err
                align-self flex-start

            .getyanzhengma
                position absolute
                right 17px
                top 50%
                color #b2b2b2
                transform translateY(-50%)
</style>