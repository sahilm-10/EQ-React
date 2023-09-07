import { NavLink } from "react-router-dom"
function Navbar(){
    const navLinkStyles = ({isActive}) =>{
        return{
            marginRight : "10px",
            fontWeight : isActive ? 'bold' : 'normal',
            textDecoration : isActive ? 'none' : 'underline'
        }
    }
    return(
        <div>
            <nav>
                <NavLink to='home' style={navLinkStyles}>Home</NavLink>
                <NavLink to='about' style={navLinkStyles}>About</NavLink>
            </nav>
        </div>
    )
}
export default Navbar;