import { useEffect } from "react"
import { connect } from "react-redux"
import { PRODUCTS } from "../../redux/Action/AllProduct"

const ProductDetails=(props)=>{
    const {id}=props.match.params
    const {dispatch}=props
    useEffect(()=>{
        dispatch(PRODUCTS.Product(id))
    },[dispatch,id])
    const back=()=>{
        props.history.push('/')
    }
    return(
        <>
        <div style={{display:"flex",flexDirection:"column",border:"1px solid black", background:"red"}}>
        <p style={{textAlign:"center"}}>Click here to <span style={{color:"#00bcd4" , borderBottom :"1px solid black",cursor: "default"}} onClick={back}>go Back</span> </p>
            <div style={{display:"flex",justifyContent:"center",alignItems:"center"}}><img alt="images" src={props.detail.image} height="300px" width="200px"></img></div>
            <h1 style={{border:"1px solid black",padding:"10px",margin:"5px",background:"#ffc107",textAlign:"center"}}>ID:{props.detail.id}</h1>
            <h1 style={{border:"1px solid black",padding:"10px",margin:"5px",background:"#ffc107"}}>TITLE:{props.detail.title}</h1>
            
            <h1 style={{border:"1px solid black",padding:"10px",margin:"5px",background:"#ffc107"}}>DESCRIPTION:{props.detail.description}</h1>
            <h1 style={{border:"1px solid black",padding:"10px",margin:"5px",background:"#ffc107"}} >CATEGORY:{props.detail.category}</h1>
            <h1 style={{border:"1px solid black",padding:"10px",margin:"5px",background:"#ffc107",textAlign:"center"}}>PRICE:{props.detail.price}</h1>
            
        </div>
        </>
    )
}
const mapStatetoProp=({productDetail})=>({detail:productDetail})
export default connect(mapStatetoProp)(ProductDetails);