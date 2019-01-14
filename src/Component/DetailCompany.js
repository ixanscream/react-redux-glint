import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import OfficeItem from './OfficeItem'
import { connect } from 'react-redux'
import { fetchCompany } from '../actions/companyAction'
import { fetchOffices } from '../actions/officeAction'
import 'react-confirm-alert/src/react-confirm-alert.css' 

export class DetailCompany extends Component {
    componentDidMount() {
        this.props.fetchCompany(this.props.id);
        this.props.fetchOffices(this.props.id);
      }
  render() {
    const officeItem = this.props.offices.map((office) => (
        <OfficeItem key={office.id} id={office.id} office={office}/>
      ))
         const { name, address, revenue, code, phone } = this.props.company;
    return (
        <div>
            <h3>{name}</h3>
            <hr />
            <dl>
                <dt>Address</dt>
                <dd>{address}</dd>
                <dt>Revenue</dt>
                <dd>{revenue}</dd>
                <dt>Phone</dt>
                <dd>
                    ({code}) - {phone} <span className='float-right'>
                    <Link to='/' className='btn btn-light'>Back to Overview</Link></span> 
                </dd>
            </dl>         
            <hr />
            <div className='row'>
            {officeItem}
            </div>        
        </div>   
    )      
  }
}

function mapStateToProps(state) {
    return {
      company: state.companies.item,
      offices : state.offices
    }
  }
  
export default connect(mapStateToProps, { fetchCompany, fetchOffices })(DetailCompany)
  