import React from "react";
import logo from "../../images/logo.png";
import PropTypes from "prop-types";
import "../../App.css";


const NavBar = ({ menuBar }) => {

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#00">
          <img src={logo} alt="logo" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <span></span>
        </div>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <span></span>
        </div>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <span></span>
          <span></span>
        </div>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <span></span>
        </div>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <span></span>
        </div>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <form className="form-inline my-2 my-lg-0">
            <input
              className="form-control mr-sm-2 nav_search"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">
              Search
            </button>
          </form>
        </div>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <span></span>
        </div>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <span></span>
        </div>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <span></span>
        </div>
        <div
          className="collapse navbar-collapse nav-button"
          id="navbarSupportedContent"
        >
          <h6>{menuBar.login}</h6>
        </div>
        <div
          className="collapse navbar-collapse nav-button"
          id="navbarSupportedContent"
        >
          <h6>
            <i className="fa fa-cart-plus" aria-hidden="true"></i>&nbsp;Cart
          </h6>
        </div>
      </nav>

      <div></div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <a className="navbar-brand" href="#00">
          <map>{menuBar.storeLocation}</map>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse header_part"
          id="navbarNavAltMarkup"
        >
          <div className="navbar-nav">
            <a className="nav-item nav-link active" href="#00">
              {menuBar.home} <span className="sr-only">(current)</span>
            </a>
            <a className="nav-item nav-link" href="#00">
              {menuBar.aboutUs}
            </a>
            <a className="nav-item nav-link" href="#00">
              {menuBar.contactUs}
            </a>
            <a className="nav-item nav-link" href="#00">
              {menuBar.myAccount}
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
};

NavBar.propType = {
  menuBar: PropTypes.string,
};

export default NavBar;
