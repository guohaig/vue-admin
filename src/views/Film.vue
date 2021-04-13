<template>
  <div>
    <div style="height:300px; background:yellow;">大轮播</div>
  <film-header></film-header>
  <!-- /film/nowplaying Nowplaying
        /film/comingsoon Comeingsoon -->
    <router-view></router-view>
  </div>
</template>
<script>
import filmHeader from './film/FilmHeader';
export default {
  components:{
    filmHeader
  }
};
</script>

