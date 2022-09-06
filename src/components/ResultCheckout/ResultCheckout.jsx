import {useNavigate} from "react-router-dom";
import {SyncOutlined} from "@ant-design/icons";
import imgCheck from '../../assets/check.png'

function ResultCheckout({orderId}) {
    const navigate = useNavigate()
    return (
        <>
            {
                orderId
                    ? <div className="row justify-content-center">
                        <div className="col-9 text-center">
                            <h1 className="text-center m-5">Muchas gracias por su compra</h1>
                            <div className="text-center mb-5">
                                <img src={imgCheck} alt="compra exitosa" width="17%"/>
                            </div>
                            <h3>El código de su orden es: {orderId}</h3>
                            <button className="btn btn-light mt-2" onClick={() => navigate('/productos') }>Volver a la home</button>
                        </div>
                    </div>
                    : <SyncOutlined spin className="text-danger h1" />
            }
        </>
    );
}

export default ResultCheckout;