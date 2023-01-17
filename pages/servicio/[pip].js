import { useEffect, useState, useContext } from 'react';
import { useRouter } from "next/router";
import appContext from '../../context/appContext';
import Layout from './../../components/Layout';

const servicios = () => {

    const ContextApp = useContext(appContext);
    const {
        opciones_servicios
    } = ContextApp;

    const Router = useRouter();

    useEffect( () => {

        const ObtenerOpcionesServicios = () => {

            opciones_servicios.map( e => {
                if ( e.id == Router.query.id ) {
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
            <div>servicio</div>
        </Layout>
    )
}

export default servicios;