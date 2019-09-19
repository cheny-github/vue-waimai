import Vue from 'vue';
import Router from 'vue-router';
import Home from '../pages/Home/Home.vue';
import Order from '../pages/Order/Order.vue';
import Profile from '../pages/Profile/Profile.vue';
import Search from '../pages/Search/Search.vue';
import Restaurant from '../pages/Restaurant/Restaurant.vue';
Vue.use(Router)

const router =new Router(
    {

        mode:'history',




        routes: [
            {
                path:'/',
                redirect:'/home',
            },

            {
               path:'/home',
               component:Home,
               meta:{
                    activeNumber:0
                }
            },

            {
                path:'/search',
                component:Search,
                meta:{
                 activeNumber:1
                }
             },

            {
               path:'/order',
               component:Order,
               meta:{
                    activeNumber:2
                }
            },

            {
               path:'/profile',
               component:Profile,
               meta:{
                    activeNumber:3
                }
            },

            {
                path:'/restaurant',
                component:Restaurant
            }
        ]

    }
)


export default router