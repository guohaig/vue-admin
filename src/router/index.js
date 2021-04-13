import { createRouter, createWebHistory } from "vue-router";
// import Home from "../views/Home.vue";
import Film from "../views/Film.vue";
import Cinema from "../views/Cinema.vue";
import Center from "../views/Center.vue";
import Nowplaying from "../views/film/Nowplaying.vue";
import Comingsoon from "../views/film/Comingsoon.vue";
import Detail from "../views/film/Detail.vue";
//用懒加载，就不需要全局导入组件了
// import Login from "../views/Login.vue";



// const routes = [
//   {
//     path: "/",
//     name: "Home",
//     component: Home
//     // redirect: "Login"
//   },
//   {
//     path: "/about",
//     name: "About",
//     // route level code-splitting
//     // this generates a separate chunk (about.[hash].js) for this route
//     // which is lazy-loaded when the route is visited.
//     component: () =>
//       import(/* webpackChunkName: "about" */ "../views/About.vue")
//   }
//   // {
//   //   path: "/login",
//   //   name: "Login",
//   //   component: () =>
//   //     import("../views/login/index.vue")
//   // }
// ];
const routes = [
  {
    path: "/",
    // name: "Film",
    redirect: "/film"
  },
  {
    path: "/film",
    // name: "Film",
    component: Film,
    //嵌套路由
    children: [
      {
        path: "nowplaying",//简写
        component: Nowplaying
      },
      {
        path: "/film/comingsoon",
        component: Comingsoon
      },
      {
        path:"",
        redirect: "/film/Nowplaying"
      }
    ]
  },
  {
    path: "/cinema",
    // name: "Cinema",
    component: Cinema
  },
  {
    path: "/center",
    // name: "Center",
    component: Center
  },
  /*
  {
    path: '/login',
    component: Login
  },
  */
  {
   path: '/login',
   component: ()=> import(/* webpackChunkName: "kefu-group" */ '../views/Login.vue') 
  },
  {
    name: 'myDetail',
    path: "/detail/:myId",//动态路由Dynamic route satrt with a colon
    component: Detail
  },

 // query 方式
 /*
  {
    // name: 'myDetail',
    path: "/detail",
    component: Detail
  },
  */
  {
    path: "/:catchAll(.*)",
    redirect: "/film"
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  // mode: 'hash',
  routes
});
//全局路由守卫
/*
router.beforeEach((to, from, next) =>{
  let auth = ['/center','/order','/money','/card'];
  if(auth.includes(to.fullPath)){
    // console.log('验证token');
    //检查是否有Token，如果没有重定向到login页面中
    if(!localStorage.getItem('token')){
      next('/login');
    }else{
      next();
    }
  }else{
    next();
  }
})
*/
export default router;
