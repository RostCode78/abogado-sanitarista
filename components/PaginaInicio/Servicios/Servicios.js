import { useContext } from "react";
import appContext from "../../../context/appContext";
// COMPONENTS
import CardServicios from "../../Cards/CardServicios/CardServicios";

const Servicios = () => {

    const ContextApp = useContext(appContext);
    const {
        opciones_servicios
    } = ContextApp;

    return (
        <div className="container-servicios">
            <div className="content-titulo">
                <h2>Que puedo hacer por ti?</h2>
                <h3>Servicios jurídicos</h3>
            </div>
            <div className="content-cards">
                { opciones_servicios.map( e => (
                    <CardServicios
                        datos={ e }
                        key={ e.id }
                    />
                ))}
            </div>
        </div>
    )
}

export default Servicios;