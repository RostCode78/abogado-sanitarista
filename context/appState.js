import { useReducer } from "react";
import appReducer from "./appReducer";
import appContext from "./appContext";

import {
    SWITCH_MENU,
    ABRIR_MODAL_ZOOM,
    GUARDAR_IMAGEN_ZOOM
} from './../types/index';

const AppState = props => {

    const initialState ={
        opciones_menu: [
            {
                id: 1,
                nombre: 'Inicio',
                url: '/'
            },
            {
                id: 2,
                nombre: 'Servicios Jurídicos',
                url: '/servicios-juridicos'
            },
            {
                id: 3,
                nombre: 'Jurista',
                url: '/jurista'
            },
            {
                id: 4,
                nombre: 'Contáctame',
                url: '/contactame'
            },
        ],
        menu_abierto: false,
        opciones_servicios: [
            {
                id: 1,
                nombre: "Para Hospitales, Clínicas y Consultorios.",
                speech: "¿Necesitas un servicio para Hospitales, Clínicas o Consultorios?",
                imagen: "https://i.imgur.com/aWfJb6E.jpg",
                url: "para-hospitales-clinicas-consultorios",
                servicios: [
                    {
                        id: 1,
                        texto: "Asesoría y capacitación en prevención de conflictos médico-paciente."
                    },
                    {
                        id: 2,
                        texto: "Asesoría y gestoría para la obtención de avisos y licencias de la COFEPRIS (Consultorio, Farmacia, Spa)."
                    },
                    {
                        id: 3,
                        texto: "Asesoría y defensa legal ante la imposición de multas o sellos de suspensión y clausura por COFEPRIS y sus homólogos."
                    },
                    {
                        id: 4,
                        texto: "Mediación ante el conflicto médico-paciente."
                    },
                    {
                        id: 5,
                        texto: "Asesoría en contratos."
                    },
                    {
                        id: 6,
                        texto: "Asesoría y regulación de personal de colaboración."
                    },
                    {
                        id: 7,
                        texto: "Contratos de prestación de servicios profesionales."
                    },
                    {
                        id: 8,
                        texto: "Aviso de Privacidad / Acuerdo de Confidencialidad."
                    },
                    {
                        id: 9,
                        texto: "Asesoría legal del correcto llenado y manejo de expediente clínico."
                    },
                    {
                        id: 10,
                        texto: "Asesoría y defensa legal por Quejas ante la Comisión Nacional de Arbitraje Médico - Arbitraje Médico Estatal."
                    },
                    {
                        id: 11,
                        texto: "Asesoría y defensa legal ante Demandas Civiles en Tribunales Judiciales."
                    },
                ]
            },
            {
                id: 2,
                nombre: "Para Profesionales De La Salud.",
                speech: "¿Eres profesional en la salud y necesitas un servicio?",
                imagen: "https://i.imgur.com/PmFXpVq.jpg",
                url: "para-profesionales-de-la-salud",
                servicios: [
                    {
                        id: 1,
                        texto: "Asesoría y capacitación en prevención de conflictos médico-paciente."
                    },
                    {
                        id: 2,
                        texto: "Asesoría y defensa legal por quejas ante la Comisión Nacional de Arbitraje Médico - Comisión Estatal de Arbitraje Médico Nuevo León."
                    },
                    {
                        id: 3,
                        texto: "Asesoría y defensa legal ante demandas civiles en Tribunales Judiciales."
                    },
                    {
                        id: 4,
                        texto: "Asesoría y defensa legal ante quejas en los Órganos Internos de Control y procedimientos administrativos."
                    },
                    {
                        id: 5,
                        texto: "Mediación ante el conflicto médico-paciente."
                    },
                    {
                        id: 6,
                        texto: "Asesoría en contratos."
                    },
                    {
                        id: 7,
                        texto: "Asesoría y regulación de personal de colaboración."
                    },
                    {
                        id: 8,
                        texto: "Contratos de prestación de servicios profesionales."
                    },
                    {
                        id: 9,
                        texto: "Aviso de Privacidad."
                    },
                    {
                        id: 10,
                        texto: "Acuerdo de Confidencialidad."
                    },
                    {
                        id: 11,
                        texto: "Asesoría legal del correcto llenado y manejo de expediente clínico."
                    },
                ]
            },
            {
                id: 3,
                nombre: "Para Pacientes y Familiares.",
                speech: "¿Eres un paciente o un familiar y necesitas un servicio?",
                imagen: "https://i.imgur.com/Bl54VHy.jpg",
                url: "para-pacientes-familiares",
                servicios: [
                    {
                        id: 1,
                        texto: "Consultoría jurídica sobre derechos del paciente."
                    },
                    {
                        id: 2,
                        texto: "Análisis de viabilidad jurídica de casos de responsabilidad médica."
                    },
                    {
                        id: 3,
                        texto: "Mediación ante el conflicto médico-paciente."
                    },
                    {
                        id: 4,
                        texto: "Representación extrajudicial y judicial en procesos de responsabilidad profesional."
                    },
                    {
                        id: 5,
                        texto: "Elaboración y orientación para solicitar copia del expediente clínico."
                    }
                ]
            },
            {
                id: 4,
                nombre: "Cursos, Talleres y Seminarios.",
                speech: "¿Necesitas un Curso, Taller o Seminario?",
                imagen: "https://i.imgur.com/8ojlEZn.jpg",
                url: "cursos-talleres-seminarios",
                servicios: [
                    {
                        id: 1,
                        texto: "Elaboración y ejecución de cursos, talleres, seminarios, sobre responsabilidad profesional jurídica sanitaria y médica."
                    }
                ]
            }
        ],
        opciones_comunidad: [
            {
                id: 1,
                titulo: "Del expediente clínico.",
                texto: "Norma Oficial Mexicana NOM-004-SSA3-2012",
                url: "https://www.dof.gob.mx/nota_detalle.php?codigo=5272787&fecha=15/10/2012#gsc.tab=0"
            },
            {
                id: 2,
                titulo: "Para la práctica de la anestesiología.",
                texto: "Norma Oficial Mexicana NOM-006-SSA3-2011",
                url: "https://www.dof.gob.mx/nota_detalle.php?codigo=5240668&fecha=23/03/2012#gsc.tab=0"
            },
            {
                id: 3,
                titulo: "Para la atención de la mujer durante el embarazo, parto y puerperio, y de la persona recién nacida.",
                texto: "Norma Oficial Mexicana NOM-007-SSA2-2016",
                url: "https://www.gob.mx/cms/uploads/attachment/file/512098/NOM-007-SSA2-2016.pdf"
            },
            {
                id: 4,
                titulo: "Que establece los requisitos mínimos de infraestructura y equipamiento de establecimientos para la atención médica de pacientes ambulatorios.",
                texto: "Norma Oficial Mexicana NOM-005-SSA3-2018",
                url: "https://dof.gob.mx/nota_detalle.php?codigo=5596456&fecha=09/07/2020#gsc.tab=0"
            },
        ],
        mostrarmodalzoom: false,
        guardarimagenzoom: ""
    }

    const [state, dispatch] = useReducer(appReducer, initialState);

    const SwitchParaMenu = bool => {
        dispatch({
            type: SWITCH_MENU,
            payload: bool
        })
    }

    const MostrarModalZoom = bool => {
        dispatch({
            type: ABRIR_MODAL_ZOOM,
            payload: bool
        })
    }

    const GuardarImagenZoom = string => {
        dispatch({
            type: GUARDAR_IMAGEN_ZOOM,
            payload: string
        })
    }

    return (
        <appContext.Provider
            value={{
                opciones_menu: state.opciones_menu,
                menu_abierto: state.menu_abierto,
                SwitchParaMenu,
                opciones_servicios: state.opciones_servicios,
                opciones_comunidad: state.opciones_comunidad,
                mostrarmodalzoom: state.mostrarmodalzoom,
                MostrarModalZoom,
                guardarimagenzoom: state.guardarimagenzoom,
                GuardarImagenZoom
            }}
        >
            { props.children }
        </appContext.Provider>
    )

}

export default AppState;