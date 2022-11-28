import * as VueRouter from 'vue-router'
import Index from '../components/index.vue'
import Login from '../login.vue'
const routes = [
    {
        path:'/',
        component:Login
    },
    {
        path:'/index',
        component:Index
    },
    {
        path:'/:pathMatch(.*)*',
        component:()=>import('../components/notFount.vue')
    }
]
export const router =VueRouter.createRouter({
    history:VueRouter.createWebHistory(),
    routes
})
router.beforeEach(async(to,from)=>{
    console.log(from,to);
    
})