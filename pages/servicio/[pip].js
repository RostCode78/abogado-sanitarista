import { useEffect, useState, useContext } from 'react';
import Image from 'next/image';
import { useRouter } from "next/router";
import appContext from '../../context/appContext';
import Layout from './../../components/Layout';
import Servicios from '../../components/PaginaInicio/Servicios/Servicios';
import ServicioEspecial from '../../components/PaginaInicio/ServicioEspecial/ServicioEspecial';

const servicios = () => {

    const ContextApp = useContext(appContext);
    const {
        opciones_servicios
    } = ContextApp;

    const Router = useRouter();

    const [ datos, setDatos ] = useState({});

    useEffect( () => {

        const ObtenerOpcionesServicios = () => {

            opciones_servicios.map( e => {
                if ( e.id == Router.query.id ) {
                    setDatos(e);
                    console.log(e);
                }
            })

        };

        if ( Router.query.id !== undefined )  {
            ObtenerOpcionesServicios();
        }

    }, [Router]);

    return (
        <Layout>
            <div className="container-pagina-servicios">
                <div className="header">
                    <div className="left">
                        <h1>{ datos.speech }</h1>
                        <h2>Entonces yo te puedo ayudar</h2>
                        <h3>Solo necesitas contactarme</h3>
                        <div className="boton">
                            <p>55 1810 0055</p>
                            <div className="icon">
                                <Image
                                    src="/whatsapp.svg"
                                    width={20}
                                    height={20}
                                    alt='whatsapp'
                                />
                            </div>
                        </div>
                    </div>
                    <div className="right">
                        <img src={ datos.imagen } alt={ datos.nombre } />
                    </div>
                </div>
                <div className="content">
                    <div className="content-titulo">
                        <h2>Que servicio necesitas?</h2>
                    </div>
                    <div className="content-cards">
                        { Object.entries( datos ).length !== 0 
                        ?
                            datos.servicios.map( e => (
                                <div className="item" key={ e.id }>
                                    <div className="icon"></div>
                                    <p>{ e.texto }</p>
                                </div>
                            ))
                        : null }
                    </div>
                </div>
                <Servicios/>
                <ServicioEspecial/>
            </div>
        </Layout>
    )
}

export default servicios;