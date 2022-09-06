import {BrowserRouter, Routes, Route} from "react-router-dom"
import NavBar from "./comoon/NavBar.jsx";
import Footer from "./comoon/Footer.jsx";
import Home from "./views/Home.jsx";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer.jsx";
import { CartProvider } from './context/CartContext.jsx'
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer.jsx";
import Cart from "./views/Cart.jsx";
import Checkout from "./views/Checkout.jsx";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {

    return (
        <CartProvider>
            <BrowserRouter>
                <NavBar/>
                <Routes>
                    <Route exact path="/" element={<Home/>} />
                    <Route exact path="/productos" element={<ItemListContainer greeting="Nuestros Productos" />} />
                    <Route exact path="/productos/:categoria" element={<ItemListContainer greeting="Nuestros Productos" />} />
                    <Route exact path="/producto-detalle/:id" element={<ItemDetailContainer />} />
                    <Route exact path="/cart" element={<Cart />} />
                    <Route exact path="/checkout" element={<Checkout />} />
                </Routes>
                <Footer/>
                <ToastContainer />
            </BrowserRouter>
        </CartProvider>
    )
}

export default App
