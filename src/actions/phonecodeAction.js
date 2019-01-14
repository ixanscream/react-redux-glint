import axios from 'axios'
import { 
    FETCH_CODES
} from './types'

export function setCodes(codes) {
    return {
        type: FETCH_CODES,
        codes
    }
}

//fetch all codes
export function fetchCodes() {
    return dispatch => {
        axios.get('http://localhost:3000/phonecode/')
        .then(codes => {
            dispatch(setCodes(codes.data))
        });   
    }
}