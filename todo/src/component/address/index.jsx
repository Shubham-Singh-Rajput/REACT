import React from "react"

export default class Address extends React.Component{
    state={
        value:""
    }
    clickHandler=(e)=>{

        // console.log(e.target.value)
        this.setState({
            value:e.target.value
        })
    }
    render(){
        let css={
            margin:"50px",
        }
        return(
            <>
         <div style={css}>
            <div style={{marginBottom:"10px"}}><label>{this.props.title}</label></div>
            <input style={{width:"60vw",height:"30px"}} type="textarea" name={this.props.title} value={this.state.value} onChange={this.clickHandler}></input>
        </div>
            </>
    
        )
    }
}