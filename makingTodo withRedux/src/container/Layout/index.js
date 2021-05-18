import Header from "../../component/Header"

const Layout=(props)=>{
    return (
        <>
            <Header />
            {props.children}
        </>
    )

}
export default Layout