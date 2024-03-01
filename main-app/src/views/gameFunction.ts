import {ref} from 'vue'
type gameObj = {
    SCORE:number;
    TIME: number;
    BOMBS: number;
    WIN: boolean | undefined;
}
let timeFlag
export function initGame() {
    const gameStates:gameObj = {
        SCORE: 0,
        TIME: 0,
        BOMBS: 0,
        WIN: undefined
    }
    timeFlag = setInterval(() => {
      gameStates.TIME++  
      console.log(gameStates.TIME);
    }, 1000);
    return ref(gameStates)
}