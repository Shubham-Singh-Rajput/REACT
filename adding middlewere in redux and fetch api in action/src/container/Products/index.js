import { useEffect } from "react"
import { connect } from "react-redux"
import { Path } from "../../config/webPath"
import { PRODUCTS } from "../../redux/Action/AllProduct"

const Product=(props)=>{
    const {dispatch}=props
    useEffect(()=>{
        dispatch(PRODUCTS.Product())
    },[dispatch])
    const productDetails=(id)=>{
        props.history.push(`${Path.PRODUCT}/${id}`)
    }
    return(
        <>
        <div style={{display:"flex",flexWrap:"wrap"}}>
        {props.allProduct.map((product,i)=>{
            return (<div style={{margin:"10px",padding:"10px"}} onClick={()=>productDetails(product.id)} key={i}><img src={product.image} height="300px" width="300px" alt="images"></img></div>)
        })}
        </div>
        </>
    )
}
const mapStatetoProps=({allProduct})=>({allProduct})
export default connect(mapStatetoProps)(Product)