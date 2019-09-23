import { reqGoods, reqInfo, reqRatings } from "../../api";

const RECEIVE_GOODS = 'receive_goods';
const RECEIVE_INFO ='receive_info';
const RECIEVE_RATINGS = 'receive_ratings';

const state={
    goods:[],
    info:{},
    ratings:[]
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
    }
}
const mutations={
    [RECEIVE_GOODS](state,goods){
        state.goods = goods;
    },
    [RECEIVE_INFO](state,info){
        state.info = info;
    },
    [RECIEVE_RATINGS](state,ratings){
        state.ratings = ratings;
    },

}
const getters={

}

export default{
    state,
    actions,
    mutations,
    getters
}