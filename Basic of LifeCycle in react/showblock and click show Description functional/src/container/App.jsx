import Heading from "./../component/heading"
import Alluser from "./../component/Alluser"
import "./app.css"
import { useEffect, useState } from "react"
let App=()=>{

    const [state,setState]=useState({
        allUser:[],
        singleUser:null,
        id:null
    })
    let fetchUser=()=>{
        fetch("https://jsonplaceholder.typicode.com/posts").then(d=>d.json()).then((d)=>{
            setState((s)=>{
                return{...s,allUser:d}
            })
        })
    }
    let fetchUserID=(id)=>{
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`).then(d=>d.json()).then((d)=>{
            setState((s)=>{
                return{...s,singleUser:d}
            })
        })
    }
    useEffect(()=>{
        fetchUser()
    },[])

    useEffect(()=>{
        if(state.id)
            fetchUserID(state.id)
    },[state.id])

    let clickTitle=(id)=>{
        setState((s)=>{
            return{...s,id:id}
        })
    }
        return(
        <>
        <Heading />
        <div className="show">
        <div style={{display:"inline-block",overflow:"scroll",height:"95vh",marginBottom:"80px",width:"55vw"}}>
        <h1 style={{width:"50vw",padding:"8px"}}>ALL USER</h1>
        <Alluser allUser={state.allUser} clickHandler={clickTitle}/>
        </div>
        {state.singleUser?<div style={{display:"flex",flexDirection:"column",width:"45vw",padding:"8px",margin:"10px"}}>
        <h1 style={{marginBottom:"10%",background:"aqua"}}>SINGLE USER DETAIL</h1>
            <div style={{background:"aqua"}}>
            <h1 style={{border:"1px solid black"}}>Title:{state.singleUser.title}</h1>
            <h1 style={{border:"1px solid black"}}>Id:{state.singleUser.id}</h1>
            <h1 style={{border:"1px solid black"}}>Body:{state.singleUser.body}</h1>
            <h1 style={{border:"1px solid black"}}>UserID:{state.singleUser.userId}</h1>
            </div>
            </div>:null}
        </div>
        </>
        )
}
export default App;