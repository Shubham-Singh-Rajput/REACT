import React from "react"
import Name from './../component/name';
import Password from './../component/password';
import Phone from './../component/phone';
import Email from './../component/email';
import Address from './../component/address';
import Button from './../component/button';
export default class Signup extends React.Component{
    submit(e){
        let a=document.getElementsByTagName("input")
        a=Array.from(a)
        a.map(i=>{
            console.log(i.value)
            return 0
        })
        e.preventDefault()
    }
    render(){
        let css={
            margin:"0px",
            padding:"0px",
            width:"100vw",
            height:"100vh",
            display:"flex",
            justifyContent:"center",
            alignItems:"center",
        }

        return(
        <>
        <div style={css}>
        <div style={{border:"1px solid black",display:"inline-block", backgroundColor: "aqua"}}>
            <form onSubmit={this.submit}>
                <Name  title="Name"/>
                <Password title="Password"/>
                <Phone title="Phone Number"/>
                <Email title="Email"/>
                <Address title="Address"/>
                <Button/>
            </form>
        </div>
        </div>
        </>
        )
    }
}