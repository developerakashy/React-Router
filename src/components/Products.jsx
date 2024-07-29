import { Link, Outlet } from "react-router-dom"

export const Products = () => {
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
