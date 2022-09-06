import {useCart} from "../context/CartContext.jsx";
import {Link, useNavigate} from "react-router-dom";
import CartItems from "../components/CartItems/CartItems.jsx";
import {SyncOutlined} from "@ant-design/icons";


function Cart() {
    const navigate = useNavigate()
    const {
        cart,
        cantPrecioTotal,
        cantidadTotalProductosCarrito,
        removerProducto,
        vaciarCarrito,
        precioDelivery,
        loadingCarrito,
        errorCarrito
    } = useCart();
    return (
        <div>
            <div className="page-title-area">
                <div className="container">
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>Cart</li>
                    </ul>
                </div>
            </div>

            <div className="cart-area ptb-60">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 col-md-12">
                            {
                                loadingCarrito
                                    ? (
                                        <div className="text-center">
                                            <SyncOutlined spin className="text-danger h1 text-center"/>
                                        </div>
                                    )
                                    : (
                                        <form>
                                            <div className="cart-table table-responsive">
                                                <table className="table table-bordered">
                                                    <thead>
                                                    <tr>
                                                        <th scope="col">Producto</th>
                                                        <th scope="col">Nombre</th>
                                                        <th scope="col">Precio Unidad</th>
                                                        <th scope="col">Cantidad</th>
                                                        <th scope="col">Total</th>
                                                    </tr>
                                                    </thead>
                                                    <CartItems cart={cart} removerProducto={removerProducto}/>
                                                </table>
                                            </div>
                                            <div className="cart-buttons">
                                                <div className="row">
                                                    <div className="col-lg-7 col-md-7">
                                                        <div className="continue-shopping-box">
                                                            <Link to="/productos" className="btn btn-light">
                                                                Continuar comprando
                                                            </Link>
                                                        </div>

                                                    </div>
                                                    {
                                                        cart.length > 0
                                                            ? (
                                                                <div className="col-lg-5 col-md-5 text-right">
                                                                    <div className="cart-totals">
                                                                        <h3>Cantidad total de Productos
                                                                            ({cantidadTotalProductosCarrito()})</h3>
                                                                        <ul>
                                                                            <li>Sub
                                                                                Total <span>S/. {parseFloat(cantPrecioTotal()).toFixed(2)}</span>
                                                                            </li>
                                                                            <li>Delivery <span>S/. {parseFloat(precioDelivery).toFixed(2)}</span>
                                                                            </li>
                                                                            <li>Total <span><b>{parseFloat(cantPrecioTotal() + precioDelivery).toFixed(2)}</b></span>
                                                                            </li>
                                                                        </ul>
                                                                        <Link to="/checkout" className="btn btn-light">
                                                                            Procesar compra
                                                                        </Link>
                                                                        <div className="continue-shopping-box mt-2">
                                                                            <button onClick={vaciarCarrito}
                                                                                    className="btn btn-danger">
                                                                                Cancelar Compra
                                                                            </button>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            )
                                                            : ''
                                                    }
                                                </div>
                                            </div>
                                        </form>
                                    )
                            }

                        </div>
                    </div>
                </div>
            </div>


        </div>
    );
}

export default Cart;