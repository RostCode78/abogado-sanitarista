import {
    SWITCH_MENU
} from '../types/index';

export default (state, action) => {

    switch ( action.type ) {
        case SWITCH_MENU: {
            return {
                ...state,
                menu_abierto: action.payload
            }
        }
        default:
            return state;
    }
}