import { Path } from "../config/webPath";
import Home from "../container/Home";
import ProductDetails from "../container/ProductDetail/ProductDetails";
import Products from "../container/Products";

export const routes=[
    {exact : true, path:Path.HOME , component:Home},
    {exact : true, path:Path.PRODUCT , component:Products},
    {exact : true, path:Path.PRODUCTDETAIL , component:ProductDetails}
]
