import React, { Component } from 'react'
import swal from 'sweetalert';
import Bridge from '../../Middleware/Bridge';

export default class MyAccount extends Component {
  constructor(props){
    super(props);
    this.state={

    }
  }

  async componentDidMount(){
    
  };

  logOutUser=async()=>{
    try {
      await Bridge.userLogout(null,result=>{

        if(result.status===200){
          localStorage.removeItem("userDetail");
          localStorage.removeItem("loginToken");
           window.location.href="/authorization"; 
        }else{
          swal(result.message);
        }
      })
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    return (
      <React.Fragment>
        <div class="tj-inner-banner">
          <div class="container">
            <h2>User Account</h2>
          </div>
        </div>
        <div class="tj-breadcrumb">
          <div class="container">
            <ul class="breadcrumb-list">
              <li><a href="/">Home</a></li>
              <li class="active">User Account</li>
            </ul>
          </div>
        </div>
        <section class="tj-account-frm">
          <div class="container">
            <div class="row">
              <div class="col-md-12 col-sm-12">
                <div class="tj-tabs">
                  <ul class="nav nav-tabs" role="tablist">
                    <li class="active"><a href="#user_account" data-toggle="tab"><i class="far fa-user"></i> My Account</a></li>
                    <li><a href="#booking_history" data-toggle="tab">
                      <i class="far fa-chart-bar"></i> Booking History</a></li>
                    <li><a href="#payment_history" data-toggle="tab"><i class="far fa-credit-card"></i> Payment History</a></li>
                    <li><a href="#cancel_booking" data-toggle="tab"><i class="fas fa-times"></i> Cancel Booking</a></li>
                    <li><a href="javascript:void(0)" onClick={this.logOutUser} data-toggle="tab"><i class="fas fa-sign-out-alt"></i> Logout</a></li>
                  </ul>
                </div>
                <div class="tab-content">
                  <div class="tab-pane active" id="confirm_booking">
                    <form class="account-frm" method="POST">
                      <div class="col-md-6 col-sm-6">
                        <div class="account-field">
                          <label>First Name</label>
                          <span class="far fa-user"></span>
                          <input type="text" name="fname" placeholder="Enter First Name" />
                        </div>
                      </div>
                      <div class="col-md-6 col-sm-6">
                        <div class="account-field">
                          <label>Last Name</label>
                          <span class="far fa-user"></span>
                          <input type="text" name="lname" placeholder="Enter Last Name" />
                        </div>
                      </div>
                      <div class="col-md-6 col-sm-6">
                        <div class="account-field">
                          <label>Phone</label>
                          <span class="icon-phone icomoon"></span>
                          <input type="tel" name="phone_num" placeholder="Enter Phone Number" />
                        </div>
                      </div>
                      <div class="col-md-6 col-sm-6">
                        <div class="account-field">
                          <label>Email</label>
                          <span class="far fa-envelope"></span>
                          <input type="email" name="email_id" placeholder="Enter Email id" />
                        </div>
                      </div>
                      <div class="col-md-4 col-sm-4">
                        <div class="account-field">
                          <label>Old Password</label>
                          <span class="fas fa-lock"></span>
                          <input type="password" name="old_pass" placeholder="Password" />
                        </div>
                      </div>
                      <div class="col-md-4 col-sm-4">
                        <div class="account-field">
                          <label>New Password</label>
                          <span class="fas fa-lock"></span>
                          <input type="password" name="new_pass" placeholder="Password" />
                        </div>
                      </div>
                      <div class="col-md-4 col-sm-4">
                        <div class="account-field">
                          <label>Confirm Password</label>
                          <span class="fas fa-lock"></span>
                          <input type="password" name="confirm_pass" placeholder="Password" />
                        </div>
                      </div>
                      <div class="col-md-6 col-sm-6">
                        <div class="account-field">
                          <label>Profile Image</label>
                          <button class="file-btn"><i class="fas fa-download"></i> Upload Photo</button>
                          <span class="limit">Maximum file size : 6MB </span>
                        </div>
                      </div>
                      <div class="col-md-6 col-sm-6">
                        <button type="submit" class="save-btn">Save <i class="fa fa-arrow-circle-right" aria-hidden="true"></i></button>
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
