import {Link} from "react-router-dom";
import {useCart} from "../context/CartContext.jsx";

const CardWidget = () => {

    const {cantidadTotalProductosCarrito} = useCart()
    return (
        <div className="others-option">
           <div className="option-item">
               <Link to="/cart">
                   Cart({cantidadTotalProductosCarrito()}) <i className="fas fa-shopping-bag"></i>
               </Link>
           </div>
        </div>
    );
};

export default CardWidget;
