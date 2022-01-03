import React, { Component } from 'react';

export default class HomePage extends Component {
  render() {
    return (
      <React.Fragment>
        {/* <div class="loader-outer">
          <div class="tj-loader">
            <img src="images/pre-loader.gif" alt="" />
            <h2>Loading...</h2>
          </div>
        </div> */}
        <section class="tj-banner">
				<div class="container">
					<div class="row">
						<div class="col-md-12 col-sm-12">
							<div class="banner-caption">
								<div class="banner-inner bounceInRight animated delay-2s">
									<strong>More recently with desktop publishing software ncluding versions</strong>
									<h2>Get deals on Taxi Booking for Popular Cities</h2>
									<div class="banner-btns">
										<a href="https://themesjungle.net/html/prime-cab/contact.html" class="btn-style-1">Contact Us <i class="fa fa-arrow-circle-right" aria-hidden="true"></i></a>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
      <section class="tj-banner-form2">
				<div class="container">
					<div class="row">
						<div class="col-md-12 col-sm-12">
							<div class="tj-form2-tabs">
								<ul class="nav nav-tabs">
									<li class="active"><a href="#one-way" data-toggle="tab">One Way</a></li>
									<li><a href="#two-way" data-toggle="tab">Two Way</a></li>
									<li><a href="#out-station" data-toggle="tab">Out Station</a></li>
								</ul>
							</div>
							<div class="tab-content">
								<div class="tab-pane active" id="one-way">
									<form method="POST" class="trip-frm2">
										<div class="col-md-12 col-sm-12">
											<h4>Picking Up</h4>
											<div class="field-box">
												<span class="fas fa-search"></span>
												<input type="text" name="trip_pick_loc" placeholder="Pickup Locations"/>
											</div>
										</div>
										<div class="col-md-6 col-sm-6">
											<div class="field-box">
												<span class="fas fa-calendar-alt"></span>
												<input type="text" name="trip_pick_date" placeholder="Select your Date"/>
                      </div>
										</div>
										<div class="col-md-6 col-sm-6">
											<div class="field-box">
												<span class="far fa-clock"></span>
												<input type="text" name="trip_time" placeholder="Select Timings"/>
											</div>
										</div>
										<div class="col-md-12 col-sm-12">
											<h4>Dropping Off</h4>
											<div class="field-box">
												<span class="fas fa-search"></span>
												<input type="text" name="trip_drop_loc" placeholder="Dropping Locations"/>
											</div>
										</div>
										<div class="col-md-6 col-sm-6">
											<div class="field-box">
												<span class="fas fa-calendar-alt"></span>
												<input type="text" name="trip_drop_date" placeholder="Select your Date"/>
											</div>
										</div>
										<div class="col-md-6 col-sm-6">
											<div class="field-box">
												<span class="far fa-clock"></span>
												<input type="text" name="drop_time" placeholder="Select Timings"/>
											</div>
										</div>
										<div class="col-md-9 col-sm-9">
											<div class="field-box">
												<input type="checkbox" name="fleet_coupon" id="fleet_coupon"/>
												<label for="fleet_coupon">I Have Promotional Code</label>
											</div>
										</div>
										<div class="col-md-3 col-sm-3">
											<button type="submit" class="search-btn">Search Cabs <i class="fa fa-arrow-circle-right" aria-hidden="true"></i></button>	
										</div>
									</form>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
      </React.Fragment>
    )
  }
}
