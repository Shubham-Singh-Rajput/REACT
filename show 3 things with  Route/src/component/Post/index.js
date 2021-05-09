import { useEffect, useState } from "react"
import "./style.css"

const Post=()=>{
    const[allPost,setPost]=useState([])
    const[singlePerson,setSingleUser]=useState()
    const [id,setuserID]=useState()
    const fetchUser=()=>{
        fetch('https://jsonplaceholder.typicode.com/posts').then(d=>d.json()).then(d=>{
            setPost((s)=>{
                return d
            })
        })
    }
    const fetchOneUser=(id)=>{
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`).then(d=>d.json()).then(d=>{
            setSingleUser((s)=>{
                return d
            })
        })
    }
    useEffect(()=>{
        fetchUser()
    },[])
    useEffect(()=>{
        if(id){
            fetchOneUser(id)
        }
    },[id])
    const singleUser=(id)=>{
        setuserID((s)=>{
            return id
        })
    }
    return (
        <>
            <div className="container">
                <div className="inside">
                    {allPost.map((post,i)=>{
                        return(<div className="allUser" key={i} onClick={()=>singleUser(post.id)}><div>{post.title}</div></div>)
                    })}
                </div>
                {singlePerson?<div className="single">
                    <h1 style={{border:"1px solid black"}}>Title:{singlePerson.title}</h1>
                    <h1 style={{border:"1px solid black"}}>Id:{singlePerson.id}</h1>
                    <h1 style={{border:"1px solid black"}}>Body:{singlePerson.body}</h1>
                    <h1 style={{border:"1px solid black"}}>UserID:{singlePerson.userId}</h1>
                    </div>
                :null}
            </div>
        </>
    )
}

export default Post