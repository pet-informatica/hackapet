import React, { Component } from "react";
import logo from "../assets/logo.gif";
import "../css/gif.css";

export default class Gif extends Component {
  render() {
    return (
      <div className="subscribe">
        <img src={logo} alt="logo" />
      </div>
    );
  }
}
