import {
    SWITCH_MENU,
    ABRIR_MODAL_ZOOM,
    GUARDAR_IMAGEN_ZOOM
} from '../types/index';

export default (state, action) => {

    switch ( action.type ) {
        case SWITCH_MENU: {
            return {
                ...state,
                menu_abierto: action.payload
            }
        }
        case ABRIR_MODAL_ZOOM:
            return {
                ...state,
                mostrarmodalzoom: action.payload
            }
        case GUARDAR_IMAGEN_ZOOM:
            return {
                ...state,
                guardarimagenzoom: action.payload
            }
        default:
            return state;
    }
}