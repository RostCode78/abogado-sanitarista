import Image from "next/image";

const CardComunidad = ({ datos }) => {
    return (
        <a href={ datos.url } target="_blank">
            <div className="container-card-comunidad">
                <div className="icon">
                    <Image
                        src="/external-link.svg"
                        width={14}
                        height={14}
                        alt={ datos.titulo }
                    />
                </div>
                <div className="titulo">
                    <h2>{ datos.titulo }</h2>
                </div>
                <div className="texto">
                    <p>{ datos.texto }</p>
                    <span>Saber más <Image src="/cheveron-right-blue.svg" width={ 20 } height={ 20 } alt=">"/></span>
                </div>
            </div>
        </a>
    )
}

export default CardComunidad;