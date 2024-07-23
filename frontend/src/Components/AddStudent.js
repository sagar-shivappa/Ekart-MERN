import React, { Component } from 'react'

export class AddStudent extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         fname: "",
         lname: "",
         email: "",
      }
    }

    handleFirstNameChange = (e) => {
        let fname = e.target.value;
        this.setState({
            ...this.state,
            fname,
        })
    }

    handleLastNameChange = (e) => {
        let lname = e.target.value;
        this.setState({
            ...this.state,
            lname,
        })
    }
    handleEmailChange = (e) => {
        let email = e.target.value;
        this.setState({
            ...this.state,
            email,
        })
    }
    handleFormSubmit = (e) => {
        e.preventDefault();
        let newStudentDetails = {
            "firstName": this.state.fname,
            "lastName": this.state.lname,
            "email": this.state.email,
        }
        this.props.addStudent(newStudentDetails);
        this.setState({
         fname: "",
         lname: "",
         email: "",
        })
    } 
  render() {
    return (
      <div>
          <form className="container" onSubmit={this.handleFormSubmit}>
              <input data-testid="firstNameInput" class="form-control m-3" type="text" placeholder="First Name........" value={this.state.fname} onChange={this.handleFirstNameChange}/>
              <input data-testid="lastNameInput" class="form-control m-3" type="text" placeholder="Last Name........"  value={this.state.lname} onChange={this.handleLastNameChange}/>
              <input data-testid="emailInput" class="form-control m-3" type="email" placeholder="Email........"  value={this.state.email} onChange={this.handleEmailChange}/>
              <input data-testid="submitBtn" class="btn btn-primary m-3" type="submit" value="Add" />
          </form>
      </div>
    )
  }
}

export default AddStudent