<template>
  <div>
    <ul>
      <li>
        <router-link to="/film/nowplaying" active-class="active"
          >正在热映</router-link
        >
      </li>
      <li>
        <router-link to="/film/comingsoon" active-class="active"
          >即将上映</router-link
        >
      </li>
    </ul>
  </div>
</template>
<style lang="scss" scoped>
ul {
  display: flex;
  height: 40px;
  line-height: 40px;
  text-align: center;
}
ul a {
  text-decoration: none;
}
ul .active {
  color: rgb(11, 78, 69);
  border-bottom: red solid 2px;
}
li {
  flex: 1;
  list-style-type: none;
}
</style>
