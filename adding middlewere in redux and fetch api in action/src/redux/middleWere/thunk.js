export const Thunk=store=>next=>action=>{
    if(typeof action==="function"){
        action(store.dispatch)
        return
    }
    else{
            next(action)
            return
    }
}