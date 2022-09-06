import {Link} from "react-router-dom";

function Item({producto}) {
    return (
        <div className="col-lg-6 col-md-6 products-col-item">
            <div className="single-product-box">
                <div className="product-image">
                    <Link to={`/producto-detalle/${producto.id}`} >
                        <img src={producto.img} alt={producto.nombre}/>
                    </Link>
                </div>

                <div className="product-content">
                    <h3>
                        <Link to={`/producto-detalle/${producto.id}`}>
                            {producto.nombre}
                        </Link>
                    </h3>
                    <div className="product-price">
                        <span className="new-price">S/. {producto.precio}</span>
                    </div>
                    <div className="rating">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="far fa-star"></i>
                    </div>
                    <Link to={`/producto-detalle/${producto.id}`} className="btn btn-light">
                        Ver Detalle
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Item;