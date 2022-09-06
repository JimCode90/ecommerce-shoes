import {useEffect, useState} from "react";
import {Link, useParams} from "react-router-dom";
import {collection, doc, getDoc} from "firebase/firestore";
import {db} from "../../firebase/Firebase";
import ItemDetail from "../ItemDetail/ItemDetail.jsx";
import {SyncOutlined} from "@ant-design/icons";

function ItemDetailContainer() {
    let {id} = useParams()
    const [producto, setProducto] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const collecionProductos = collection(db, 'productos')
        const referenciaDoc = doc(collecionProductos, id)
        getDoc(referenciaDoc)
            .then(result => {
                setProducto({
                    id: result.id,
                    ...result.data()
                })
            })
            .catch(error => {
                console.log({error})
            })
            .finally(() => setLoading(false))

    }, [id]);

    return (
        <div>
            <div className="page-title-area">
                <div className="container">
                    <ul>
                        <li>
                            <Link to="/productos">Productos</Link>
                        </li>
                        <li>{producto.nombre}</li>
                    </ul>
                </div>
            </div>
            <div className="products-details-area ptb-60">
                <div className="container">
                    <div className="row">
                        {
                            loading ? <SyncOutlined spin className="text-danger h1" />
                                :  <ItemDetail producto={producto} />
                        }

                    </div>
                </div>
            </div>
        </div>
    );
}

export default ItemDetailContainer;