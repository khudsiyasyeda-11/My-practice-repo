import axios from "axios";
import React, { Component } from "react";

export default class SendEnquiry extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      number: "",
      email: "",
      products: "",
      delivery: "",
      message: "",
      date: "",
    };
  }
  changeData = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  validate = (e) => {
    e.preventDefault();
    const { username, number, email } = this.state;
    const nameError = document.getElementById("nameError");
    const alphaExp = /(^[a-zA-Z][a-zA-Z\s]{0,20}[a-zA-Z]$)/;
    const numExp = /^[0-9]+$/;
    const emailExp = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    const numberError = document.getElementById("numberError");
    const emailError = document.getElementById("emailError");
    let nameStatus = false;
    let numStatus = false;
    let emailStatus = false;
    if (username === "") {
      nameError.textContent = "please enter your name ";
    } else {
      if (username.match(alphaExp)) {
        nameError.textContent = "";
        nameStatus = true;
      } else {
        nameError.textContent = "Only Characters";
      }
    }
    if (number === "") {
      numberError.textContent = "please enter your num";
    } else {
      if (number.match(numExp)) {
        if (number.length === 10) {
          numberError.textContent = "";
          numStatus = true;
        } else {
          numberError.textContent = "10 digits ";
        }
      } else {
        numberError.textContent = "Only digits";
      }
    }
    if (email === "") {
      emailError.textContent = "Invalid Email";
    } else if (email.match(emailExp)) {
      emailError.textContent = "";
      emailStatus = true;
    } else {
      emailError.textContent = "";
    }
    if (nameStatus && numStatus && emailStatus === true) {
      axios
        .post(`http://localhost:4000/enquiries`, this.state)
        .then(() => {
          alert("your enquiry sent sucessfully");
        })
        .catch((err) => console.log(err));
    }
  };
  render() {
    const { username, number, email, products, delivery, message, date } =
      this.state;
    return (
      <div>
        <div className="container center p-3 ">
          <h2>Order Form</h2>
          <form
            onSubmit={this.validate}
            className="text-bg-dark lays text-center p-5"
          >
            <select
              className="form-control mb-3"
              name="products"
              onChange={this.changeData}
              value={products}
            >
              <option hidden>Select the bouquet</option>
              <option>Bright Birthday Blooms</option>
              <option>Colorful Cheerful Arrangement</option>
              <option>Deluxe Happy Birthday Roses</option>
              <option>Luxury Wedding Centerpieces</option>
              <option>Classic Bridal Bouquet</option>
              <option>Serenity Floral Tribute</option>
              <option>Elegant White Lily Arrangement</option>
              <option>Cheerful Sunflower Bouquet</option>
              <option>Bright Healing Blooms</option>
              <option>Romantic Red Roses</option>
              <option>Elegant Pink Peonies</option>
            </select>
            <input
              type="date"
              name="date"
              value={date}
              onChange={this.changeData}
              className="form-control mb-3"
            />
            <input
              type="text"
              name="username"
              placeholder="Name"
              className="form-control mb-3"
              value={username}
              onChange={this.changeData}
            />
            <p id="nameError"></p>
            <input
              type="tel"
              name="number"
              placeholder="Phone Number"
              className="form-control mb-3"
              value={number}
              onChange={this.changeData}
            />
            <p id="numberError"></p>
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              className="form-control mb-3"
              value={email}
              onChange={this.changeData}
            />
            <p id="emailError"></p>

            <input
              type="text"
              value={delivery}
              onChange={this.changeData}
              name="delivery"
              className="form-control mb-3"
              placeholder="Delivery Address"
            />
            <textarea
              name="message"
              placeholder="Message"
              className="form-control mb-3"
              onChange={this.changeData}
              value={message}
            ></textarea>
            <input type="submit" className="btn btn-success text-center px-2" />
          </form>
        </div>
      </div>
    );
  }
}
