import { 
    FETCH_COMPANIES, 
    FETCH_COMPANY, 
    NEW_COMPANY,
    DEL_COMPANY
} from '../actions/types'

const initialState = {
    items:[],
    item:{}
}

export default function(state = initialState, action) { 
    switch (action.type) {
        case FETCH_COMPANIES:
            return {
                ...state,
                items: action.payload
            }

        case FETCH_COMPANY:
            return {
                ...state,
                item: action.payload
            }

        case NEW_COMPANY:
            return {
                ...state,
                items: [...state.items, action.payload]
            }
        
        case DEL_COMPANY:
            return {
                ...state,
                items: state.items.filter(item => item.id !== action.payload)   
            }       
        default:
            return state;
    }
}


// export default function companies(state = [], action ={}) {
//     console.log(state)
//     console.log(action)
//     switch (action.type) {
//         case FETCH_COMPANIES:
//             return action.companies ;
//         case NEW_COMPANY:
//             return [  ...state, action.company];
//         case DEL_COMPANY:
//             return state.filter(item => item.id !== action.id)             
//         case FETCH_COMPANY:
//             return [action.company];
//         default: return state;
//     }
// }
