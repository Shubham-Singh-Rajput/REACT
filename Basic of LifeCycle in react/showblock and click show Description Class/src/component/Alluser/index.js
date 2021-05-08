import { Component } from "react";
import "./user.css"
export default class Alluser extends Component{
       render(){
           
        return (
                this.props.allUser.map((user,i)=>{
                    return(
                    <div className="allUser" key={i} onClick={()=>{this.props.clickHandler(user.id)}}>
                        <div className="Title">{user.title}</div>
                    </div>
                    )
                })
        )
       
    }
}