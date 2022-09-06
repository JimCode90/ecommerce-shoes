import {useState} from "react";
import {collection, addDoc, serverTimestamp} from "firebase/firestore";
import {Link, useNavigate} from "react-router-dom";
import FormCheckout from "../components/FormCheckout/FormCheckout.jsx";
import {db} from "../firebase/Firebase.js";
import {useCart} from "../context/CartContext.jsx";
import {toast} from "react-toastify";
import ResultCheckout from "../components/ResultCheckout/ResultCheckout.jsx";
import DetailCheckout from "../components/DetailCheckout/DetailCheckout.jsx";

function Checkout() {

    const {cart, cantPrecioTotal, vaciarCarrito} = useCart()
    const [comprador, setComprador] = useState({});
    const [orderId, setOrderId] = useState('');
    const [estadoCompra, setEstadoCompra] = useState(false);
    const navigate = useNavigate()

    const datosComprador = (e) => {
        setComprador({
            ...comprador,
            [e.target.name]: e.target.value
        })
    }


    const finalizarCompra = (e) => {
        console.log(comprador)
        e.preventDefault()
        if (Object.values(comprador).length !== 6) {
            toast.error('Todos los campos del formulario son obligatorios!', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        } else {
            if (cart.length === 0) {
                toast.error('No has agregado productos al carrito!', {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
                navigate('/productos')
            } else {
                setEstadoCompra(true)
                const ventasCollection = collection(db, 'ventas')
                addDoc(ventasCollection, {
                    comprador,
                    items: cart,
                    total: cantPrecioTotal(),
                    date: serverTimestamp()
                })
                    .then(response => {
                        setOrderId(response.id)
                        vaciarCarrito()
                    })
                    .catch(error => {
                        console.log(error)
                    })
            }
        }
    }

    return (
        <div>
            <div className="page-title-area">
                <div className="container">
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>Checkout</li>
                    </ul>
                </div>
            </div>
            <div className="checkout-area ptb-60">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 col-md-12">
                            <div className="user-actions">
                                <i className="fas fa-sign-in-alt"></i>
                                <span>
                                    Estas registrado?
                                    <Link to="/login">Click para iniciar sesión</Link>
                                </span>
                            </div>
                        </div>
                    </div>
                    <form action="" onSubmit={finalizarCompra}>
                        <div className="row">

                            {
                                !estadoCompra
                                    ?
                                    <>
                                        <FormCheckout datosComprador={datosComprador}/>
                                        <DetailCheckout datosComprador={datosComprador} finalizarCompra={finalizarCompra}/>
                                    </>
                                    : <ResultCheckout orderId={orderId}/>
                            }

                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Checkout;