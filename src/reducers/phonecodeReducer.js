import { 
    FETCH_CODES
} from '../actions/types'

export default function codes(state = [], action ={}) {
    switch (action.type) {
        case FETCH_CODES:
            return action.codes;
        default: return state;
    }
}
