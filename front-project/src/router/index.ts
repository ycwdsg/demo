import * as VueRouter from 'vue-router';
import Index from 'coms/index.vue';
import Login from 'coms/login.vue';
import { getToken } from 'utils/token';
import { message } from 'ant-design-vue';
import 'ant-design-vue/es/message/style/css';

// 基础全局路由
const routes = [
  {
    path: '/',
    component: Login,
    name: 'Login'
  },
  {
    path: '/index',
    component: Index,
    name: 'Index',
    meta: {
      hasSider: true,
      menu: [
        { label: '对象引擎', path: '/objectEngine' },
        {
          label: '页面绘制引擎',
          path: '/pageEngine',
          children: [{ label: '样式引擎', path: '/styleEngine' }]
        }
      ]
    }
  },
  {
    path: '/:pathMatch(.*)*',
    component: async () => await import('../components/notFount.vue')
  }
];
export const router = VueRouter.createRouter({
  history: VueRouter.createWebHistory(),
  routes
});
// 是否登录的路由守卫
router.beforeEach((to, from, next) => {
  if (to.name !== 'Login' && !getToken()) {
    message.error('请登录！');
    next({ name: 'Login' });
  } else if (to.name === 'Login' && getToken()) {
    next({ name: 'Index' });
  } else {
    next();
  }
});
