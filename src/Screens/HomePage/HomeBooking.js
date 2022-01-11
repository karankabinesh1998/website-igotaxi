import React, { Component } from 'react';
import Autocomplete from "react-google-autocomplete";
import DatePickerModule from '../../PureComponent/DatePickerModule';
import moment from 'moment';
import swal from 'sweetalert';
import '../CommonCss/commonStyle.css';


export default class HomeBooking extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pickUpLocation: '',
      pickUpCity: null,
      dropOffLocation: '',
      dropUpCity: null,
      pickUpDate: '',
      pickUpDate_new: '',
      minTime: this.calculateMinTime(new Date()),
    }
  }

  handleDatePickChange = async (e) => {
    console.log('object', e)
  };

  calculateMinTime = date => {
    let isToday = moment(date).isSame(moment(), 'day');
    if (isToday) {
      let nowAddOneHour = moment(new Date()).add({ hours: 1 }).toDate();
      return nowAddOneHour;
    }
    return moment().startOf('day').toDate(); // set to 12:00 am today
  }

  setDropOffLocation = async (placeData) => {
    if (placeData?.formatted_address) {
      console.log('object', placeData?.formatted_address);
      let placesSplit = placeData?.formatted_address.split(',');
      console.log('split', placesSplit);
      if (placesSplit?.length === 4) {
        this.setState({
          dropOffLocation: placesSplit?.[0],
          dropUpCity: placesSplit?.[1]
        })
      } else if (placesSplit?.length === 3) {
        this.setState({
          dropOffLocation: placesSplit?.[0],
          dropUpCity: null
        })
      }
    }
  }

  setPickUpLocation = async (placeData) => {
    if (placeData?.formatted_address) {
      console.log('object', placeData?.formatted_address);
      let placesSplit = placeData?.formatted_address.split(',');
      console.log('split', placesSplit);
      if (placesSplit?.length === 4) {
        this.setState({
          pickUpLocation: placesSplit?.[0],
          pickUpCity: placesSplit?.[1]
        })
      } else if (placesSplit?.length === 3) {
        this.setState({
          pickUpLocation: placesSplit?.[0],
          pickUpCity: null
        })
      }
    }
  };

  searchCabs = async () => {
    const { pickUpLocation, pickUpCity, dropOffLocation, dropUpCity, pickUpDate,
      pickUpDate_new
    } = this.state;
    if (!pickUpLocation) {
      swal("Please select pick up location")
    }
    try {
      let formData = {};
      formData.pickUpLocation = pickUpLocation;
      formData.pickUpCity = pickUpCity;
      formData.dropOffLocation = dropOffLocation;
      formData.dropUpCity = dropUpCity;
      formData.pickUpDate = pickUpDate;
      formData.pickUpDate_new = pickUpDate_new;
      console.log(formData, 'formData');
    } catch (error) {
      console.log(error);
    }
  };

  handleDatePickChange = date => {
    let d = new Date(date)
    let chance_pick = `${d.getFullYear()}-${d.getMonth() + 1 > 9 ? d.getMonth() + 1 : `0${d.getMonth() + 1}`}-${d.getDate() > 9 ? d.getDate() : `0${d.getDate()}`} ${d.getHours() > 9 ? d.getHours() : `0${d.getHours()}`}:${d.getMinutes() > 9 ? d.getMinutes() : `0${d.getMinutes()}`}:${d.getSeconds() > 9 ? d.getSeconds() : `0${d.getSeconds()}`}`
    this.setState({
      pickUpDate: date,
      minTime: this.calculateMinTime(date),
      pickUpDate_new: chance_pick
    });
  }

  render() {
    return (
      <section class="tj-banner-form2">
        <div class="container">
          <div class="row">
            <div class="col-md-12 col-sm-12" style={{ backgroundColor: '#e8e8e8' }}>
              <div class="tj-form2-tabs" style={{ backgroundColor: '#e8e8e8' }} >
                <ul class="nav nav-tabs">
                  <li class="active"><a href="#one-way" data-toggle="tab">One Way</a></li>
                  <li><a href="#two-way" data-toggle="tab">Two Way</a></li>
                  {/* <li><a href="#out-station" data-toggle="tab">Out Station</a></li> */}
                </ul>
              </div>
              <div class="tab-content" style={{ backgroundColor: '#e8e8e8' }} >
                <div class="tab-pane active" id="one-way">
                  <div class="trip-frm2">
                    <div class="col-md-12 col-sm-12">
                      <h4>Picking Up</h4>
                      <div class="field-box">
                        <span class="fas fa-search"></span>
                        <Autocomplete
                          apiKey={'AIzaSyDj9EqaqYYH6O5IjmFs6ZVdW61-wwXUS2k'}
                          style={{ width: "100%", marginBottom: '7px', height: '51px', color: '#333' }}
                          onPlaceSelected={(place) => {
                            this.setPickUpLocation(place)
                          }}
                          options={{
                            types: ["(regions)"],
                            componentRestrictions: { country: "ind" },
                          }}
                        />
                      </div>
                    </div>
                    <br />
                    <div class="col-md-6 col-sm-6">
                      <div class="field-box">
                        {/* <DatePickerModule
                          startDate={this.state.pickUpDate}
                          HandlePickUpdate={this.handleDatePickChange}
                          minTime={this.state.minTime}
                        /> */}
                        <input type='date' style={{ width: '100%', height: '49px' }} />
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
                        <Autocomplete
                          apiKey={'AIzaSyDj9EqaqYYH6O5IjmFs6ZVdW61-wwXUS2k'}
                          style={{ width: "100%", marginBottom: '7px', height: '51px', color: '#333' }}
                          onPlaceSelected={(place) => {
                            this.setDropOffLocation(place)
                          }}
                          options={{
                            types: ["(regions)"],
                            componentRestrictions: { country: "ind" },
                          }}
                        />
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
                      <button
                        type="button"
                        class="search-btn"
                        onClick={this.searchCabs}
                      >
                        Search Cabs
                      </button>
                    </div>
                  </div>
                </div>
                <div class="tab-pane" id="two-way">
                  <div class="trip-frm2">
                    <div class="col-md-12 col-sm-12">
                      <h4>Picking Up</h4>
                      <div class="field-box">
                        <span class="fas fa-search"></span>
                        <Autocomplete
                          apiKey={'AIzaSyDj9EqaqYYH6O5IjmFs6ZVdW61-wwXUS2k'}
                          style={{ width: "100%", marginBottom: '7px', height: '51px', color: '#333' }}
                          onPlaceSelected={(place) => {
                            this.setPickUpLocation(place)
                          }}
                          options={{
                            types: ["(regions)"],
                            componentRestrictions: { country: "ind" },
                          }}
                        />
                      </div>
                    </div>
                    <br />
                    <div class="col-md-6 col-sm-6">
                      <div class="field-box">
                        <input type='date' style={{ width: '100%', height: '49px' }} />
                      </div>
                    </div>
                    <div class="col-md-6 col-sm-6">
                      <div class="field-box">
                        <span class="far fa-clock"></span>
                        <input type="text" name="trip_time" placeholder="Select Timings" />
                      </div>
                    </div>

                    <div class="col-md-6 col-sm-6">
                      <div class="field-box">
                        <input type='date' style={{ width: '100%', height: '49px' }} />
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
                        <Autocomplete
                          apiKey={'AIzaSyDj9EqaqYYH6O5IjmFs6ZVdW61-wwXUS2k'}
                          style={{ width: "100%", marginBottom: '7px', height: '51px', color: '#333' }}
                          onPlaceSelected={(place) => {
                            this.setDropOffLocation(place)
                          }}
                          options={{
                            types: ["(regions)"],
                            componentRestrictions: { country: "ind" },
                          }}
                        />
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
                      <button
                        type="button"
                        class="search-btn"
                        onClick={this.searchCabs}
                      >
                        Search Cabs
                      </button>
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
