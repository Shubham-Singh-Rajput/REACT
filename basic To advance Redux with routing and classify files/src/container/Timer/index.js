import { useEffect } from "react"
import { connect } from "react-redux"

import { TIMER } from './../../redux/action/Timer';

const  Timers=(props)=>{
    const {dispatch}=props
    useEffect(()=>{
        let x=setInterval(()=>{
            let data=Date.now()
            dispatch(TIMER(data))
        },1000);

        return ()=>clearInterval(x)
        
    },[dispatch])
    return(
        <>
            {props.TIMECHANGE}
        </>
    )
}

const  mapstatetoProps=(state)=>{
    return {
        TIMECHANGE:state.TIMER
    }
}
export default connect(mapstatetoProps)(Timers)