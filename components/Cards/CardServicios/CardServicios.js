import Image from "next/image";
import Link from "next/link";

const CardServicios = ({ datos }) => {
    return (
        <Link href={`/servicio/${ datos.url }?id=${ datos.id }`} as={`/servicio/${ datos.url }?id=${ datos.id }`} className="container-card-servicios">
            <div className="imagen">
                <img src={ datos.imagen } alt={ datos.nombre } />
            </div>
            <div className="texto">
                <p>{ datos.nombre }</p>
                <span>Saber más <Image src="/cheveron-right-blue.svg" width={ 20 } height={ 20 } alt=">"/></span>
            </div>
        </Link>
    )
}

export default CardServicios;