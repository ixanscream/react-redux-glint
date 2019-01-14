import React, { Component } from 'react'
import CompanyItem from './CompanyItem'
import FormCompany from './FormCompany'
import FormOffice from './FormOffice'
import { fetchCompanies } from '../actions/companyAction'
import { connect } from 'react-redux'

export class CompaniesPage extends Component {
  componentDidMount() {
    this.props.fetchCompanies();
  }
  render() {    
    const companyList = (
      <div className='row'>
          { this.props.companies.map(company => <CompanyItem company={company} key={company.id} />) }
      </div>
    )
    return (
        <div>
          <div className='row'>
            <div className='col-md-6' style={lineStyle}>
              <FormCompany />
            </div>
            <div className='col-md-6'>
              <FormOffice companies={this.props.companies} />
            </div>
          </div>
          <hr />
          <h3>Companies</h3>
          {companyList}
        </div>
    )
  }
}

const lineStyle = {
  paddingRight:'20px',
  borderRight: '1px solid #ccc'
}


function mapStateToProps(state) {
  return {
    companies: state.companies.items
  }
}

export default connect(mapStateToProps, { fetchCompanies })(CompaniesPage)
