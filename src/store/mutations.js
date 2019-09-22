import {
    RECEIVE_ADDRESS,RECIEVE_CATEGORIES,RECEIVE_SHOPLIST ,
    REVEIVE_USER,
    AUTOLOGIN,LOGOUT,
} from './actions';

export default {
    [RECEIVE_ADDRESS](state,address){
        state.address = address;
    },
    [RECIEVE_CATEGORIES](state,categories){
        state.categories = categories;
    },
    [RECEIVE_SHOPLIST](state,shoplist){
        state.shops = shoplist;
    },
    [REVEIVE_USER](state,user){
        state.user=user;
    },
    [AUTOLOGIN](state,user){
        state.user = user;
    },
    [LOGOUT](state){
        state.user ={};
    }
}

