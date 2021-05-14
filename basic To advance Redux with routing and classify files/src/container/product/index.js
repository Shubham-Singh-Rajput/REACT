
import { COUNTER } from './../../redux/action/counter';
import { connect } from 'react-redux';
const Product=(props)=>{
    const decrease=()=>{
        props.dispatch(COUNTER.decrement())
    }
    return(
        <>
        {props.count}
        <button onClick={decrease} >BUY</button>
        </>
    )
}
const mapStatetoProp=({Counter})=>{
return {
    count:Counter
}
}
export default connect(mapStatetoProp)(Product)