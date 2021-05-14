import Header from "../../component/Header"
import Footer from './../../component/Footer/index';

const Layout=(props)=>{
             
    return(
        <>
            <Header />
            {props.children}
            <Footer />
        </>
    )
}
export default Layout