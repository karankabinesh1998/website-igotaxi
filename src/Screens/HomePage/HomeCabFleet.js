import React, { Component } from 'react';

export default class HomeCabFleet extends Component {
  render() {
    return (
      <section class="tj-cab-filter">
        <div class="container">
          <div class="row">
            <div class="col-md-12 col-sm-12">
              <div class="tj-heading-style">
                <h3>Our Car Fleet</h3>
              </div>
              <nav class="cab-filter-nav">
                <a href="#" data-filter="*" class="current">All</a>
                <a href="#" data-filter=".audi">Audi</a>
                <a href="#" data-filter=".benz">Benz</a>
                <a href="#" data-filter=".bmw">BMW</a>
                <a href="#" data-filter=".volvo">Volvo</a>
                <a href="#" data-filter=".zetta">Zetta</a>
              </nav>
            </div>
            <div class="cab-filter">
              <div class="audi bmw zetta col-md-4 col-sm-4 col-xs-12">
                <div class="cab-box">
                  <figure>
                    <img src="images/isotope_img1.jpg" alt="" />
                  </figure>
                  <div class="cab-desc">
                    <strong class="cab-price">$190 <span>/ day</span></strong>
                    <h4>Mercedes Benz Z-Series</h4>
                    <ul class="cab-meta">
                      <li><i class="fas fa-taxi"></i>Luxery</li>
                      <li><i class="fas fa-user-circle"></i>2 Passengers</li>
                      <li><i class="fas fa-tachometer-alt"></i>5.6/100 MPG</li>
                    </ul>
                    <a href="https://themesjungle.net/html/prime-cab/booking-form.html">Book Now <i class="fa fa-arrow-circle-right" aria-hidden="true"></i></a>
                  </div>
                </div>
              </div>

              <div class="benz zetta bmw volvo col-md-4 col-sm-4 col-xs-12">
                <div class="cab-box">
                  <figure>
                    <img src="images/isotope_img2.jpg" alt="" />
                  </figure>
                  <div class="cab-desc">
                    <strong class="cab-price">$230 <span>/ day</span></strong>
                    <h4>Mercedes Benz Sedan</h4>
                    <ul class="cab-meta">
                      <li><i class="fas fa-taxi"></i>Luxery</li>
                      <li><i class="fas fa-user-circle"></i>2 Passengers</li>
                      <li><i class="fas fa-tachometer-alt"></i>7.5/100 MPG</li>
                    </ul>
                    <a href="https://themesjungle.net/html/prime-cab/booking-form.html">Book Now <i class="fa fa-arrow-circle-right" aria-hidden="true"></i></a>
                  </div>
                </div>
              </div>

              <div class="benz volvo audi zetta col-md-4 col-sm-4 col-xs-12">
                <div class="cab-box">
                  <figure>
                    <img src="images/isotope_img3.jpg" alt="" />
                  </figure>
                  <div class="cab-desc">
                    <strong class="cab-price">$160 <span>/ day</span></strong>
                    <h4>Mercedes Benz Van</h4>
                    <ul class="cab-meta">
                      <li><i class="fas fa-taxi"></i>Luxery</li>
                      <li><i class="fas fa-user-circle"></i>8 Passengers</li>
                      <li><i class="fas fa-tachometer-alt"></i>6.6/100 MPG</li>
                    </ul>
                    <a href="https://themesjungle.net/html/prime-cab/booking-form.html">Book Now <i class="fa fa-arrow-circle-right" aria-hidden="true"></i></a>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>
    )
  }
}
