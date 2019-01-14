import { combineReducers } from 'redux'
import companies from './companyReducer'
import codes from './phonecodeReducer'
import offices from './officeReducer'

export default combineReducers({
    companies,
    codes,
    offices
})