import { extend } from 'vee-validate';
import { required,email} from 'vee-validate/dist/rules';

// 必选字段
extend('required', {
  ...required,
  message: '必须输入{_field_}'
});

// 手机号
extend('phone', {
  validate: (value) => {
    if (!value.startsWith('1')) {
      return '手机号必须以1开头';
    }
    // 测试通过
    return /^1[3456789]\d{9}$/.test(value);
  },
  message(/**...args */){
    /**
      console.log(args) 
      参数
      0: "{field}"
      1: {max: undefined, _field_: "{field}", _value_: "1321233333", _rule_: "phone"}
     * 
     */
    return '手机号不正确'
  }
});

// 邮箱
extend('email',{
  ...email, //email 是一个对象 包含 params和validate两个字段
  message:'{_field_}不是一个正确的邮箱'
})
// 指定了maxlenth后会报bug，添加max规则就好了
extend('max', {
  validate:(value,{max})=>{
    const length = value && value.length;
    return length<=max
  },
  params:['max'],
  message:'输入长度不能超过{max}'
});
