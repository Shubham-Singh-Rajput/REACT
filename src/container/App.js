import {Route,BrowserRouter,Switch} from "react-router-dom"
import Layout from "./layout"
import {route} from './routes';


let App=()=>{
    console.log(route)
    return(
        <>
        <BrowserRouter>
            <Layout>
                <Switch>
                    {
                    route.map((route,i)=>{
                            return (<Route key={i} {...route} />)
                        })
                        
                    }

                </Switch>
            </Layout>
        </BrowserRouter>
        </>
    )
}
export default App