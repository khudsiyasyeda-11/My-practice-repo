import axios from "axios";
import React, { Component } from "react";

export default class StudentsData extends Component {
  constructor() {
    super();
    this.state = {
      students: [],
      id: "",
      name: "",
      status: "",
      course: "",
    };
  }
  componentDidMount() {
    axios
      .get("http://localhost:4000/students")
      .then((res) => {
        this.setState({
          students: res.data,
        });
      })
      .catch((err) => console.log("error"));
  }
  deleteStu = (id) => {
    axios
      .delete("http://localhost:4000/students/" + id)
      .then((res) => alert("Students data deleted sucessfully"))
      .catch((err) => console.log("error"));
  };
  getOneElement = (id) => {
    axios
      .get("http://localhost:4000/students/" + id)
      .then((res) => {
        this.setState({
          id: res.data.id,
          name: res.data.name,
          course: res.data.course,
          status: res.data.status,
        });
      })
      .catch((err) => console.log("error"));
  };
  changeData = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
    console.log([e.target.name], e.target.value);
  };
  submitHandler = (e) => {
    e.preventDefault();
    const { id, status, name, course } = this.state;
    axios
      .put("http://localhost:4000/students/" + id, {
        id,
        status,
        name,
        course,
      })
      .then((res) => alert("Student Data Updated"))
      .catch((err) => console.log("error"));
  };

  render() {
    return (
      <div className="container p-5 text-center">
        <h1>Students Data</h1>
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>Name</th>
              <th>Course</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {this.state.students.map((stud, index) => {
              return (
                <tr>
                  <td key={index}>{stud.name}</td>
                  <td key={index}>{stud.course}</td>
                  <td key={index}>{stud.status} </td>
                  <td>
                    <button onClick={() => this.deleteStu(stud.id)}>
                      delete
                    </button>
                    <button onClick={() => this.getOneElement(stud.id)}>
                      Edit
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <form className="shadow p-5 text-center" onSubmit={this.submitHandler}>
          <input
            type="text"
            name="name"
            placeholder="Student Name"
            value={this.state.name}
            className="form-control mb-3"
            onChange={this.changeData}
          />
          <input
            type="text"
            name="course"
            placeholder="Course"
            value={this.state.course}
            className="form-control mb-3"
            onChange={this.changeData}
          />
          <input
            type="text"
            name="status"
            placeholder="Status"
            value={this.state.status}
            className="form-control mb-3"
            onChange={this.changeData}
          />
          <input
            type="submit"
            placeholder="submit"
            className="bg-success rounded-3"
          />
        </form>
      </div>
    );
  }
}
