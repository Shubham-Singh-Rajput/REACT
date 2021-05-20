import PrimarySearchAppBar from "../../component/NavBar"

const  Layout=(props)=>{
    return(
        <>
        <PrimarySearchAppBar/>
        {props.children}
        </>

    )
}
export default Layout
