<template>
  <div>
    details
  </div>
</template>
<script>
export default {
  mounted() {
    //     // this.$route当前匹配的路由对象信息
    console.log("利用获取的id，ajax请求后端接口 " + this.$route.params.myId);
    //     // console.log('利用获取的id，ajax请求后端接口 '+ this.$route);
  }
};
</script>
