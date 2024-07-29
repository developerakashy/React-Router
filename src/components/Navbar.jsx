import { Link, NavLink } from "react-router-dom"

export const Navbar = () => {

    const styleReference = ({isActive}) => {
        return {
            textDecoration: isActive ? 'none' : 'underline',
            fontWeight: isActive ? '900' : 'normal'
        }
    }
    return(
        <nav>
            <NavLink style={styleReference} to='/'>Home</NavLink>
            <NavLink style={styleReference} to='/about'>About</NavLink>
            <NavLink to='/products'>Products</NavLink>
        </nav>
    )
}
