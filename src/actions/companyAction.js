import axios from 'axios'
import { 
    FETCH_COMPANIES, 
    FETCH_COMPANY, 
    NEW_COMPANY,
    DEL_COMPANY
} from './types'

// export function setCompanies(companies) {
//     return {
//         type: FETCH_COMPANIES,
//         companies
//     }
// }

// export function addCompany(company) {
//     return {
//         type: NEW_COMPANY,
//         company
//     }
// }

// export function getCompany(company) {
//     return {
//         type: FETCH_COMPANY,
//         company
//     }
// }

// export function removeCompany(id) {
//     return {
//         type: DEL_COMPANY,
//         id
//     }
// }

//fetch all companies
export function fetchCompanies() {
    return dispatch => {
        axios.get('http://localhost:3000/companies/')
        .then(companies => dispatch({
            type: FETCH_COMPANIES,
            payload: companies.data
        })); 
    }
}

//save company
export function saveCompany(company) {
    return dispatch => {
        axios.post('http://localhost:3000/companies/', {
            name: company.name, 
            address: company.address, 
            revenue: company.revenue, 
            code: company.code, 
            phone: company.phone
        }).then(company => dispatch({
            type: NEW_COMPANY,
            payload: company.data
        }));
    }
}

//get company
export const fetchCompany = id => dispatch =>  {
    axios.get(`http://localhost:3000/companies/${id}`)
    .then(company => dispatch({
        type: FETCH_COMPANY,
        payload: company.data
    }));
}

//get company
export const deleteCompany = id => dispatch =>  {
    let _id = id;
    axios.delete(`http://localhost:3000/companies/${id}`)
        .then(company => dispatch({
            type: DEL_COMPANY,
            payload: id
        }));
}
