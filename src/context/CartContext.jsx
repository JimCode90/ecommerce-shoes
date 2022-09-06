import {createContext, useContext, useState} from "react";
import {useLocalStorage} from "../hooks/useLocalStorage.js";
import {toast} from "react-toastify";

export const CartContext = createContext();

export const CartProvider = ({children}) => {
    const [precioDelivery, setPrecioDelivery] = useState(10);
    const {
        item: cart,
        loading: loadingCarrito,
        error: errorCarrito,
        saveItem: saveCart
    } = useLocalStorage('CART_V1', []);

    const addToCart = (item) => {
        toast.success('Producto agregado al carrito!', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });

        if (isProductInCart(item.id)) {
            const actualizarCarrito = cart.map((product) => {
                if (product.id === item.id) {
                    return {
                        ...product, cantidad: product.cantidad + item.cantidad
                    }
                }else{
                    return product;
                }
            })

            saveCart(actualizarCarrito)
        } else {

            saveCart([...cart, item])
        }
    }

    const isProductInCart = (id) => cart.some((product) => product.id === id)

    const vaciarCarrito = () => saveCart([])

    const removerProducto = (id) => {
        toast.success('Producto eliminado!', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
        saveCart(cart.filter((product) => product.id !== id))
    }

    const cantidadTotalProductosCarrito = () => cart.reduce((acumulador, product) => acumulador += product.cantidad, 0)

    const cantPrecioTotal = () => cart.reduce((acumulador, product) => acumulador += product.precio * product.cantidad, 0)

    return (
        <CartContext.Provider value={{
            cart,
            addToCart,
            isProductInCart,
            vaciarCarrito,
            removerProducto,
            cantidadTotalProductosCarrito,
            cantPrecioTotal,
            precioDelivery,
            loadingCarrito,
            errorCarrito
        }}>
            {children}
        </CartContext.Provider>
    );
}

export const useCart = () => useContext(CartContext)