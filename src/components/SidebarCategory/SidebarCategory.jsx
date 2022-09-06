import {useEffect, useState} from "react";
import { collection, getDocs } from "firebase/firestore"
import {db} from "../../firebase/Firebase";
import {Link} from "react-router-dom";

function SidebarCategory() {
    const [categorias, setCategorias] = useState([]);
    useEffect(() => {
        const q = collection(db, 'categorias')
        getDocs(q)
            .then(result => {
                const lista = result.docs.map((categoria) => {
                    return {
                        id: categoria.id,
                        ...categoria.data()
                    }
                })
                setCategorias(lista)
            })
            .catch((error) => console.log(error))
    }, []);
    return (
        <div className="col-lg-4 col-md-12">
            <div className="woocommerce-sidebar-area">
                <div className="collapse-widget collections-list-widget">
                    <h3 className="collapse-widget-title">
                        Categorias

                        <i className="fas fa-angle-double-down"></i>
                    </h3>
                    <b-collapse id="collapse-2">
                        <ul className="collections-list-row">
                            <li className="active">
                                <Link to="/productos">TODAS</Link>
                            </li>
                            {
                                categorias.length > 0 && categorias.map(categoria => (
                                    <li className="active" key={categoria.id}>
                                        <Link to={`/productos/${categoria.nombre}`} >
                                            { categoria.nombre.toUpperCase() }
                                        </Link>
                                    </li>
                                ))
                            }
                        </ul>
                    </b-collapse>
                </div>
            </div>
        </div>
    );
}

export default SidebarCategory;