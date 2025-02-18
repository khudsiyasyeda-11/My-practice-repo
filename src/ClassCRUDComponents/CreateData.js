import axios from "axios";
import React, { Component } from "react";

export default class CreateData extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      course: "",
      status: "",
    };
  }
  changeData = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  submitHandler = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:4000/students", this.state)
      .then((res) => {
        alert("New Student Added");
        this.setState({
          name: "",
          course: "",
          status: "",
        });
      })
      .catch((err) => console.log("error"));

    console.log(this.state);
  };
  render() {
    return (
      <div className="container p-5">
        <div className="row">
          <div className="container p-5 shadow col-lg-6 text-center">
            <h1>Add Students Data</h1>
            <form onSubmit={this.submitHandler}>
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
        </div>
      </div>
    );
  }
}
