// 配置Cookie
// 不传expires默认删除cookie
export const setCookie=(userInfo:Map<string,string|number>,expires?:number) => {
    let time:string|number = expires ?? 0  //默认过期时间60分钟
    time = new Date(time).toUTCString()
    for(let key of userInfo.entries()){        
        document.cookie = key[0] + '=' + key[1] + `;expires=${time}`
    }
}

export const getCookie=(...args:Array<string>)=>{
    const res = splitCookie(args)
    const o:Record<string,string> = {}    
    args.forEach((item:any)=>{                        
        res.hasOwnProperty(item) ? o[item] = res[item] : ''
    })    
    
    return o
}

const splitCookie=(v:Array<string>):string=>{
    let s = document.cookie.split(';')    
    let o:any = {}
    s.forEach(i=> {
        v.forEach(t=>{            
            i.indexOf(t)>-1?o[t]=(i.slice(i.indexOf(t)+1+t.length)).trim():''
        })
    })        
    
    return o
}

export const forgetAccount = (val:Record<string,string>)=>{
    const token:Map<string,number> = new Map([])
    for(let i in val){
        token.set(i,0)
    }
	//将date设置为过去的时间
    setCookie(token)
}