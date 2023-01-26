import { useEffect, useState, useContext } from 'react';
import Head from 'next/head';
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
                    console.log(e.nombre);
                }
            })

        };

        if ( Router.query.id !== undefined )  {
            ObtenerOpcionesServicios();
        }

    }, [Router]);

    return (
        <>
            <Head>
                <meta charset="UTF-8"/>
                <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                <title>{datos.nombre} | Abogado Sanitarista LS | Miguel A. Rodríguez Corzas</title>
                <meta name="description" content={datos.speech} />
                <link rel="icon" href="/logo.ico" type="image/x-icon" />
    
                <meta property="og:locale" content="es_ES" />
                <meta property="og:type" content="website" />
                <meta property="og:title" content="abogadosanitaristals" />
                <meta property="og:description" content={datos.speech} />
                <meta property="og:url" content={`https://abogadosanitaristals.com/${datos.url}`} />
                <meta property="og:site_name" content="abogadosanitaristals" />
    
                {/* <!-- Para facebook, SMS --> */}
                <meta property="og:image" content="/mini.png" />
                <meta property="og:image:secure_url" content="/mini.png" />
                <meta property="og:image:width" content="1200" />
                <meta property="og:image:height" content="630" />
                <meta property="og:image:alt" content={datos.speech} />
    
                {/* <!-- Para twitter --> */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:description" content={datos.speech} />
                <meta name="twitter:title" content="Abogado Sanitarista LS | Miguel A. Rodríguez Corzas" />
                <meta name="twitter:image" content="/mini.png" />
    
                {/* <!-- Para whatsapp --> */}
                <meta property="og:image" content="/mini.png" />
                <meta property="og:image:secure_url" content="/mini.png" />
                <meta property="og:image:type" content="image/png" />
                <meta property="og:image:width" content="1200" />
                <meta property="og:image:height" content="630" />
    
            </Head>
            <Layout>
                <div className="container-pagina-servicios">
                    <div className="header">
                        <div className="left">
                            <h1>{ datos.speech }</h1>
                            <h2>Entonces yo te puedo ayudar</h2>
                            <h3>Solo necesitas contactarme</h3>
                            <a className="boton" href="https://wa.me/525518100055" target="_blank">
                                <p>55 1810 0055</p>
                                <div className="icon">
                                    <Image
                                        src="/whatsapp.svg"
                                        width={20}
                                        height={20}
                                        alt='whatsapp'
                                    />
                                </div>
                            </a>
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
        </>
    )
}

export default servicios;