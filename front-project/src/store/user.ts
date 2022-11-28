import { defineStore } from "pinia";
import type { user } from "./interface";
// 抛出store对象
export const userStore =  defineStore('user',{
    state:()=>{
        return <user>{
            username:'',
            jurisdiction:'',
            occupation:'',
            token:''
        }
    },
    getters:{
        getName:(state)=>{
            return state.username
        },
        getInfo:(state)=>{
            return state.userInfo
        },
        getToken:(state)=>{
            return state.token
        },
        getOccupation:(state)=>{
            return state.occupation
        }
    },
    actions:{
        setName(name:string){
            this.username = name
        },
        saveToken(token:string){
            this.token = token
        },
        // setUser(user:user){
        //     type info = Partial<user>
        //     let key : keyof info
        //     for(key in user){
        //         this[key] = user[key]
        //     }
        // }
    }
})