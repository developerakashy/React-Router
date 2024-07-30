import { Link, Outlet } from "react-router-dom"

export const Products = () => {
    //relative link appends to the nearest route path='new'
    //absolute link appends to the root of the route path='/products/new'
    return(
        <div>
            <h1>Products</h1>
            <div>
                <Link to='featured'>Featured</Link>
                <Link to='new'>New</Link>
            </div>
            <Outlet/>
        </div>
    )
}
