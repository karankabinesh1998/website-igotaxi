import React, { Component } from 'react';
import Autocomplete from "react-google-autocomplete";



export default class HomeBooking extends Component {
  render() {
    return (
      <section class="tj-banner-form2">
        <div class="container">
          <div class="row">
            <div class="col-md-12 col-sm-12" style={{ backgroundColor: 'cadetblue' }}>
              <div class="tj-form2-tabs" style={{ backgroundColor: 'cadetblue' }}>
                <ul class="nav nav-tabs">
                  <li class="active"><a href="#one-way" data-toggle="tab">One Way</a></li>
                  <li><a href="#two-way" data-toggle="tab">Two Way</a></li>
                  <li><a href="#out-station" data-toggle="tab">Out Station</a></li>
                </ul>
              </div>
              <div class="tab-content" style={{ backgroundColor: 'cadetblue' }}>
                <div class="tab-pane active" id="one-way">
                  <div class="trip-frm2">
                    <div class="col-md-12 col-sm-12">
                      <h4>Picking Up</h4>
                      <div class="field-box">
                        <span class="fas fa-search"></span>
                        {/* <input type="text" name="trip_pick_loc" placeholder="Pickup Locations" /> */}
                        <Autocomplete
                          apiKey={'AIzaSyDj9EqaqYYH6O5IjmFs6ZVdW61-wwXUS2k'}
                          style={{ width: "100%",marginBottom:'7px',height:'51px',color:'#333'}}
                          onPlaceSelected={(place) => {
                            console.log(place);
                          }}
                          options={{
                            types: ["(regions)"],
                            componentRestrictions: { country: "ind" },
                          }}
                          />
                      </div>
                    </div>
                    <br/>
                    <div class="col-md-6 col-sm-6">
                      <div class="field-box">
                        <span class="fas fa-calendar-alt"></span>
                        <input type="text" name="trip_pick_date" placeholder="Select your Date" />
                      </div>
                    </div>
                    <div class="col-md-6 col-sm-6">
                      <div class="field-box">
                        <span class="far fa-clock"></span>
                        <input type="text" name="trip_time" placeholder="Select Timings" />
                      </div>
                    </div>
                    <div class="col-md-12 col-sm-12">
                      <h4>Dropping Off</h4>
                      <div class="field-box">
                        <span class="fas fa-search"></span>
                        <input type="text" name="trip_drop_loc" placeholder="Dropping Locations" />
                      </div>
                    </div>
                    <div class="col-md-6 col-sm-6">
                      <div class="field-box">
                        <span class="fas fa-calendar-alt"></span>
                        <input type="text" name="trip_drop_date" placeholder="Select your Date" />
                      </div>
                    </div>
                    <div class="col-md-6 col-sm-6">
                      <div class="field-box">
                        <span class="far fa-clock"></span>
                        <input type="text" name="drop_time" placeholder="Select Timings" />
                      </div>
                    </div>
                    <div class="col-md-9 col-sm-9">
                      <div class="field-box">
                        <input type="checkbox" name="fleet_coupon" id="fleet_coupon" />
                        <label for="fleet_coupon">I Have Promotional Code</label>
                      </div>
                    </div>
                    <div class="col-md-3 col-sm-3">
                      <button type="button" class="search-btn">Search Cabs <i class="fa fa-arrow-circle-right" aria-hidden="true"></i></button>
                    </div>
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
