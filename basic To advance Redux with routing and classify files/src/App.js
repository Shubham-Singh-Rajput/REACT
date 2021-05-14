import {Route,Switch,BrowserRouter} from "react-router-dom"
import Layout from "./container/Layout"
import { routes } from "./routes"

const App=()=>{
    return (
        <>
            <BrowserRouter>
                <Layout>
                    <Switch>
                        {routes.map((route,i)=>{
                            return(<Route key={i} {...route} />)
                        })}
                    </Switch>
                </Layout>
            </BrowserRouter>
        </>
    )
}
export default App