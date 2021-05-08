import Header from "./../../component/header"
import Footer from "./../../component/footer"

let Layout=(props)=>{
    console.log(props)
    return(
    <>
    <Header/>
        {props.children}
    <Footer />
    </>
    )
}
export default Layout