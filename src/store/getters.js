import chunk from 'lodash/chunk';

export default {
    categoriesArr(state){
        // [[[1,2,3,4],[4,5,6,7]] ,[[...],[...]] , ]
        return chunk(state.categories,8).map((item)=>chunk(item,4))
    },
    userId(state){
        return state.user._id;
    }
}