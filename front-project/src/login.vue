<script setup lang="ts">
import { UserOutlined } from '@ant-design/icons-vue';
import { FormInstance } from 'ant-design-vue';
import type { Rule } from 'ant-design-vue/es/form';
import { userStore } from './store/user'
import { setCookie,getCookie,forgetAccount } from './utils/setCookie'
import { encrypt,decrypt } from './utils/auth'
import {registerAccount,login} from './api/login'
import {setToken} from './utils/token'

defineProps<{ msg: string }>()
interface FormState {
  username: string;
  password: string;
  remember?: boolean;
}
interface drawerState extends FormState{
  conPassword: string
}
let validatePass = async (_rule:Rule,value:String)=>{
  let reg = /^.*(?=.*[a-z])(?=.*\d).*$/
  if (value==='') {
    return Promise.reject('请输入密码！')
  }else{
    if(value.length<6){
      return Promise.reject('密码长度不低于六位！')
    }else if(!reg.test(value as string)){
      return Promise.reject('密码需要包含数字和字母！')
    }
    return Promise.resolve()
  }
}

let validatePassAgain = async (_rule:Rule,value:string)=>{
  if(value===''){
    return Promise.reject('请再次确认密码！')
  }else{
    if (value!==drawerState.password) {
      return Promise.reject('两次密码输入不一致！')
    }
    return Promise.resolve()
  }
}
let dialogVisible =ref<Boolean>(false)
const formState = reactive<FormState>({username:'',password:'',remember:false})
const drawerState = reactive<drawerState>({username:'',password:'',conPassword:''})
// 登录表单
const formRef = ref<FormInstance>()
// 注册表单
const drawerFormRef = ref<FormInstance>()
const rules: Record<string, Rule[]> = {//Record:声明对象的key和value值的类型
  username:[{ required: true, message:'请输入用户名', trigger:'blur'}],
  password:[{ required: true, validator: validatePass, trigger: 'blur' }],
  conPassword:[{required:true,validator:validatePassAgain,trigger: 'blur'}]
}
// 登录成功
 const onFinish=async(values:any)=>{
  values.remember? rememberAccount(values): forgetAccount(values)
  values.password = encrypt(values.password)
  const res:any = await login(values)
  if (res.status===200) {
    setToken(res.token)
    const store = userStore()
    store.setUser(values)
  }  
}
const rememberAccount=({username,password}:Record<string,string>)=>{
  const date = new Date()
  const expires = date.setTime(date.getTime() + 7*24*60*60*1000)
  const userInfo:Map<string,string> = new Map([['username',username],['password',encrypt(password) as string]])
  setCookie(userInfo,expires)
}

onMounted(()=>{
  parseAccount()
})

const parseAccount=()=>{
  const res = getCookie('username','password')  
  Object.keys(res).length==0? '' : (formState.username=res?.username ,formState.password = decrypt(res?.password) as string,formState.remember = true)
}

const register = () =>{
  dialogVisible.value = true
}

const onClose = () =>{
  dialogVisible.value = false
}

// 注册
const submit = async() =>{
  drawerFormRef.value?.validateFields().then(res=>{
    let userInfo = JSON.parse(JSON.stringify(res))
    userInfo.password = encrypt(userInfo.password)
    registerAccount(userInfo).then(val=>{      
      if (val.status===200) {
        drawerFormRef.value?.resetFields()
        dialogVisible.value = false
      }
    })
  }).catch(err=>{
    console.log(err)
  })
}
</script>

<template>
  <div class="main">
    <div class="loginBox">
      <div class="backBox">
        <p class="tipMessage">{{ msg }}</p>
        <div class="icon">
          火
        </div>
      </div>
      <div class="loginForm">
        <div class="formContent">
          <a-drawer
              title="用户注册"
              placement="right"
              :closable="false"
              :visible="dialogVisible"
              :get-container="false"
              :style="{ position: 'absolute' }"
              @close="onClose"
            >
            <template #extra>
              <a-button style="margin-right: 8px" @click="onClose">取消</a-button>
              <a-button type="primary" @click="submit">注册</a-button>
            </template>
              <a-form 
                ref="drawerFormRef"
                :model="drawerState"
                class="form"
                :label-col="{ span: 6 }"
                :rules="rules"
              >
                <a-form-item
                  label="用户名"
                  name="username"
                >
                  <a-input v-model:value="drawerState.username" placeholder="请输入用户名" size="large"></a-input>
                </a-form-item>
                <a-form-item
                  label="密码"
                  name="password"
                >
                  <a-input-password has-feedback v-model:value="drawerState.password" placeholder="请输入密码" size="large"/>
                </a-form-item>
                <a-form-item
                  label="确认密码"
                  name="conPassword"
                >
                  <a-input-password has-feedback v-model:value="drawerState.conPassword" placeholder="请输再次入密码" size="large"/>
                </a-form-item>
              </a-form>
            </a-drawer>
          <div class="formBox">
            <a-form
              ref="formRef"
              :model="formState"
              class="form"
              :rules="rules"
              :label-col="{ span: 8 }"
              :wrapper-col="{ span: 16 }"
              autocomplete="off"
              @finish="onFinish"
            >
              <a-form-item
                label="用户名"
                name="username"
              >
                <a-input v-model:value="formState.username" placeholder="请输入用户名" size="large">
                  <template #prefix>
                    <user-outlined type="user" />
                  </template>
                </a-input>
              </a-form-item>

              <a-form-item
                label="密码"
                name="password"
              >
                <a-input-password has-feedback v-model:value="formState.password" placeholder="请输入密码" size="large"/>
              </a-form-item>

              <a-form-item name="remember" :wrapper-col="{ offset: 8, span: 16 }">
                <a-row justify="space-between">
                  <a-checkbox v-model:checked="formState.remember">记住我</a-checkbox>
                  <a-button type="link" @click="register">没有账号？点此注册</a-button>
                </a-row>
              </a-form-item>

              <a-form-item :wrapper-col="{ offset: 8, span: 16 }">
                <a-button type="primary" html-type="submit" block size="large">提交</a-button>
              </a-form-item>
            </a-form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.main{
  background: #5B86E5;
  height: 100%;
  .loginBox{
    position: absolute;
    background: white;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
    height: 80%;
    width: 90%;
    display: flex;
    overflow: hidden;
    .backBox{
      background: rgba(91, 134, 229, 0.51);
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      align-items: center;
      width: 40%;
      .tipMessage{
        color: white;
        font-size: 40px;
      }
      .icon{
        color: #ABC1F2;
        background: #5B86E5;
        height: 200px;
        width: 200px;
        line-height: 200px;
        text-align: center;
        font-size: 100px;
        border-radius:0 80px 80px 0;
        box-shadow: #341894 0px 8px 18px 1px;
        margin-bottom: 10vh;
      }
    }
    .loginForm{
      background: rgba(91, 134, 229, 0.51);
      height: 100%;
      width:60%;
      position: relative;
      .formContent{
        border-radius: 50px 0px 0px 50px;
        background: white;
        height: 100%;
      }
      .formBox{
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%,-50%);
        width: 60%;
        :deep(.ant-input-affix-wrapper){//vue3新写法
          border-style: none none solid;
        }
      }
    }
  }
}
</style>
