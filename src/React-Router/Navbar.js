import { Link } from "react-router-dom"
function Navbar(){
    return(
        <div>
            <nav>
                <Link to='home' style={{marginRight:"10px"}}>Home</Link>
                <Link to='about'>about</Link>
            </nav>
        </div>
    )
}
export default Navbar;