import React, { Component } from 'react'
import { confirmAlert } from 'react-confirm-alert';
import { connect } from 'react-redux'
import { deleteOffice } from '../actions/officeAction'
import 'react-confirm-alert/src/react-confirm-alert.css' 

export class OfficeItem extends Component {
    delOffice = (id) => {
        confirmAlert({
          title: 'Confirm to delete',
          message: 'Are you sure to do this.',
          buttons: [
            {
              label: 'Yes',
              onClick: () => { this.props.deleteOffice(id) }
            },
            {
              label: 'No',
              onClick: () => { }
            }
          ]
        })
      }

    render() {
        const { id, name, latitude, longtitude, start } = this.props.office;
         return (
            <div className='col-md-6' style={padder}>
                <div className="card">
                    <div className="card-body" >
                        <h5 className="card-title"> {name} 
                            <button type="button" className="close" onClick={this.delOffice.bind(this, id)} >
                            <span aria-hidden="true">×</span>
                            </button>
                        </h5>
                        <span style={cardStyle}>                  
                            <hr/>
                            <div className="card-text">
                            <dl>
                                <dt>Location</dt>
                                <dd>
                                    Lat - {latitude} <br/>
                                    Long - {longtitude}
                                </dd>
                                <dt>Office Start Date</dt>
                                <dd>{start}</dd>
                            </dl>
                            </div>
                        </span>                        
                    </div>
                </div>
            </div>
        )
    }
}

const cardStyle = {
    background: 'transparent',
    color: 'grey',
    cursor: 'pointer'
}

const padder = {
    marginBottom: '20px'
}

export default connect(null, { deleteOffice })(OfficeItem);