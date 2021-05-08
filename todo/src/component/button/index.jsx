import React from "react"

export default class Button extends React.Component{
    render(){
        let css={
            display: "flex",
            justifyContent: "center",
            margin:"50px",

        }
        return(
            <>
         <div style={css}>
             <button style={{width:"50px",height:"30px",backgroundColor:"#abb920",borderRadius:"4px"}} type="submit">Submit</button>
        </div>
            </>
    
        )
    }
}