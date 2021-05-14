
import { connect } from 'react-redux';
import { USERS } from '../../redux/action/user';
import { useEffect } from 'react';

const Userdetail=(props)=>{
    const{dispatch}=props
    const {id}=props.match.params

    const FetchUser=(id,dispatch)=>{
        fetch(`http://jsonplaceholder.typicode.com/posts/${id}`).then(d=>d.json()).then((d)=>{
            dispatch(USERS.SINGLEUSER(d))
        })
    }
    useEffect(()=>{
        FetchUser(id,dispatch)
    },[id,dispatch])
    return(
        <>
            {props.SINGLEUSER.title}<br></br> {props.SINGLEUSER.id}<br></br> {props.SINGLEUSER.body}
        </>
    )
}
const mapSTate=({SINGLEUSER})=>({SINGLEUSER})
export default connect(mapSTate)(Userdetail)