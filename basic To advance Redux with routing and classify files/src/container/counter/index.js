
import { COUNTER } from './../../redux/action/counter';
import { connect } from 'react-redux';
const counter=(props)=>{
    const increase=()=>{
        props.dispatch(COUNTER.increment())
    }
    const decrease=()=>{
        props.dispatch(COUNTER.decrement())
    }
    return(
        <>
        {props.count}
        <button onClick={increase} >INCREASE</button><br></br>
        <button onClick={decrease} >DECREASE</button>
        </>
    )
}
const mapStatetoProp=({Counter})=>{
return {
    count:Counter
}
}
export default connect(mapStatetoProp)(counter)