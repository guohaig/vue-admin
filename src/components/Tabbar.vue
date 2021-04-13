<template>
<!--声明式导航-->
  <nav>
    <ul>
      <!-- <li><a href="#/film">电影</a></li> -->
      <li><router-link to="/film" active-class="_selected">
      <i class="iconfont icon-mapjiantou"></i>
      <span>电影</span>
      </router-link></li>
      <li><router-link to="/cinema" tag="li" active-class="_selected">影院</router-link></li>
      <li><router-link to="/center" tag="li" active-class="_selected">我的</router-link></li>
    </ul>
  </nav>
</template>
<style lang="scss" scoped>
nav{
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  // height: 50px;
  line-height: 50px;
  text-align: center;
  background: white;
}
ul {
  display: flex;
}
ul a {
    text-decoration: none;
    
}
ul a._selected{
    color: red;
}
li {
  flex: 1;
  list-style-type: none;
}
</style>
