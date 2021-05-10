import { useEffect, useState } from "react"
import { PATH } from "../../config/webPath"

let Alluser=(props)=>{
    const[allUser,setallUser]=useState([])
    const fetchUser=async()=>{
        let alluser=await (await fetch('https://jsonplaceholder.typicode.com/posts')).json()
        setallUser([...alluser])
    }
    useEffect(()=>{
        fetchUser()
    },[])

    const getUser=(id)=>{
        props.history.push(`${PATH.POST}/${id}`)
    }
    return (
        <>
        <div style={{display:"flex" ,flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
            <div style={{position:"fixed"}}>
                <div style={{overflow:"scroll",height:"70vw",marginTop:"710px"}}>
                    {
                        allUser.map((user,i)=>{
                            return (<div key={i} onClick={()=>{getUser(user.id)}} style={{border:"1px solid black",background:"aqua",padding:"5px",margin:"20px"}}> {user.title}</div>)
                        })
                    }
            </div>
            </div>
        </div>
        </>

    )
}
export default Alluser