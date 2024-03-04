import {reactive, ref, type Ref} from 'vue'
export declare type gameObj = {
    SCORE: number;
    TIME: Ref<number> | number;
    BOMBS: number;
    WIN: boolean | undefined;
    WIDTHBLOCK: number;
    HEIGHTBLOCK: number;
}
let timeFlag:NodeJS.Timeout;
const gameStates = reactive<gameObj>({
    SCORE: 0,
    TIME: ref(0),
    BOMBS: 0,
    WIN: undefined,
    WIDTHBLOCK: 0,
    HEIGHTBLOCK: 0
})
enum DifficultyModels{
    EASY = 'EASY',
    NORMAL = 'NORMAL',
    HARD = 'HARD'
}
export const initGame = () => {
    // 初始化游戏
    timeFlag = setInterval(() => {
      gameStates.TIME++
    }, 1000);
    setDifficulty(DifficultyModels.EASY)
    return { gameStates }
}
export const setDifficulty = (difficulty:DifficultyModels) => {    
    switch (difficulty) {
        case 'EASY':
            gameStates.WIDTHBLOCK = 9
            gameStates.HEIGHTBLOCK = 9
            gameStates.BOMBS = 10
            break;
        case 'NORMAL':
            gameStates.WIDTHBLOCK = 16
            gameStates.HEIGHTBLOCK = 16
            gameStates.BOMBS = 40
            break;
        case 'HARD':
            gameStates.WIDTHBLOCK = 16
            gameStates.HEIGHTBLOCK = 30
            gameStates.BOMBS = 99
            break;
        default:
            break;
    }
}
export const resetGame = () => {
    // 重置游戏
    clearInterval(timeFlag)
    initGame()
}

export const gameOver = () => {
    // 游戏结束
    gameStates.WIN = false
    clearInterval(timeFlag)
}