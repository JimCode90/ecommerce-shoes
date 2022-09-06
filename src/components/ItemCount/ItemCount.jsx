
function ItemCount({ stock, initial, onAdd, cantidad, setCantidad }) {

    const addCount = () => {
        if (cantidad < stock) setCantidad(cantidad + 1)
    }

    const restCount = () => {
        if (cantidad > initial) setCantidad( cantidad - 1)
    }

    return (
        <div className="product-add-to-cart">
            <div className="input-counter">
                <span  className="minus-btn" onClick={restCount}><i className="fas fa-minus"></i></span>
                { cantidad }
                <span  className="plus-btn" onClick={addCount}><i className="fas fa-plus"></i></span>
            </div>
            <button
                type="submit"
                className="btn btn-primary"
                disabled={cantidad === 0}
                onClick={ onAdd }
            >
                <i className="fas fa-cart-plus"></i> Lo quiero!
            </button>
        </div>
    );
}

export default ItemCount;