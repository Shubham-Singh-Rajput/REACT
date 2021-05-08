import {Component} from "react"

export default class TextInput extends Component{
    render(){
        // console.log(this.props)
        return (
            <>
            <label >{this.props.label}</label>
            <input type="text" value={this.props.value} name={this.props.name} onChange={this.props.changeHandler} placeholder={`enter the ${this.props.label}`} />
            </>
        )
    }
}