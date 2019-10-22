import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Footer extends Component {
  render() {
    return (
      <footer class="footer__container secondary-bg">
        <div class="footer__container__links">
          <div class="footer__container__item">
            <Link to="/" activeClassName="active">
              Home
            </Link>
          </div>
          <div class="footer__container__item">
            <Link to="/portfolio" activeClassName="active">
              Portfolio
            </Link>
          </div>
          <div class="footer__container__item">
            <Link to="/services" activeClassName="active">
              Services
            </Link>
          </div>
          <div class="footer__container__item">
            <Link to="/about" activeClassName="active">
              About
            </Link>
          </div>
          <div class="footer__container__item">
            <Link to="/contact" activeClassName="active">
              Contact
            </Link>
          </div>
        </div>

        <div class="footer-copyright text-center py-3">
          © 2018 Copyright: Mark Williams
        </div>
      </footer>
    );
  }
}
