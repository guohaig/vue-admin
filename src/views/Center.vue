<template>
  <div>
    我的
  </div>
</template>
<script>
export default{
    //局部路由 组件内的路由拦截
    beforeRouteEach(to, from, next){
    //检查是否有Token，如果没有重定向到login页面中
        if(!localStorage.getItem('token')){
        next('/login');
        }else{
        next();
        }
    },
    //mounted 已经加载完了
    mounted() {
        //检查是否有Token，如果没有重定向到login页面中
        // if(!localStorage.getItem('token')){
        //     this.$router.push({
        //         path: '/login'
        //     });
        // }
    }
}
</script>

