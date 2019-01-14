import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { deleteCompany } from '../actions/companyAction'
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css' 

export class CompanyItem extends Component {
    delCompany = (id) => {
        confirmAlert({
            title: 'Confirm to delete',
            message: 'Are you sure to do this.',
            buttons: [
              {
                label: 'Yes',
                onClick: () => { this.props.deleteCompany(id) }
              },
              {
                label: 'No',
                onClick: () => { }
              }
            ]
          })
    }
    render() {
        const { id, name, address, revenue, code, phone } = this.props.company;

        return (
            <div className='col-md-6' style={padder}>
                <div className="card">
                    <div className="card-body" >
                        <h5 className="card-title"> {name} 
                            <button type="button" className="close"  onClick={this.delCompany.bind(this, id)} >                            
                                <span aria-hidden="true">×</span>
                            </button>
                        </h5>                        
                        <Link to={`/detail/${id}`} style={linkStyle}>
                        <span style={cardStyle}>                  
                            <hr/>
                            <div className="card-text">
                            <dl>
                                <dt>Address</dt>
                                <dd>{address}</dd>
                                <dt>Revenue</dt>
                                <dd>{revenue}</dd>
                                <dt>Phone</dt>
                                <dd>({code}) - {phone}</dd>
                            </dl>
                            </div>
                        </span>
                        </Link>                        
                    </div>
                </div>
            </div>
        )
    }
}


const cardStyle = {
    background: 'transparent',
    color: 'grey',
    border:'none',
    cursor: 'pointer',
    marginBottom:'5px'
}

const padder = {
    marginBottom: '20px'
}

const linkStyle = {
    textDecoration:'none',
}

export default connect(null, { deleteCompany })(CompanyItem);