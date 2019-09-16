
<template>
    <div class="list-wrap">
        <p>这是商品列表页<span>{{$route.query.goodsId}}</span></p>
        <router-link to='/goods/car'>汽车</router-link>
        <router-link to='/goods/house'>商品房</router-link>
        <div>
            <router-view></router-view>
        </div>
        <button @click="jump">个人中心</button>
        
    </div>
</template>

<script>
export default {
    data (){
        return {

        }
    },
    methods: {
        //编程式路由
        jump(){
            this.$router.push({path: '/user?userId=2345'});
        }
    }
}
</script>
