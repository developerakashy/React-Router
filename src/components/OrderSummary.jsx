import { useNavigate } from "react-router-dom"

export const OrderSummary = () => {
    const navigate = useNavigate()
    return(
        <div>
            <h3>Order Successfull</h3>
            <button onClick={() => navigate(-1)}>Go Back</button>
        </div>
    )
}
