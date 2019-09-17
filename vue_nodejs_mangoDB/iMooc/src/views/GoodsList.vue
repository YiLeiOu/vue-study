
<template>
    <div class="list-wrap">
        <p>这是商品列表页<span>{{$route.query.goodsId}}</span></p>
        <router-link to='/goods/car'>汽车</router-link>
        <router-link to='/goods/house'>商品房</router-link>
        <div>
            <router-view></router-view>
        </div>
        <router-link :to="{name: 'user',params:{userId:'888'}}">user</router-link>
        
    </div>
</template>

<script>
export default {
    data (){
        return {

        }
    }
}
</script>
