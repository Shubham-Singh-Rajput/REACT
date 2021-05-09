import Layout from "./layout"
import {Route, BrowserRouter,Switch} from "react-router-dom"
import { routes } from "../routes/route"
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