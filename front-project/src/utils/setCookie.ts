// 配置Cookie
export const setCookie=(expires:number,userInfo:Map<string,string>) => {
    for(let key of userInfo.entries()){        
        document.cookie = key[0] + '=' + key[1] + `;expires=${expires}`
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