import React from "react";
import PropTypes from "prop-types";
import googlepay from "../../images/googlepay.png";
import download from "../../images/download.png";
import logo from "../../images/logo.png";

const Footer = ({ contactInfo, companyInfo }) => {
  return (
    <div>
      <footer>
        <div className="card">
          <div className="card-body">
            <div className="row m-0">
              <div className="card col-12 col-md-4 footer">
                <div className="card-content">
                  <div className="footer_content">
                    <img className="footer_img2" src={logo} alt="logo" />
                  </div>
                  <div className="footer_content">
                    {" "}
                    <strong>Contact:</strong> {contactInfo.contact}
                  </div>
                  <div className="footer_content">
                    <strong>Email:</strong> {contactInfo.email}
                  </div>
                  <div className="footer_content">
                    <strong>Address</strong> {contactInfo.address}
                  </div>
                </div>
              </div>
              <div className="card col-12 col-md-4">
                <div className="card-content">
                  <div className="footer_content">
                    <strong>About</strong> {companyInfo.about}
                  </div>
                  <div className="footer_content">
                    <strong>Info</strong> {companyInfo.info}
                  </div>
                  <div className="footer_content">
                    <strong>Career</strong> {companyInfo.career}
                  </div>
                  <div className="footer_content">
                    <strong>Store</strong> {companyInfo.store}
                  </div>
                  <div>
                    <strong>Policies</strong> {companyInfo.policies}
                  </div>
                </div>
              </div>
              <div className="card col-12 col-md-4">
                <div className="card-content">
                  <div className="footer_content">
                    <img className="download" src={download} alt="googlepay" />
                  </div>
                  <div className="footer_content">
                    {" "}
                    <img className="download" src={googlepay} alt="googlepay" />
                  </div>

                  <div className="footer_content">
                    <a href="#00" className="fa fa-facebook footer-icon">
                      <span></span>
                    </a>
                    <a href="#00" className="fa fa-twitter footer-icon">
                      <span></span>
                    </a>
                    <a href="#00" className="fa fa-google footer-icon">
                      <span></span>
                    </a>
                    <a href="#00" className="fa fa-linkedin footer-icon">
                      <span></span>
                    </a>
                    <a href="#00" className="fa fa-youtube footer-icon">
                      <span></span>
                    </a>
                    <a href="#00" className="fa fa-instagram footer-icon">
                      <span></span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
              <p style={{color: "white"}}> Copyrights&copy; 2021. All rights reserved.</p>

        </div>
        
      </footer>
    </div>
  );
};

Footer.propTypes = {
  contactInfo: PropTypes.string,
  companyInfo: PropTypes.string,
};

export default Footer;
