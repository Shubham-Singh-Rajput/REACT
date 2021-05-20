import { BrowserRouter, Switch, Route } from "react-router-dom";
import Layout from "./container/Layout";
import routes from "./routes";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          {routes.map((route, i) => {
            return <Route key={i} {...route}></Route>;
          })}
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
