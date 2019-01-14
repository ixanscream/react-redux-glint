import axios from 'axios'
import { 
    FETCH_OFFICES,  
    NEW_OFFICE,
    DEL_OFFICE
} from './types'

export function setOffices(offices) {
    return {
        type: FETCH_OFFICES,
        offices
    }
}

export function addOffice(office) {
    return {
        type: NEW_OFFICE,
        office
    }
}
export function removeOffice(id) {
    return {
        type: DEL_OFFICE,
        id
    }
}

//fetch all office by company id
export function fetchOffices(id) {
    return dispatch => {
        axios.get(`http://localhost:3000/office?companyId=${id}`)
        .then(offices => {
            dispatch(setOffices(offices.data))
        }); 
    }
}

//save office
export function saveOffice(office) {
    let _dateFormatted = new Intl.DateTimeFormat('en-us', { 
        year: 'numeric', 
        month: '2-digit', 
        day: '2-digit' 
    }).format(office.date)
    
    return dispatch => {
        axios.post('http://localhost:3000/office', {
            name: office.name, 
            latitude: office.latitude, 
            longtitude: office.longtitude, 
            start: _dateFormatted, 
            companyId: office.company
        }).then(office => {
            dispatch(addOffice(office.data))
        });
    }
}

//get company
export const deleteOffice = id => dispatch =>  {
    let _id = id;
    axios.delete(`http://localhost:3000/office/${id}`)
        .then(company => {
            dispatch(removeOffice(_id))
        });
}
