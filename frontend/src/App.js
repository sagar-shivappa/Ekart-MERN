import AddStudent from './Components/AddStudent';
import StudentsData from './Components/StudentsData';
import React, { Component } from 'react'
import axios from 'axios';
import { apiUrl } from './apiUrl'

export class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      students: [ ],
    }
  }

  componentDidMount() {
    axios.get(`${apiUrl}students`)
      .then(response => this.setState({ students: response.data }))
  }

  componentDidUpdate() {
    axios.get(`${apiUrl}students`)
      .then(response => this.setState({ students: response.data }))
  }

  addStudent = (studentDetails) => {
    axios.post(`${apiUrl}student`, studentDetails)
      .then(response => {
        this.setState({ students: [...this.state.students, response.data] })
      })
  }
  deleteStudent = (id) => {
    axios.delete(`${apiUrl}student/${id}`)
      .then(
        response => {
            this.setState({});
        }
      );
  }

  render() {
    return (
      <div className="App">
        <AddStudent addStudent={this.addStudent} />
        <StudentsData students={this.state.students} deleteStudent={this.deleteStudent}/>
      </div>
    )
  }
}

export default App