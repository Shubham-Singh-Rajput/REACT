import {Component} from "react"
import TextInput from "./../component/TextInput"
import "./Todo.css"
export default class Todo extends Component{
   state={
       todo:[],
       title:'',
       about:'',
   }
   changeInput=(e)=>{
       this.setState({
           [e.target.name]:e.target.value
       })
   }
   submitTodo=(e)=>{
       e.preventDefault()
       this.setState({
           todo:[
               ...this.state.todo,{
                   title:this.state.title,
                   data:this.state.about
               }
           ],
           title:'',
           about:''
       },()=>{
           console.log(this.state)
       })
   }
   render(){
       return(
           <>
           <div  className="father" >
           <form className="form">
               <TextInput label="Title" value={this.state.title} name='title' changeHandler={this.changeInput} />
               <TextInput label="Data" value={this.state.about} name='about' changeHandler={this.changeInput} />
               <button onClick={this.submitTodo}>ADD</button>
               
           </form>
           </div>
           {
               this.state.todo.length!==0?<div className="abc">{this.state.todo.map((val,i)=>{
                   console.log(val)
                   return (
        
                       <div  className="show" key={i}>
                        <h1>Title:{val.title}</h1>
                        <div>About:{val.data}</div>
                       </div>
                   )
               })}
               </div>:
               null
           }
           </>
       )
   }
}