import Header from "./../../component/header"
const Layout=(props)=>{
    return(
        
        <>
            <Header />
            {props.children}
        </>
    )
}
export default Layout