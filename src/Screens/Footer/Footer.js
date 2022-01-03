import React, { Component } from 'react';
import { IconContext } from 'react-icons';
import { FaFacebookF, FaCcVisa, FaCcMastercard } from 'react-icons/fa';
import {
  AiOutlineTwitter, AiFillLinkedin, AiOutlineFolder, AiOutlineInstagram,
  AiFillHome, AiOutlineMail
} from 'react-icons/ai';
import { FiPhone, FiGlobe } from 'react-icons/fi';
import { SiPaytm, SiRazorpay } from 'react-icons/si';
import '../CommonCss/commonStyle.css';

export default class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    return (
      <React.Fragment>
        <section class="tj-cal-to-action">
          <div class="container">
            <div class="row">
              <div class="col-md-4 col-sm-4">
                <div class="cta-box">
                  <img src="images/cta-icon1.png" alt="" />
                  <div class="cta-text">
                    <strong>Best Price Guaranteed</strong>
                    <p>A more recently with desktop softy  like aldus page maker.</p>
                  </div>
                </div>
              </div>
              <div class="col-md-4 col-sm-4">
                <div class="cta-box">
                  <img src="images/cta-icon2.png" alt="" />
                  <div class="cta-text">
                    <strong>24/7 Customer Care</strong>
                    <p>A more recently with desktop softy  like aldus page maker.</p>
                  </div>
                </div>
              </div>
              <div class="col-md-4 col-sm-4">
                <div class="cta-box">
                  <img src="images/cta-icon3.png" alt="" />
                  <div class="cta-text">
                    <strong>Easy Bookings</strong>
                    <p>A more recently with desktop softy  like aldus page maker.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section class="tj-footer">
          <div class="container">
            <div class="row">
              <div class="col-md-4">
                <div class="about-widget widget">
                  <h3>About I Go Taxi</h3>
                  <p>Search for will uncover many web sites variables onto of passages of lorem ipsum available but the majority the words all predefined humour to met chunks recently with desktop.</p>
                  <ul class="fsocial-links">
                    <li><a href="http://www.facebook.com">
                      <IconContext.Provider value={{ color: 'lightgrey', className: 'footer-icon' }}>
                        <FaFacebookF />
                      </IconContext.Provider>
                    </a></li>
                    <li><a href="http://www.twitter.com">
                      <IconContext.Provider value={{ color: 'lightgrey', className: 'footer-icon' }}>
                        <AiOutlineTwitter />
                      </IconContext.Provider>
                    </a></li>
                    <li><a href="http://www.linkedin.com">
                      <IconContext.Provider value={{ color: 'lightgrey', className: 'footer-icon' }}>
                        <AiFillLinkedin />
                      </IconContext.Provider>
                    </a></li>
                    <li><a href="http://www.instagram.com">
                      <IconContext.Provider value={{ color: 'lightgrey', className: 'footer-icon' }}>
                        <AiOutlineInstagram />
                      </IconContext.Provider>
                    </a></li>
                  </ul>
                </div>
              </div>
              <div class="col-md-4">
                <div class="links-widget widget">
                  <h3>Explore Links</h3>
                  <ul class="flinks-list">
                    <li>
                      <IconContext.Provider value={{ color: 'lightgrey', className: 'footer-icon' }}>
                        <AiOutlineFolder />
                      </IconContext.Provider>
                      <a href="/coupons">Coupons</a></li>
                    <li>
                      <IconContext.Provider value={{ color: 'lightgrey', className: 'footer-icon' }}>
                        <AiOutlineFolder />
                      </IconContext.Provider>
                      <a href="/sitemap">Sitemap</a></li>
                    <li>
                      <IconContext.Provider value={{ color: 'lightgrey', className: 'footer-icon' }}>
                        <AiOutlineFolder />
                      </IconContext.Provider>
                      <a href="/cancellation">Cancellation</a></li>
                    <li>
                      <IconContext.Provider value={{ color: 'lightgrey', className: 'footer-icon' }}>
                        <AiOutlineFolder />
                      </IconContext.Provider>
                      <a href="/privacy-and-policy">Privacy Policy</a></li>
                    <li>
                      <IconContext.Provider value={{ color: 'lightgrey', className: 'footer-icon' }}>
                        <AiOutlineFolder />
                      </IconContext.Provider>
                      <a href="/contact">Contact Us</a></li>
                  </ul>
                </div>
              </div>

              <div class="col-md-3">
                <div class="contact-info widget">
                  <h3>Contact Info</h3>
                  <ul class="contact-box">
                    <li>
                      <IconContext.Provider value={{ color: 'lightgrey', className: 'footer-icon-end' }}>
                        <AiFillHome />
                      </IconContext.Provider>
                      Vellore,TamilNadu
                    </li>
                    <li>
                      <IconContext.Provider value={{ color: 'lightgrey', className: 'footer-icon-end' }}>
                        <AiOutlineMail />
                      </IconContext.Provider>
                      <a href="mailto:booking@igotaxy.in">
                        booking@igotaxy.in</a>
                    </li>
                    <li>
                      <IconContext.Provider value={{ color: 'lightgrey', className: 'footer-icon-end' }}>
                        <FiPhone />
                      </IconContext.Provider>
                      +91-9940944413
                    </li>
                    <li>
                      <IconContext.Provider value={{ color: 'lightgrey', className: 'footer-icon-end' }}>
                        <FiGlobe />
                      </IconContext.Provider>
                      <a href="/">www.igotaxy.in</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section class="tj-copyright">
          <div class="container">
            <div class="row">
              <div class="col-md-6 col-sm-6">
                <p>&copy; Copyrights 2022 <a href="/">I Go Taxi</a>. All Rights Reserved.</p>
              </div>
              <div class="col-md-6 col-sm-6">
                <ul class="payment-icons">
                  <li>
                    <IconContext.Provider value={{ color: 'lightgrey', className: 'footer-icon' }}>
                      <FaCcVisa />
                    </IconContext.Provider>
                  </li>
                  <li>
                    <IconContext.Provider value={{ color: 'lightgrey', className: 'footer-icon' }}>
                      <FaCcMastercard />
                    </IconContext.Provider>
                  </li>
                  <li>
                    <IconContext.Provider value={{ color: 'lightgrey', className: 'footer-icon' }}>
                      <SiRazorpay />
                    </IconContext.Provider>
                  </li>
                  <li>
                    <IconContext.Provider value={{ color: 'lightgrey', className: 'footer-icon' }}>
                      <SiPaytm />
                    </IconContext.Provider>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </React.Fragment>
    )
  }
}
