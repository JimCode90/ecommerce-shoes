import {Link} from "react-router-dom";


function CartItems({cart, removerProducto}) {
    return (
        <>
            <tbody>
            {
                cart.length > 0
                    ?(
                        cart.map(item => (
                            <tr key={item.id}>
                                <td className="product-thumbnail">
                                    <a href="#">
                                        <img src={item.imagen} alt={item.nombre} />
                                    </a>
                                </td>
                                <td className="product-name">
                                    <Link to={`/producto-detalle/${item.id}`}>
                                        { item.nombre }
                                    </Link>
                                </td>
                                <td className="product-price">
                                    <span className="unit-amount">S/. {parseFloat(item.precio).toFixed(2)}</span>
                                </td>
                                <td className="product-quantity">
                                    { item.cantidad }
                                </td>
                                <td className="product-subtotal">
                                    <span className="subtotal-amount">S/. {parseFloat(item.cantidad * item.precio).toFixed(2)}</span>
                                    <a onClick={() => removerProducto(item.id)} className="remove">
                                        <i className="far fa-trash-alt"></i>
                                    </a>
                                </td>
                            </tr>
                        ))
                    )
                    :(
                        <tr className="text-center">
                            <td className="product-name" colSpan={5}>No se agregaron productos al carrito</td>
                        </tr>
                    )
            }
            </tbody>
        </>
    );
}

export default CartItems;