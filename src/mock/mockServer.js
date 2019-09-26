import Mock from 'mockjs';
import {goods,ratings,info} from './data.json';
let id=0;
goods.forEach(good => 
    {
        good.foods.forEach(food=> food.id=id++)
    })
Mock.mock(/api\/goods/,{code:0,data:goods})
Mock.mock(/api\/ratings/,{code:0,data:ratings})
Mock.mock(/api\/info/,{code:0,data:info})

// var data = Mock.mock({
//     // 属性 list 的值是一个数组，其中含有 1 到 10 个元素
//     'list|1-10': [{
//         // 属性 id 是一个自增数，起始值为 1，每次增 1
//         'id|+1': 1
//     }]
// })
// 输出结果
