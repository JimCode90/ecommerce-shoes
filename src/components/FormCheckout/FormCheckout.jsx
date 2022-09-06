
function FormCheckout({ datosComprador }) {
    return (
        <div className="col-lg-6 col-md-12">
            <div className="billing-details">
                <h3 className="title">Detalle de facturación</h3>
                    <div className="row">
                        <div className="col-lg-12 col-md-6">
                            <div className="form-group">
                                <label htmlFor="nombre">Nombres completos <span className="required">*</span></label>
                                <input
                                    type="text"
                                    id="nombre"
                                    className="form-control"
                                    placeholder="Ingrese sus nombres completos"
                                    name="nombre"
                                    onChange={(e) => datosComprador(e)}
                                />
                            </div>
                        </div>
                        <div className="col-lg-12 col-md-6">
                            <div className="form-group">
                                <label htmlFor="direccion">Dirección <span className="required">*</span></label>
                                <input
                                    type="text"
                                    id="direccion"
                                    className="form-control"
                                    placeholder="Ingrese la dirección de su domicilio"
                                    name="direccion"
                                    onChange={(e) => datosComprador(e)}
                                />
                            </div>
                        </div>
                        <div className="col-lg-12 col-md-6">
                            <div className="form-group">
                                <label htmlFor="ciudad">Ciudad <span className="required">*</span></label>
                                <input
                                    type="text"
                                    id="ciudad"
                                    name="ciudad"
                                    className="form-control"
                                    placeholder="Ingrese la ciudad de su domicilio"
                                    onChange={(e) => datosComprador(e)}
                                />
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6">
                            <div className="form-group">
                                <label htmlFor="email">Email <span className="required">*</span></label
                                >
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    className="form-control"
                                    placeholder="Ingrese su email"
                                    onChange={(e) => datosComprador(e)}
                                />
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6">
                            <div className="form-group">
                                <label htmlFor="telefono">Teléfono <span className="required">*</span></label>
                                <input
                                    type="text"
                                    id="telefono"
                                    className="form-control"
                                    name="telefono"
                                    placeholder="Ingrese su número telefónico"
                                    onChange={(e) => datosComprador(e)}
                                />
                            </div>
                        </div>
                    </div>
            </div>
        </div>
    );
}

export default FormCheckout;