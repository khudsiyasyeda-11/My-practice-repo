import axios from "axios";
import React, { Component } from "react";

export default class BasicRead extends Component {
  constructor() {
    super();
    this.state = {
      users: [],
    };
  }
  componentDidMount() {
    axios
      .get("https://fakestoreapi.com/users")
      .then((res) => {
        this.setState({
          users: res.data,
        });
      })
      .catch(() => {
        console.log("Failure");
      });
  }
  render() {
    return (
      <div className="container p-5 text-center">
        <h1>Users Data: {this.state.users.length}</h1>
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Address</th>
            </tr>
          </thead>
          <tbody>
            {this.state.users.map((user, index) => {
              return (
                <tr>
                  <td key={index}>{user.name.firstname}</td>
                  <td key={index}>{user.email}</td>
                  <td key={index}>{user.phone}</td>
                  <td key={index}>{user.address.city}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}
