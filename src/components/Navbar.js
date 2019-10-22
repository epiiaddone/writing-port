import React, { Component } from "react";
import { FaAlignRight } from "react-icons/fa";
import { Link } from "react-router-dom";

export default class Navbar extends Component {
  state = {
    isOpen: false
  };
  handleToggle = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };
  render() {
    return (
      <nav class="primary-bg navbar navbar-expand-sm navbar-light bg-light">
        <a class="navbar-brand" href="#">
          Mark<span class="emp-txt-alt">Williams</span>
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <ul class="navbar-nav">
            <li class="nav-item">
              <Link
                to="/"
                className="nav-link"
                activeClassName="button--link__active"
              >
                Home
              </Link>
            </li>
            <li class="nav-item">
              <Link
                to="/portfolio"
                className="nav-link"
                activeClassName="button--link__active"
              >
                Portfolio
              </Link>
            </li>
            <li class="nav-item">
              <Link
                to="/services"
                className="nav-link"
                activeClassName="button--link__active"
              >
                Services
              </Link>
            </li>
            <li class="nav-item">
              <Link
                to="/about"
                className="nav-link"
                activeClassName="button--link__active"
              >
                About
              </Link>
            </li>
            <li class="nav-item">
              <Link
                to="/contact"
                className="nav-link"
                activeClassName="button--link__active"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
