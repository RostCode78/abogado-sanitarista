import { useReducer } from "react";
import appReducer from "./appReducer";
import appContext from "./appContext";

import {
    SWITCH_MENU
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
                nombre: 'Servicios Juridicos',
                url: '/servicios-juridicos'
            },
            {
                id: 3,
                nombre: 'Jurista',
                url: '/jurista'
            },
            {
                id: 4,
                nombre: 'Contactame',
                url: '/contactame'
            },
        ],
        menu_abierto: false
    }

    const [state, dispatch] = useReducer(appReducer, initialState);

    const SwitchParaMenu = bool => {
        dispatch({
            type: SWITCH_MENU,
            payload: bool
        })
    }

    return (
        <appContext.Provider
            value={{
                opciones_menu: state.opciones_menu,
                menu_abierto: state.menu_abierto,
                SwitchParaMenu
            }}
        >
            { props.children }
        </appContext.Provider>
    )

}

export default AppState;