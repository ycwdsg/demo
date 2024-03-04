<script setup lang="ts">
import { initGame, type gameObj } from './gameFunction'
import { onBeforeUnmount, onMounted, ref, type Ref } from "vue";
let gameState = ref<gameObj>({
    TIME:0,
    SCORE:0,
    WIN:false,
    WIDTHBLOCK:9,
    HEIGHTBLOCK:9,
    BOMBS:10
})
let startFlag = ref<boolean>(false)
const handleClickStart = () => {
    // 点击开始
    const { gameStates } = initGame()
    gameState.value = gameStates
    startFlag.value = true
}
const boxClick = (row:number, col:number, event:MouseEvent) => {
    if (!startFlag.value) {
        handleClickStart()
    }
    const target = event.target as HTMLDivElement // 让event.target断言为HTMLDivElement类型
    target.classList.add('clicked')
    // TODO：处理点击事件

}
onMounted(() => {
    if (document.getElementById('app') !== null) {
        // not null断言
        document.getElementById('app')!.style.display = 'block'
    }
})
onBeforeUnmount(() => {
    document.getElementById('app')!.style.display = 'grid'
})
</script>

<template>
    <div class="game-container">
        <div class="tab-nav">
            <div v-if="gameState">{{ gameState.TIME }}</div>
            <div>{{ gameState.WIN ? '√' : '×' }}</div>
            <div v-if="gameState">{{ gameState.BOMBS }}</div>
        </div>
        <div class="game-area">
            <div v-for="(row, rowIndex) in gameState?.HEIGHTBLOCK" :key="rowIndex" class="row-box">
                <div v-for="(col, colIndex) in gameState?.WIDTHBLOCK" :key="colIndex" class="box" @click="boxClick(row, col, $event)"></div>
            </div>
        </div>
    </div>
</template>
<style scoped>
.game-container{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
}
.tab-nav {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;
    padding: 4px;
    border-radius: 5px;
    background-color: #eee;
    border: 1px solid #333;
    font-size: 18px;
    color: rgb(154, 3, 28);
    font-weight: bolder !important;
    box-shadow: #999 inset 0px 0px 2px 2px;
}
.row-box{
    display: flex;
    justify-content: center;
}
.box{
    width: 20px;
    height: 20px;
    background: #eee;
    border: 1px solid #fff;
    box-shadow: #999 inset 0px 0px 2px 2px;
}
.clicked{
    box-shadow: #999 0px 0px 2px 2px;
}
</style>