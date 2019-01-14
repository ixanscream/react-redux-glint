import React, { Component } from 'react'
import { connect } from 'react-redux'
import { saveOffice } from '../actions/officeAction'
import DatePicker from 'react-date-picker'
import { toast } from 'react-toastify'

export class FormOffice extends Component {
    state = {
      errors: {},
      name: '',
      latitude: '',
      longtitude: '',
      date: '',
      company: ''
  }

  
  handleSubmit = async (e) => {
    e.preventDefault();
    if(this.handleValidation()){      
        const { name, latitude, longtitude, date, company } = this.state
        this.props.saveOffice({  name, latitude, longtitude, date, company })

        this.setState({
          name: '',
          latitude: '',
          longtitude: '',
          date: '',
          company: ''
        })
        
        this.notify();
    }
  }

  notify = () =>  {
    toast.success("Office submitted !");
  }

  handleValidation = () => {
    let errors = {};
    let formIsValid = true;

    //name
    if(this.state.name === ""){
       formIsValid = false;
       errors["name"] = "This field is required";
    }

    //latitude
    if(this.state.latitude === "" || this.state.latitude < 1){
        formIsValid = false;
        errors["latitude"] = "This field is required & number must be positive";
    }

    if(!this.state.latitude.match(/^[0-9]+$/) && this.state.latitude !== ""){
        formIsValid = false;
        errors["latitude"] = "This field is required & number must be positive";
     }  

     //longtitude
    if(this.state.longtitude === "" || this.state.longtitude < 1){
        formIsValid = false;
        errors["longtitude"] = "This field is required & number must be positive";
    }

    if(!this.state.longtitude.match(/^[0-9]+$/) && this.state.longtitude !== ""){
        formIsValid = false;
        errors["longtitude"] = "This field is required & number must be positive";
     }  

    //date
    if(this.state.date === "") {
        formIsValid = false;
        errors["date"] = "Please select date";
    }

    //company
    if(this.state.company === "") {
        formIsValid = false;
        errors["company"] = "Please select company";
    }

    this.setState({errors: errors});
    return formIsValid;
  }


  handleDateChange = date => { 
    this.setState({ date })
    let errors = this.state.errors
    errors['date'] = ''
    this.setState({ errors })    
  }

  handleSelectChange = (event) => {
      let index = event.nativeEvent.target.selectedIndex;
      this.setState({ company: event.nativeEvent.target[index].value})   
      let errors = this.state.errors
      errors['company'] = ''
      this.setState({ errors })    
  }

  handleChange = (e) => {
      this.setState({
          [e.target.name]: e.target.value
      });
  }
  render() {
    const options = this.props.companies.map((company) => (
      <option key={company.id} value={company.id}>
          {company.name}
      </option>
    ))
    return (
      <form name="officeForm" className="officeForm">
      
      <h3>Create Office</h3>  
        <div className="form-group">
            <label><b>Name:</b></label>
            <input 
                type="text" 
                name='name'
                className="form-control" 
                placeholder='name'
                onBlur={this.handleValidation}
                value={this.state.name}
                onChange={this.handleChange}  />
            <span style={{color: "red"}}>{this.state.errors["name"]}</span>
        </div>
        <div className="form-group">                    
            <label><b>Location:</b></label>
            <div className='row'>
                <div className='col-md-6'>
                    <input 
                        type="text" 
                        name='latitude'
                        className="form-control" 
                        placeholder='latitude'
                        onBlur={this.handleValidation}
                        value={this.state.latitude}
                        onChange={this.handleChange}  />
                    <span style={{color: "red"}}>{this.state.errors["latitude"]}</span>
                </div>
                <div className='col-md-6'>
                    <input 
                        type="text" 
                        name='longtitude'
                        className="form-control" 
                        placeholder='longtitude'
                        onBlur={this.handleValidation}
                        value={this.state.longtitude}
                        onChange={this.handleChange}  />
                    <span style={{color: "red"}}>{this.state.errors["longtitude"]}</span>
                </div>
            </div>                        
        </div>
        <div className="form-group">
            <label><b>Office Start Date:</b></label>                    
            <DatePicker
                className='form-control'
                name='date'
                onBlur={this.handleValidation}
                onChange={this.handleDateChange}
                value={this.state.date}/>
              <span style={{color: "red"}}>{this.state.errors["date"]}</span>
        </div>
        <div className="form-group">            
            <label><b>Company:</b></label>
            <select 
                className='form-control' 
                onBlur={this.handleValidation}
                value={this.state.company} 
                onChange={this.handleSelectChange}>
                <option value=''>select company</option>
                {options}
            </select>     
            <span style={{color: "red"}}>{this.state.errors["company"]}</span>     
        </div>
        <input type='button' className='btn btn-light btn-block' onClick={this.handleSubmit} value='submit'/>
    </form>
    )
  }
}


export default connect(null, {saveOffice})(FormOffice)
