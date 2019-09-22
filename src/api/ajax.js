import axios from 'axios';
import qs from 'qs';
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
        alert(error)
        return new Promise(()=>{})
    }
)

export default ajax;