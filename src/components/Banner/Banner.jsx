import {Link} from "react-router-dom";
import './Banner.css'

const Banner = () => {
    return (
        <div className="main-banner banner-bg1">
            <div className="d-table">
                <div className="d-table-cell">
                    <div className="container">
                        <div className="main-banner-content">
                            <span className="text-white">Bienvenido</span>
                            <h1 className="text-white">LIQUIDACIÓN DE TEMPORADA</h1>
                            <p className="text-white">Disfruta hasta 40% de descuento. Además disfruta 20% adicional por la compra de 2 o más unidades en catálogo seleccionado.</p>

                            <Link to="/products" className="btn btn-primary hover-botton">COMPRA YA</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;
