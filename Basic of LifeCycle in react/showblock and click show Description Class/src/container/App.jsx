import {Component} from "react"
import Heading from "./../component/heading"
import Alluser from "./../component/Alluser"
import "./app.css"
export default class App extends Component{
   state={
       allUser:[],
       singleUser:null
   }
   fetchUser=()=>{
    fetch("https://jsonplaceholder.typicode.com/posts").then(d=>d.json()).then(res=>{
        
        this.setState({allUser:res})
    })
   }
   componentDidMount(){
    this.fetchUser()
   }
   clickTitle=(id)=>{
       let singleUser=this.state.allUser.filter((user)=>user.id===id)
      this.setState({singleUser:singleUser[0]})

   }
    render(){
        return(
        <>
        <Heading />
        <div className="show">
        <div style={{display:"inline-block",overflow:"scroll",height:"95vh",marginBottom:"80px",width:"55vw"}}>
        <h1 style={{width:"50vw",padding:"8px"}}>ALL USER</h1>
        <Alluser allUser={this.state.allUser} clickHandler={this.clickTitle}/>
        </div>
        {this.state.singleUser?<div style={{display:"flex",flexDirection:"column",width:"45vw",padding:"8px",margin:"10px"}}>
        <h1 style={{marginBottom:"10%",background:"aqua"}}>SINGLE USER DETAIL</h1>
            <div style={{background:"aqua"}}>
            <h1 style={{border:"1px solid black"}}>Title:{this.state.singleUser.title}</h1>
            <h1 style={{border:"1px solid black"}}>Id:{this.state.singleUser.id}</h1>
            <h1 style={{border:"1px solid black"}}>Body:{this.state.singleUser.body}</h1>
            <h1 style={{border:"1px solid black"}}>UserID:{this.state.singleUser.userId}</h1>
            </div>
            </div>:null}
        </div>
        </>
        )
    }
    
}