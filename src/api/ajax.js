import axios from 'axios';
import qs from 'qs';
import {Toast} from 'mint-ui';
import router from '../router';
const ajax = axios.create();

ajax.defaults.baseURL="/api"
ajax.interceptors.request.use((config)=>{
    if (config.headers.token) {
        config.headers['Authorization'] = config.headers.token;
        delete config.headers.token;
        
    }
    //post请求参数处理，转化为queryString格式的参数
    if (config.method.toUpperCase()==="POST" && config.data) {
        config.data= qs.stringify(config.data)
    }
    return config;
});

ajax.interceptors.response.use(
    response=>{
        return response.data
    },
    error=>{
        // 错误统一处理
        if (error.response) {
            // token验证失败，转到重新登录
            if (error.response.status === 401) {
                if (router.history.current.path === '/login/byphone') { //防止路由重复跳转
                    return new Promise(()=>{});
                }
                localStorage.removeItem("token_key");
                Toast(`${error.response.data.message}`);
                router.push('/login');
            }
        }else{
            Toast(error.message);
        }

        return new Promise(()=>{})
    }
)

export default ajax;