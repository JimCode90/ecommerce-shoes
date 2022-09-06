import React from 'react';
import Item from "../Item/Item.jsx";
import {SyncOutlined} from "@ant-design/icons";

function ItemList({productos, loading}) {
    return (
        <div className="col-lg-8 col-md-12">
            <div className="products-filter-options">
                <div className="row align-items-center">
                    <div className="col d-flex">
                        <p>{ productos.length } resultados</p>
                    </div>
                </div>
            </div>
            <div id="products-filter" className="products-collections-listing row">
                {
                    loading ? <SyncOutlined spin className="text-danger h1" />
                        : productos.length > 0 && productos.map(producto => (
                            <Item key={producto.id} producto={producto} />
                    ))
                }
            </div>
        </div>
    );
}

export default ItemList;