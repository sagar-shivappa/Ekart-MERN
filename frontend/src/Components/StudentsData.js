import React, { Component } from 'react'

export class StudentsData extends Component {
    handleDelete = (e) => {
        this.props.deleteStudent(e.target.id);
    }
    render() {
        return (
            <div>
                <table class="table" >
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">First</th>
                            <th scope="col">Last</th>
                            <th scope="col">Email</th>
                            <th scope="col">Actions</th>
                        </tr>
                    </thead>
                    <tbody data-testid="students-table">
                        {this.props.students.map(student => 
                            <tr key={student._id} data-testid={`data-row-${student._id}`}>
                            <th scope="row">{student._id}</th>
                            <td>{student.firstName}</td>
                            <td>{student.lastName}</td>
                            <td>{student.email}</td>
                            <td className="d-flex justify-content-around">
                                <button data-testid={`delete-${student._id}`} class="btn btn-danger" id={student._id} onClick={this.handleDelete}>Delete</button>
                            </td>
                        </tr>
                        )}
                        
                    </tbody>
                </table>
            </div>
        )
    }
}

export default StudentsData