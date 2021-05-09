import {useState} from "react"
let Login=()=>{
    const [name,setName]=useState({value:"",err:""})
    const [Password,setPassword]=useState({value:"",err:""})
    const ChangeInput=(e)=>{
        if(e.target.name==="name")
            setName((s)=>{
                return ({...s,value:e.target.value,err:""})
            })
        else
        setPassword((s)=>{
                return ({...s,value:e.target.value,err:""})
            })
    }
    const submit=(e)=>{
        if(name.value===""){
            setName((s)=>{
                return ({...s,err:"err"})
            })
        }
        if(Password.value===""){
            setPassword((s)=>{
                return ({...s,err:"err"})
            })
        }
        else{
            console.log(`name:${name.value}`)
            console.log(`password:${Password.value}`)
            setName((s)=>{
                return ({value:"",err:""})
            })
            setPassword((s)=>{
                return ({value:"",err:""})
            })

        }

        e.preventDefault()
    }
    return(
        <>
        <div style={{display:"flex",justifyContent:"center",marginTop:"20px"}}>
            <form style={{display:"flex",flexDirection:"column",width:"50vw",background:"yellow",padding:"20px"}} onSubmit={submit}>
                NAME  <input type="text" name="name"  value={name.value} onChange={ChangeInput}></input>
                {name.err?<div style={{color:"red"}}>PLEASE ENTER THE NAME</div>:null}
                PASSWORD  <input type="Password" name="password"  value={Password.value} onChange={ChangeInput}></input>
                {Password.err?<div style={{color:"red"}}>PLEASE ENTER THE PASSWORD</div>:null}
                <div style={{display:"flex",justifyContent:"center",marginTop:"20px"}}>
                    <button style={{background:"aqua",borderRadius:"3px"}} type ="submit">SUBMIT</button>
                </div>
            </form>
        </div>
        </>

    )
}
export default Login