import ItemCount from "../ItemCount/ItemCount.jsx";
import {useCart} from "../../context/CartContext.jsx";
import {useState} from "react";
import { useNavigate } from 'react-router-dom'


function ItemDetail({producto}) {
    const [cantidad, setCantidad] = useState(0);
    const [estadoCompra, setEstadoCompra] = useState(false);
    const navigate = useNavigate()
    const {addToCart} = useCart()

    const onAdd = () => {
        setEstadoCompra(true)
        let productoAComporar = {
            id: producto.id,
            nombre: producto.nombre,
            imagen: producto.img,
            stock: producto.stock,
            precio: producto.precio,
            cantidad
        }
        addToCart(productoAComporar)
    }

    return (
        <>
            <div className="col-lg-6 col-md-6">
                <div className="products-page-gallery">
                    <div className="product-page-gallery-main">
                        <img src={producto.img} alt={producto.nombre}/>
                    </div>
                </div>
            </div>
            <div className="col-lg-6 col-md-6">
                <div className="product-details-content">
                    <h3>{producto.nombre}</h3>
                    <div className="price">
                        <span className="new-price">S/. {producto.precio}</span>
                    </div>
                    <ul className="product-info">
                        <li><span>Nombre del producto:</span> <a href="#">{producto.nombre}</a></li>
                        <li><span>Categoría:</span> <a href="#">{producto.categoria}</a></li>
                        <li><span>Disponibilidad:</span> <a href="#">En stock ({producto.stock} productos)</a></li>
                        <li><span>Marca:</span> <a href="#">{producto.marca}</a></li>
                    </ul>

                    <div className="product-color-switch">
                        <h4>Colores:</h4>

                        <ul>
                            {
                                producto.colores.map(color => (
                                    <li key={color}>
                                        <a
                                            href="#"
                                            title={color}
                                            className={color === 'azul' ? 'color-teal' : color === 'blanco' ? 'color-white' : 'color-black'}></a>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>

                    <div className="product-size-wrapper">
                        <h4>Tallas:</h4>
                        <ul>
                            {
                                producto.tallas.map(talla => (
                                    <li key={talla}><a href="#">{talla}</a></li>
                                ))
                            }
                        </ul>
                    </div>
                    {
                        !estadoCompra
                            ? <ItemCount stock={producto.stock} initial={1} onAdd={onAdd} cantidad={cantidad}
                                         setCantidad={setCantidad}/>
                            : (
                                <div className="buy-checkbox-btn">
                                    <div className="item">
                                        <a onClick={() => navigate('/productos') } className="btn btn-primary">Seguir comprando</a>
                                    </div>
                                    <div className="item">
                                        <a onClick={() => navigate('/cart') } className="btn btn-primary">Ir al Carrito</a>
                                    </div>
                                </div>
                            )
                    }

                </div>
            </div>

        </>
    );
}

export default ItemDetail;