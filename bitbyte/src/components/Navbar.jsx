import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="header_section" style={{backgroundColor:"#020230"}}>
      <div className="container-fluid">
        <nav className="navbar navbar-expand-lg custom_nav-container">
          <Link className="navbar-brand" to="/">
            <span>BitByte</span>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className=""></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item active">
                <Link className="nav-link" to="/service">
                  Services
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/experience">
                  Experience
                </Link>
              </li>
              
              {/* <li className="nav-item">
                <Link className="nav-link" to="/price">
                  Pricing
                </Link>
              </li> */}
              <li className="nav-item">
                <Link className="nav-link" to="/contact">
                  Contact Us
                </Link>
              </li>
            </ul>
            {/* <div className="quote_btn-container">
              {/* <form className="form-inline">
                <button className="btn nav_search-btn" type="submit">
                  <i className="fa fa-search" aria-hidden="true"></i>
                </button>
              </form> 
              <a href="tel:+01123455678990">
                <i className="fa fa-phone" aria-hidden="true"></i>
                <span>Call: +01 123455678990</span>
              </a>
            </div> */}
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
