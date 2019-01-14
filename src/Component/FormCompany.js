import React, { Component } from 'react'
import { connect } from 'react-redux'
import { saveCompany } from '../actions/companyAction'
import { fetchCodes } from '../actions/phonecodeAction'
import { ToastContainer, toast } from 'react-toastify';

export class FormCompany extends Component {
  state = {
      errors: {},
      name: '',
      address: '',
      revenue: '',
      code: '',
      phone: ''
  }

  componentDidMount() {
    this.props.fetchCodes();
  }
  
  notify = () =>  {
    toast.success("Company Submitted !", {
        position: toast.POSITION.TOP_LEFT
      });    
    }
  
  handleSubmit = () => {
    if(this.handleValidation()) { 
      const { name, address, revenue, code, phone } = this.state
      this.props.saveCompany({  name, address, revenue, code, phone })
      this.notify()
      this.setState({
        name: '',
        address: '',
        revenue: '',
        code: '',
        phone: ''
      })
    }
  }


  handleValidation = () => {
      let errors = {};
      let formIsValid = true;

      //name
      if(this.state.name === ""){
        formIsValid = false;
        errors["name"] = "This field is required";
      }

      //address
      if(this.state.address === ""){
          formIsValid = false;
          errors["address"] = "This field is required";
      }

      //revenue
      if(this.state.revenue === "" || this.state.revenue < 1){
          formIsValid = false;
          errors["revenue"] = "This field is required & number must be positive";
      }

    
      if(!this.state.revenue.match(/^[0-9]+$/) && this.state.revenue !== ""){
          formIsValid = false;
          errors["revenue"] = "This field is required & number must be positive";
      }  

      //code
      if(this.state.code === "") {
          formIsValid = false;
          errors["code"] = "Please select code";
      }

      //phone
      if(this.state.phone === "" || this.state.phone.length < 5){
          formIsValid = false;
          errors["phone"] = "This field is required & min lenght is 5";
      }

      if(!this.state.phone.match(/^[0-9]+$/) && this.state.phone !== ""){
          formIsValid = false;
          errors["phone"] = "Please input valid number";
      } 

      this.setState({errors: errors});
      return formIsValid;
    }

    handleSelectChange = (event) => {
        let index = event.nativeEvent.target.selectedIndex;
        this.setState({ code: event.nativeEvent.target[index].value})
        let errors = this.state.errors
        errors['code'] = ''
        this.setState({ errors })        
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

  render() {
    const codes = ( this.props.codes.map(code => 
        <option key={code.code} value={code.dial_code}>{code.name} - {code.dial_code}</option>)
      );
    return (
      <form name="companyForm" className="companyForm">
      <ToastContainer />
          <h3>Create Company</h3>
          <div className="form-group">
              <label><b>Name:</b></label>
              <input 
                  type="text" 
                  name='name' 
                  className="form-control" 
                  placeholder='name' 
                  onBlur={this.handleValidation}
                  value={this.state.name}  
                  onChange={this.handleChange} />
              <span style={{color: "red"}}>{this.state.errors["name"]}</span>
          </div>
          <div className="form-group">
              <label><b>Address:</b></label>
              <input 
                  type="text" 
                  name='address' 
                  className="form-control" 
                  placeholder='address'   
                  onBlur={this.handleValidation}
                  value={this.state.address}  
                  onChange={this.handleChange}/>
              <span style={{color: "red"}}>{this.state.errors["address"]}</span>
          </div>
          <div className="form-group">
              <label><b>Revenue:</b></label>
              <input 
                  type="text" 
                  name='revenue' 
                  className="form-control" 
                  placeholder='revenue'   
                  onBlur={this.handleValidation}
                  value={this.state.revenue}  
                  onChange={this.handleChange}/>
              <span style={{color: "red"}}>{this.state.errors["revenue"]}</span>
          </div>
          <div className="form-group">
          
              <label><b>Phone:</b></label>
              <div className='row'>
                  <div className='col-md-4'>
                  <select 
                      className='form-control' 
                      value={this.state.code} 
                      onBlur={this.handleValidation}
                      onChange={this.handleSelectChange}>
                      <option value=''>code</option>
                      {codes}
                  </select>   
                  <span style={{color: "red"}}>{this.state.errors["code"]}</span>
                  </div>
                  <div className='col-md-8'>
                      <input 
                          name='phone' 
                          type="text" 
                          className="form-control" 
                          placeholder='phone'    
                          onBlur={this.handleValidation} 
                          value={this.state.phone}  
                          onChange={this.handleChange}/>
                      <span style={{color: "red"}}>{this.state.errors["phone"]}</span>
                  </div>
              </div>
              
            </div>
            <button type="button" onClick={this.handleSubmit}  className="btn btn-light btn-block">Create</button>
        </form>
    )
  }
}


function mapStateToProps(state) {
    return {
      codes: state.codes
    }
  }

export default connect(mapStateToProps, {saveCompany, fetchCodes})(FormCompany)
