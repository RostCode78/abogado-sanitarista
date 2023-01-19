import { useContext } from "react";
import appContext from "../../../context/appContext";
import CardComunidad from "../../Cards/CardComunidad/CardComunidad";

const Comunidad = () => {

    const ContextApp = useContext(appContext);
    const {
        opciones_comunidad
    } = ContextApp;

    return (
        <div className="container-comunidad">
            <div className="content-titulo">
                <h2>Cosas que necesitas saber.</h2>
                <h3>Servicio a la comunidad</h3>
            </div>
            <div className="content-comunidad">
                { opciones_comunidad.map( e => (
                    <CardComunidad
                        datos={ e }
                        key={ e.id }
                    />
                ))}
            </div>
        </div>
    )
}

export default Comunidad;