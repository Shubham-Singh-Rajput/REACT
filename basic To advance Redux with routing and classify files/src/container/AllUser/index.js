import { connect } from 'react-redux';
import { USERS } from '../../redux/action/user';
import { useEffect } from 'react';
import { PATH } from './../../config/webPath';
const ALLUSERS=(props)=>{
    const {dispatch}=props
    const fetchUser=(dispatch)=>{
            fetch('http://jsonplaceholder.typicode.com/posts').then(d=>d.json()).then(d=>{
                dispatch(USERS.AllUSER(d))
            })
    }
    useEffect(()=>{
        fetchUser(dispatch)
        },[dispatch])
    
    const viewUSER=(id)=>{
        props.history.push(`${PATH.USER}/${id}`)
    }
    return(
        <>
        {props.USER.map((val,i)=>{
            return (<div onClick={()=>viewUSER(val.id)} key={i}>{val.title}</div>)
        })}
        </>
    )
}

const mapSatateToprop=({USER})=>({USER})
export default connect(mapSatateToprop)(ALLUSERS)