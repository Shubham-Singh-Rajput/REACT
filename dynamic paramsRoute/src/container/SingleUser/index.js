import { useEffect, useState } from "react"
import { useHistory, useRouteMatch } from "react-router"
import { PATH } from "../../config/webPath"

const SingleUser=()=>{
    // we can use props here as it is direct connected to Route
    let match=useRouteMatch()
    let history=useHistory()
    const [user,setUser]=useState({})
    const fetchUser=(id)=>{
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`).then(d=>d.json()).then(d=>{
            setUser(d)
        })
    }
    useEffect(()=>{
        fetchUser(match.params.id)
    },[match.params.id])
    let back=()=>{
        history.push(PATH.POST)
    }
    return(
        <>
        <div style={{marginTop:"50px"}}>
            <div > to go back click here<span onClick={back} style={{color:"green",textDecoration:"underline",cursor:"default"}}>BACK</span></div>
        <h1 style={{border:"1px solid black"}}>Title:{user.title}</h1>
                    <h1 style={{border:"1px solid black"}}>Id:{user.id}</h1>
                    <h1 style={{border:"1px solid black"}}>Body:{user.body}</h1>
                    <h1 style={{border:"1px solid black"}}>UserID:{user.userId}</h1>
        </div>
        </>
    )
}
export default SingleUser