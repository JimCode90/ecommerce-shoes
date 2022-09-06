import {Link} from "react-router-dom";

const ProductItem = ({products}) => {
    return (
        <>
            {
                products.map(prod => (
                    <div className="col-lg-3 col-md-6 col-sm-6" key={prod.id}>
                        <div className="single-product-box">
                            <div className="product-image">
                                <Link to={`/producto-detalle/${prod.id}`}>
                                    <img src={prod.img} alt="img_demo"/>
                                </Link>
                                <ul>
                                    <li>
                                        <Link to={`/producto-detalle/${prod.id}`}>
                                            <i className="far fa-eye"></i>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="product-content">
                                <h3>
                                    <Link to={`/producto-detalle/${prod.id}`}>
                                        { prod.nombre }
                                    </Link>
                                </h3>
                                <div className="product-price">
                        <span className="new-price">
                            S/ { prod.precio }
                        </span>
                                </div>
                                <Link to={`/producto-detalle/${prod.id}`} className="btn btn-light">
                                    Ver Detalle
                                </Link>
                            </div>
                        </div>
                    </div>
                ))
            }
        </>
    );
};

export default ProductItem;
