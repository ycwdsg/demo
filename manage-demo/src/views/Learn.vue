<template>
  <div class="learn">
    <h1>{{count}}</h1>
    <button @click="updateCount">count</button>
    <h2>姓名:{{user.name}}</h2>
    <h2>年龄:{{user.age}}</h2>
    <h2>媳妇:{{user.wife}}</h2>
    <button @click="updateUser">加1</button>
    <br>
    <input type="text" placeholder="请输入姓" v-model="user.name">
    <input type="text" placeholder="请输入名" v-model="user.wife.name">
    <input type="text" v-model="fullName1">
    <input type="text" v-model="fullName2">
  </div>
</template>
<script lang="ts">
import { reactive, ref } from '@vue/reactivity'
import { computed, defineComponent, watch } from '@vue/runtime-core'
export default defineComponent({
  name:'Learn',
  // setup是在beforeCreate之前调用，且只执行一次，这时还未创建组件，因此无法用this指定vue对象
  // setup不能是async，因为添加了async后返回值是promise对象
  setup(){
    // setup的参数：setup(props,context)
    // props：是一个对象，里面有父组件向子组件中传递的数据，包含props配置声明且传入了的所有属性的对象
    // context:是一个对象，有attrs对象，emit方法，slot对象
    // attrs：包含没有在props配置的中声明的属性的对象
    console.log(this);//undefined
    // vue3中的响应式数据需要通过引入ref来实现(只能监听到基础数据类型)
    const count = ref(0)
    function updateCount(){
      count.value++
    }
    // 把引用数据变成响应数据
    const user = reactive({
      name:'小明',
      age:18,
      wife:{
        name:'litteBitch',
        age:17,
        cars:['男1','男2']
      }
    })
    console.log(user);//返回的是一个user的proxy代理对象，被代理的就是reactive函数中传入的对象
    const updateUser = ()=>{
      // 需要更新代理对象的数据来实现数据的响应式
      user.wife.cars.push('男3')
    }

    //计算属性和监视方法（watch） 
    // const fullName1 = computed(()=>{//参数为回调时默认调用get方法
    //   return user.name+'&'+user.wife.name
    // })
    const fullName1 = computed({//想要用计算属性修改值可以定义set方法
      get(){
        return user.name+'&'+user.wife.name
      },
      set(val:string){
        user.name = val.split('&')[0]
        user.wife.name = val.split('&')[1]
      }
    })
    // 监视:监视指定属性
    const fullName2 = ref('')
    watch(user,({name,wife})=>{
      fullName2.value = name+'&'+wife.name
    },{immediate:true,deep:true})//immediate：即使数据不改变也会默认执行一次watch，deep：深度监视
    // 另一种监视函数watchEffect，默认实现了immediate：true，不用手动配置
    // watch可以监视多个数据，[data1，data2]，如果监视的数据是非响应式的，需要用[()=>data1，()=>data2]的写法

    // 生命周期：vue2中的在vue3中都能用，但是beforeDestroy和destroyed改成了beforeUnmounted和unmounted
    // setup中可以使用生命周期组合api，onBeforeMount、onMounted、onBeforeUpdate、onUpdated、onBeforeUnmount、onUnmounted

    return {
      // setup返回值是一个对象，对象的属性和方法都可以在模板中直接调用
      // setup返回的对象会与data返回的对象合并成为组件对象（尽量不要混合用data和setup）
      count,
      updateCount,
      user,
      updateUser,
      fullName1,
      fullName2
    }
  }
})
</script>