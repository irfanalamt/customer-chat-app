import React, { Component } from "react";
/* eslint-disable jsx-a11y/anchor-is-valid */

class NavBar extends Component {
  render() {
    return (
      <nav class="navbar navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Navbar {this.props.counterNav}
          </a>
        </div>
      </nav>
    );
  }
}

export default NavBar;
