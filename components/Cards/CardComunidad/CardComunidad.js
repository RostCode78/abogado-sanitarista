import Image from "next/image";

const CardComunidad = ({ datos }) => {
    return (
        <div className="container-card-comunidad">
            <div className="titulo">
                <h2>{ datos.titulo }</h2>
            </div>
            <div className="texto">
                <p>{ datos.texto }</p>
                <span>Saber más <Image src="/cheveron-right-blue.svg" width={ 20 } height={ 20 } alt=">"/></span>
            </div>
        </div>
    )
}

export default CardComunidad;