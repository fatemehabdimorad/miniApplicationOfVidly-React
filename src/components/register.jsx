import React, { Component } from "react";
import Form from "./common/form";
import Joi from "joi-browser";
// import auth from "../services/authService";
// import * as userService from './../services/userService';
class Register extends Form {
  state = { data: { username: "", password: "", name: "" }, errors: {} };
  schema = {
    username: Joi.string().required().email().label("Username"),
    password: Joi.string().min(5).required().label("Password"),
    name: Joi.string().required().label("Name"),
  };

  // doSubmit = async () => {
  //   try {
  //    const response= await userService.register(this.state.data);
  // auth.loginWithJwt(response.headers['x-auth-token']);
  //  window.location="/";
  //   } catch (ex) {
  //     if (ex.response && ex.response.status === 400) {
  //       const errors = { ...this.state.errors };
  //       errors.username = ex.response.data;
  //       this.setState({ errors });
  //     }
  //   }
  // };
  // add this code to node: routes/users/.hearer('access-control-expose-headers' ,'x-auth-token')
  doSubmit = () => {
    console.log("submited");
  };
  render() {
    return (
      <div>
        <h1>Register</h1>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput("username", "Username", "email")}
          {this.renderInput("password", "Password", "password")}
          {this.renderInput("name", "Name")}
          {this.renderButton("Sign Up")}
        </form>
      </div>
    );
  }
}

export default Register;
