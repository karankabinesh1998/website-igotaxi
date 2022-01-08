import React, { Component } from 'react';
import HomeBooking from './HomeBooking';
import HomeCabFleet from './HomeCabFleet';

export default class HomePage extends Component {
  render() {
    return (
      <React.Fragment>
        <section class="tj-banner">
				<div class="container">
					<div class="row">
						<div class="col-md-12 col-sm-12">
							<div class="banner-caption">
								<div class="banner-inner bounceInRight animated delay-2s">
									<strong>More recently with desktop publishing software ncluding versions</strong>
									<h2>Get deals on Taxi Booking for Popular Cities</h2>
									<div class="banner-btns">
										<a href="/contact" class="btn-style-1">Contact Us <i class="fa fa-arrow-circle-right" aria-hidden="true"></i></a>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
      
      <HomeBooking />

      <section class="tj-book-services">
				<div class="container">
					<div class="row">
						<div class="col-md-12 col-sm-12">
							<div class="tj-heading-style">
								<h3>Get Booking in 3 Steps</h3>
								<p>Lorem Ipsum passages, and more recently with desktop publishing</p>
							</div>
						</div>
					<div class="col-md-4 col-sm-4">
							<div class="service-box">
								<div class="icon-outer">
									<span>01</span>
									<i class="far fa-edit"></i>
								</div>
								<div class="service-caption">
									<h3>Make Reservation</h3>
									<p>A more recently with desktop softy like aldus page maker still in their infancy mak versions have evolved.</p>
									<a href="https://themesjungle.net/html/prime-cab/booking-form.html">Book Now <i class="fa fa-arrow-circle-right" aria-hidden="true"></i></a>
								</div>
							</div>
						</div>
						<div class="col-md-4 col-sm-4">
							<div class="service-box">
								<div class="icon-outer">
									<span>02</span>
									<i class="fas fa-taxi"></i>
								</div>
								<div class="service-caption">
									<h3>Vehicle Confirmation</h3>
									<p>A more recently with desktop softy like aldus page maker still in their infancy mak versions have evolved.</p>
									<a href="https://themesjungle.net/html/prime-cab/booking-form.html">Book Now <i class="fa fa-arrow-circle-right" aria-hidden="true"></i></a>
								</div>
							</div>
						</div>
						<div class="col-md-4 col-sm-4">
							<div class="service-box">
								<div class="icon-outer">
									<span>03</span>
									<i class="far fa-thumbs-up"></i>
								</div>
								<div class="service-caption">
									<h3>Enjoy your Trips</h3>
									<p>A more recently with desktop softy like aldus page maker still in their infancy mak versions have evolved.</p>
									<a href="https://themesjungle.net/html/prime-cab/booking-form.html">Book Now <i class="fa fa-arrow-circle-right" aria-hidden="true"></i></a>
								</div>
							</div>
						</div>
						</div>
				</div>
			</section>

      <section class="tj-facts2">
				<div class="container">
					<div class="row">
						<div class="col-md-3 col-sm-3">
							<div class="fact-outer">
								<i class="far fa-smile"></i>
								<div class="fact-desc">
									<h3 class="fact-num">90</h3>
									<strong>K</strong>
									<span>Happy Clients</span>
								</div>
							</div>
						</div>
						<div class="col-md-3 col-sm-3">
							<div class="fact-outer">
								<i class="fas fa-tachometer-alt"></i>
								<div class="fact-desc">
									<h3 class="fact-num">85</h3>
									<strong>K</strong>
									<span>Tidal Rides</span>
								</div>
							</div>
						</div>
						<div class="col-md-3 col-sm-3">
							<div class="fact-outer">
								<i class="fas fa-user-circle"></i>
								<div class="fact-desc">
									<h3 class="fact-num">280</h3>
									<span>Our Drivers</span>
								</div>
							</div>
						</div>
						<div class="col-md-3 col-sm-3">
							<div class="fact-outer">
								<i class="far fa-map"></i>
								<div class="fact-desc">
									<h3 class="fact-num">105</h3>
									<span>Branches</span>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
      <HomeCabFleet />
      </React.Fragment>
    )
  }
}
