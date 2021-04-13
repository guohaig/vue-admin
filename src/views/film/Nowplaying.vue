<template>
    <div>
        <ul>
            <li v-for="data in datalist" :key="data.filmId" @click="handleClick(data.filmId)">
                <img :src="data.poster">
                {{ data.name }}
            </li>
        </ul>
    </div>
</template>
<script>
import axios from 'axios';
export default{
    data(){
        return{
            datalist:[]
        }
    },
    mounted(){
        axios({
            url: 'https://m.maizuo.com/gateway?cityId=510100&pageNum=1&pageSize=10&type=1&k=263451',
            headers: {
            'X-Client-Info' : '{"a":"3000","ch":"1002","v":"5.0.4","e":"16182920404430778456866817","bc":"510100"}',
            'X-Host': 'mall.film-ticket.film.list'
            },
            method: 'GET'
        }).then(res=>{
            console.log(res.data);
            this.datalist = res.data.data.films;
        });
    },
    methods: {
        handleClick(id){
            //编程式导航
            console.log(id);
            // location.href("#/center");
            // 1- 路径
            // this.$router.push('/detail/${id}');
            // 2- 路由名字
            this.$router.push({
                name: 'myDetail',
                params:{
                    myId: id
                }
            });
            // 3- query 方式中转
            // this.$router.push("/detail?${id}");
        }
    }
}
</script>
<style scoped lang="scss">
    li{
        overflow: hidden;
        padding: 10px;
        img{
            float: left;
            width: 100px;
        }
    }
</style>