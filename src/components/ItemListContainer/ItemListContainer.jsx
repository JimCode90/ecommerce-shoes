import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {db} from "../../firebase/Firebase";
import { query, where, collection, getDocs } from "firebase/firestore"
import ItemList from "../ItemList/ItemList.jsx";
import SidebarCategory from "../SidebarCategory/SidebarCategory.jsx";

function ItemListContainer({greeting}) {

    let { categoria } = useParams()
    const [productos, setProductos] = useState([]);
    const [loading, setLoading] = useState(true);

    const getProductos = () => {
        setLoading(true)
        const q = categoria
            ? query(collection(db, 'productos'), where("categoria", "==", categoria))
            : collection(db, 'productos')

        getDocs(q)
            .then(result => {
                const lista = result.docs.map((product) => {
                    return {
                        id: product.id,
                        ...product.data()
                    }
                })
                setProductos(lista)
                setLoading(false)
            })
            .catch((error) => console.log(error))
            .finally(() => setLoading(false))
    }

    useEffect(() => {
        getProductos()

    }, [categoria]);
    return (
        <div>
            <div className="page-title-area">
                <div className="container">
                    <ul>
                        <li>
                            <nuxt-link to="/">Tienda</nuxt-link>
                        </li>
                        <li>Todos los Productos</li>
                    </ul>
                </div>
            </div>
            <div className="products-collections-area ptb-60">
                <div className="container">
                    <div className="section-title">
                        <h2><span className="dot"></span> { greeting }</h2>
                    </div>

                    <div className="row">
                        <SidebarCategory />
                        <ItemList productos={productos} loading={loading} />
                    </div>
                </div>
            </div>
        </div>

    );
}

export default ItemListContainer;