import React, { Component } from 'react';
import { IconContext } from 'react-icons';
import { MdEmail } from 'react-icons/md';
import { FiPhoneCall } from 'react-icons/fi';
import '../CommonCss/commonStyle.css';

export default class Header extends Component {
  render() {
    return (
      <React.Fragment>
        <div class="loader-outer">
				<div class="tj-loader">
					<img src="images/pre-loader.gif" alt=""/>
					<h2>Loading...</h2>
				</div>
			</div>
      <header class="tj-header">
        <div class="container">
          <div class="row">
            <div class="col-md-3 col-xs-12 col-sm-4">
              <div class="tj-logo">
                <h1><a href="/">I Go Taxi</a></h1>
              </div>
            </div>
            <div class="col-md-3 col-xs-12 col-sm-4" >
            <div class="info_box">
                <IconContext.Provider value={{ color: 'red', className: 'icon-effect' }}>
                  <MdEmail />
                </IconContext.Provider>
                <div class="info_text">
                  <span class="info_title">Address</span>
                  <span>Vellore,Tamil Nadu</span>
                </div>
              </div>
              </div>
            <div class="col-md-3 col-xs-12 col-sm-4">
              <div class="info_box">
              <IconContext.Provider value={{ color: 'red', className: 'icon-effect' }}>
                  <MdEmail />
                </IconContext.Provider>
                <div class="info_text">
                  <span class="info_title">Email Us</span>
                  <span><a href="mailto:booking@igotaxy.in">booking@igotaxy.in</a></span>
                </div>
              </div>
            </div>
            <div class="col-md-3 col-xs-12">
              <div class="phone_info">
                <div class="phone_icon">
                <IconContext.Provider value={{ color: 'white', className: 'phone-info-icon' }}>
                  <FiPhoneCall />
                </IconContext.Provider>
                </div>
                <div class="phone_text">
                  <span><a href="tel:+91-9940944413">+91-9940944413</a></span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="tj-nav-row">
          <div class="container">
            <div class="row">
              <div class="tj-nav-holder">
                <nav class="navbar navbar-default">
                  <div class="navbar-header">
                    <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#tj-navbar-collapse" aria-expanded="false">
                      <span class="sr-only">Menu</span>
                      <span class="icon-bar"></span>
                      <span class="icon-bar"></span>
                      <span class="icon-bar"></span>
                    </button>
                  </div>
                  <div class="collapse navbar-collapse" id="tj-navbar-collapse">
                    <ul class="nav navbar-nav">
                      <li>
                        <a href="/">Home</a>
                      </li>
                      <li>
                      <a href="/authorization">My Account</a>
                      </li>
                      <li>
                        <a href="/about-us">Aboutus</a>
                      </li>
                      <li><a href="/our-services">Our Services</a></li>                  
                      <li>
                        <a href="/contact">Contactus</a>
                      </li>
                      <li>
                        <a href="/privacy-and-policy">Privacy&Policy</a>
                      </li>
                    </ul>
                  </div>
                </nav>
                <div class="book_btn">
                  <a href="/">Book Now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      </React.Fragment>
    )
  }
}
