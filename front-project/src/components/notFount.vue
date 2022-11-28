<script setup lang="ts">
const router = useRouter()//声明必须写在最外层，写在函数内创建实例会为undefined
const back = () =>{
    router?.back()
}
</script>
<template>
    <div>
        <p>没有找到网页，请检查路径是否正确或反馈管理员</p>
        <a-button type="primary" @click="back">
            点此返回上一级
        </a-button>
    </div>
</template>

<style scoped>
div{
    text-align: center;
    position: relative;
    background: url('../assets/imags/404.gif') no-repeat;
    height: 100vh;
    padding-top: calc(50vh - 30px);
    background-size: cover;
}
p{
    text-align: center;
    color: white;
}
</style>