import {BrowserRouter,Switch,Route} from "react-router-dom"
import Layout from "./container/Layout"
import { routes } from "./container/Routes"
let App=()=>{
    return (
        <>
            <BrowserRouter>
                <Layout>
                    <Switch>
                        {
                            routes.map((router,i)=>{
                                return (<Route key={i} {...router}></Route>)
                            })
                            
                        }
                    </Switch>
                </Layout>
            </BrowserRouter>
        </>
    )
}
export default App