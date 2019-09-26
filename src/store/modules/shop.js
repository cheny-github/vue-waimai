import { reqGoods, reqInfo, reqRatings } from "../../api";
import Vue from 'vue';

const RECEIVE_GOODS = 'receive_goods';
const RECEIVE_INFO ='receive_info';
const RECIEVE_RATINGS = 'receive_ratings';
const ADD_TO_CART = 'add_to_cart';
const REMOVE_FROM_CART = 'remove_from_cart';
const CLEAR_CART = 'clear_cart';
const state={
    goods:[],
    info:{},
    ratings:[],
    cart:[]
}
const actions={
    async getGoods({commit}){
        const result = await reqGoods();
        if (result.code ===0) {
            commit(RECEIVE_GOODS,result.data);
        }
    },
    async getInfo({commit}){
        const result = await reqInfo();
        if (result.code ===0) {
            commit(RECEIVE_INFO,result.data);
        }
    },
    async getRatings({commit}){
        const result  = await reqRatings();
        if (result.code ===0) {
            commit(RECIEVE_RATINGS,result.data);
        }
    },
    addToCart({commit},{food}){
        commit(ADD_TO_CART,food);
    },
    removeFromCart({commit},{food}){
        commit(REMOVE_FROM_CART,food);
    },
    clearCart({commit}){
        commit(CLEAR_CART);
    }
}
const mutations={
    [RECEIVE_GOODS](state,goods){
        // 如果购物车中有东西，那么就将购物车中的count绑定到food上
        if (state.cart.length>0) {
            state.cart.forEach((cartFood,cartFoodIndex)=>{
                goods.forEach(
                    ({foods})=>{
                        foods.forEach(food=>{
                            if (food.id ===cartFood.id) {
                                Vue.set(food,'count',cartFood.count);
                                state.cart[cartFoodIndex] = food;
                            }
                        })
                    }
                )
            })
        }
        state.goods = goods;
    },
    [RECEIVE_INFO](state,info){
        state.info = info;
    },
    [RECIEVE_RATINGS](state,ratings){
        state.ratings = ratings;
    },
    [ADD_TO_CART](state,food){
        const {cart} = state;
        // 从购物车中取出要修改数量的食物
        const cartFood= cart.find(cartFood=>cartFood.id==food.id)
        if(cartFood){
            food.count+=1;
        }else{
            Vue.set(food,'count',1);
            state.cart.push(food);
        }
    },
    /**
     * 从购物车中的这个food的数量-1
     */
    [REMOVE_FROM_CART](state,food){
        const {cart} = state;
         if (new Set([...cart]).has(food)) {
             let count = food.count-1;
             food.count = count;
             if(count===0){
                 const revomeIndex = cart.indexOf(food);
                 cart.splice(revomeIndex,1);
             }
         }
    },
    // 清空购物车
    [CLEAR_CART](state){
        const {cart} = state;
        cart.forEach(food => {
           food.count=undefined;
        });
        state.cart =[];
    }


}
const getters={
    totalCount:({cart})=>cart.reduce((pre,food)=> pre+food.count,0),
    totalPrice:({cart})=>cart.reduce((pre,food)=>pre+food.count*food.price,0)
}

// Vue.set()
export default{
    state,
    actions,
    mutations,
    getters
}