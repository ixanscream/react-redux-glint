import { 
    FETCH_OFFICES, 
    NEW_OFFICE,
    DEL_OFFICE
} from '../actions/types'


export default function office(state = [], action ={}) {
    switch (action.type) {
        case FETCH_OFFICES:
            return action.offices;
        case NEW_OFFICE:
            return [  ...state, action.office];
        case DEL_OFFICE:
            return state.filter(item => item.id !== action.id)          
        default: return state;
    }
}
