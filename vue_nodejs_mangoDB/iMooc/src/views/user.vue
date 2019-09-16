
<template>
    <div class="user-wrap">
        <p>user {{$route.query.userId}}</p>
        <div class="btn">
            <button @click="jump">商品列表</button>
        </div>
    </div>
</template>

<script>
export default {
    data (){
        return {

        }
    },
    methods: {
        jump(){
            this.$router.push('/goods?goodsId=999');
        }
    }
}
</script>
