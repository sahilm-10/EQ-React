import { Link,Outlet } from "react-router-dom"
function ProductsPage(){
    
    return(
        <div>
            <input type="text" placeholder="search here"/>
            <Link to='featured-page'style={{marginTop:"100px"}}>Featured</Link>
            <Link to='new-page'style={{marginTop:"100px"}}>New</Link>
            <Outlet/>
        </div>
    )
}

export default ProductsPage;