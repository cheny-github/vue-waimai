import Vue from 'vue';
import Router from 'vue-router';
import Home from '../pages/Home/Home.vue';
import MyOrder from '../pages/MyOrder/MyOrder.vue';
import Profile from '../pages/Profile/Profile.vue';
import Search from '../pages/Search/Search.vue';
import Login from '../pages/Login/Login.vue';
import ByPhone from '../pages/Login/ByPhone/ByPhone.vue';
import ByPwd from '../pages/Login/ByPwd/ByPwd.vue';
import Shop from '../pages/Shop/Shop.vue';
import Foods from '../pages/Shop/Foods.vue';
import Detail from '../pages/Shop/Detail.vue';
import Rating from '../pages/Shop/Rating.vue';
import {} from 'mint-ui';
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
               path:'/myorder',
               component:MyOrder,
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
                path:'/shop',
                component:Shop,
                children:[
                    {
                        path:'',
                        redirect:{
                            name:'foods'
                        }
                    },
                    {
                        path:'foods',
                        component:Foods,
                        name:'foods',
                        meta:{
                            activeNumber:0,
                        }
                    },
                    {
                        path:'rating',
                        name:'rating',
                        component:Rating,
                        meta:{
                            activeNumber:1,
                        }
                    },
                    {
                        path:'detail',
                        name:'detail',
                        component:Detail,
                        meta:{
                            activeNumber:2,
                        }
                    }
                ],
            },
            {
                path:'/login',
                component:Login,
                children:[
                    {
                        path:'/',
                        redirect:'/login/byphone'
                    },
                    {
                        path:'byphone',
                        component:ByPhone
                    },
                    {
                        path:'bypassword',
                        component:ByPwd
                    }
                ]
            }
        ]

    }
)


export default router