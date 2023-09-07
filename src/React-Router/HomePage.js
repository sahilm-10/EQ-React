import { replace } from "formik";
import { useNavigate } from "react-router-dom";
function HomePage(){
    const navigate = useNavigate();
    return(
        <div>
        <h2>Home Page</h2>
        <button onClick={()=>navigate('/order-summary',{replace:true})}>Place Order</button>
        </div>
    )
}
export default HomePage;