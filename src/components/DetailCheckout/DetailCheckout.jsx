import {useCart} from "../../context/CartContext.jsx";

function DetailCheckout({finalizarCompra, datosComprador}) {
    const {
        cart,
        cantPrecioTotal,
        precioDelivery,
    } = useCart();
    return (
        <>
            <div className="col-lg-6 col-md-12">
                <div className="order-details">
                    <h3 className="title">Tu orden</h3>
                    <div className="order-table table-responsive">
                        <table className="table table-bordered">
                            <thead>
                            <tr>
                                <th scope="col">Producto</th>
                                <th scope="col">Total</th>
                            </tr>
                            </thead>
                            <tbody>
                            {
                                cart && cart.map(item => (
                                    <tr>
                                        <td>{ item.nombre } ( { item.cantidad } unidades )</td>
                                        <td>{ item.precio }</td>
                                    </tr>
                                ))
                            }

                            <tr>
                                <td className="order-subtotal">
                                    <span>Subtotal</span>
                                </td>
                                <td className="order-subtotal-price">
                                    <span className="order-subtotal-amount">S/. {parseFloat(cantPrecioTotal()).toFixed(2)}</span>
                                </td>
                            </tr>
                            <tr>
                                <td className="order-shipping">
                                    <span>Delivery</span>
                                </td>

                                <td className="shipping-price">
                                    <span>S/. { parseFloat(precioDelivery).toFixed(2) }</span>
                                </td>
                            </tr>
                            <tr>
                                <td className="total-price">
                                    <span>Orden Total</span>
                                </td>

                                <td className="product-subtotal">
                                    <span className="subtotal-amount">S/. {parseFloat(cantPrecioTotal() + precioDelivery).toFixed(2)}</span>
                                </td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="payment-method">
                        <p>
                            <input
                                type="radio"
                                id="tranferencia-directa"
                                name="metodo_pago"
                                value="transferencia_directa"
                                onChange={(e) => datosComprador(e)}
                            />
                                <label htmlFor="tranferencia-directa">Transferencia bancaria directa</label>

                            Realiza tu pago directamente en nuestra cuenta bancaria. Utilice su ID de pedido como referencia de pago. Su pedido no se enviará hasta que los fondos se hayan liquidado en nuestra cuenta.
                        </p>
                        <p>
                            <input
                                type="radio"
                                id="paypal"
                                name="metodo_pago"
                                value="paypal"
                                onChange={(e) => datosComprador(e)}
                            />
                                <label htmlFor="paypal">PayPal</label>
                        </p>
                        <p>
                            <input
                                type="radio"
                                id="pago-efectivo"
                                name="metodo_pago"
                                value="efectivo"
                                onChange={(e) => datosComprador(e)}
                            />
                                <label htmlFor="pago-efectivo">Pago en Efectivo</label>
                        </p>
                    </div>
                    <button type="submit" className="btn btn-primary order-btn w-100">Realizar pedido</button>
                </div>
            </div>
        </>
    );
}

export default DetailCheckout;