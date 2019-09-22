import {Toast} from 'mint-ui';
import { reqAddress, reqCategories, reqShops, reqLoginSMS, reqLoginByPassword } from "../api";
import router from '../router';


export const RECEIVE_ADDRESS = 'receive_address';
export const RECIEVE_CATEGORIES = 'receive_categories';
export const RECEIVE_SHOPLIST = 'receive_shoplist';
export const REVEIVE_USER  ='receive_user';
export const REVEIVE_TOKEN = 'receive_token';
export const AUTOLOGIN = 'auto login';
export const LOGOUT = 'logout';
export default {
    async getAddress({commit,state},callback){
        const {latitude,longitude} = state;
        const result = await reqAddress(latitude,longitude);
        if (result.code ===0) {
            const address = result.data;
            commit(RECEIVE_ADDRESS,address);
            typeof callback ==="function" &&  callback();
        }
    },
    async getCategories({commit},callback){
        const result = await reqCategories()
        if (result.code ===0) {
            commit(RECIEVE_CATEGORIES,result.data);
            typeof callback ==="function" && callback();
        }
    },
    async getShopList({commit,state}){
        const {latitude,longitude} = state;
        const result = await reqShops({latitude,longitude} );
        if (result.code ===0) {
            commit(RECEIVE_SHOPLIST,result.data);

        }
    },
    async loginBySMS({commit},{phone,code}){
       const result =  await reqLoginSMS(phone,code)
       if (result.code ===0) {
            handleLogSuccess(result,commit);
       }else{
            Toast(`登录失败,${result.msg}`);
       }
    },   
    autoLogIn({commit},user){
         commit(AUTOLOGIN,user)
    },
    logOut({commit}){
        localStorage.removeItem('token_key')
        commit(LOGOUT)
    },

    async loginByPwd({commit},{username,password,captcha}){
        const result = await reqLoginByPassword(username,password,captcha)
        if (result.code ===0) {
            handleLogSuccess(result,commit);
        }else{
            Toast(`登录失败${result.msg}`)
        }
    }
}
/**
 * 登录成功后把token放入localStorage,然后commit user到state中
 * @param {*} result 
 * @param {*} commit 
 */
function handleLogSuccess(result,commit) {
    const user = result.data;
    const token = user.token;
    Reflect.deleteProperty(user,'token');
    commit(REVEIVE_USER,user);
    localStorage.setItem("token_key",token);
    router.back()
}