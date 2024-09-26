import React, { Component } from "react";
import '../App.css';

class Header extends Component {
  render() {
    return (
      <div id="header">
        <div id="left-header">
          <h2 id="header-name">{this.props.name}</h2>
          <p>{this.props.title}</p>
        </div>
        <div id="right-header">
          <p>
            Email: <a href="abc@gmail.com">{this.props.email_addr}</a>
          </p>
          <p>Web: {this.props.website}</p>
          <p>Mobile:{this.props.mobile}</p>
        </div>
      </div>
    );
  }
}

export default Header;
