import { useNavigate } from "react-router-dom";
function OrderSummary(){
    const navigate = useNavigate();
    return(
        <div>
            <h3>Order has been Placed !</h3> 
            <button onClick={()=>navigate('/home')}>Go Back</button>
        </div>
    )
}
export default OrderSummary;