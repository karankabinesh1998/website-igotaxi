import React, { Component } from 'react'
import swal from 'sweetalert';
import '../CommonCss/commonStyle.css';
import Bridge from '../../Middleware/Bridge';
import { FaChartBar , FaUserAlt } from 'react-icons/fa';
import { IconContext } from 'react-icons';
import Validators from '../../HelperComponents/Validators';
import UserDetails from './UserDetails';

export default class MyAccount extends Component {
  constructor(props){
    super(props);
    this.state={
        first_name : "",
        last_name:"",
        mobile:"",
        email_id:"",
        new_password:null,
        old_password:null,
        confirm_password:null
    }
  }

  async componentDidMount(){
    try {
      await Bridge.myAccountDetails(result=>{
        if(result.status===200){
           const userData = result?.data?.[0];
           this.setState({
             first_name : userData?.first_name,
             last_name:userData?.last_name,
             mobile:userData?.mobile,
             email_id:userData?.email_id
           })
        }else{
          swal(result.message);
        }
      })
    } catch (error) {
      console.log(error);
    }
  };

  commonFunction=async()=>{
    await Bridge.myAccountDetails(result=>{
      if(result.status===200){
         const userData = result?.data?.[0];
         this.setState({
           first_name : userData?.first_name,
           last_name:userData?.last_name,
           mobile:userData?.mobile,
           email_id:userData?.email_id
         })
      }else{
        swal(result.message);
      }
    })
  }

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
  };

  handleInputChange=async(e)=>{
    this.setState({
      [e.target.name] : e.target.value
    })
  };

  updateMyAccount = async () => {
    const {
      last_name, first_name,
      mobile, email_id,
      old_password, new_password,
      confirm_password
    } = this.state;
   
    const validatePhone = await Validators.phoneNumberValidation(mobile);
    if (validatePhone) {
      swal(validatePhone);
      return;
    };

    const validateEmail = await Validators.emailValidation(email_id);
    if (!email_id) {
      swal('Please enter the email id')
      return;
    } else if (validateEmail !== null) {
      swal('Please enter the valid email id')
      return;
    };

    const formData = {};
    formData.first_name =first_name;
    formData.last_name=last_name;
    formData.mobile=mobile;
    formData.email_id=email_id;
    if(new_password && !old_password){
      swal("Please enter the old password");
      return;
    }
    if (old_password) {
      if (new_password && !confirm_password) {
        swal("Please enter the confirm password")
        return;
      };
      if(new_password !== null && new_password !== confirm_password){
        swal("new password and confirm password are not matching")
        return;
      }
      if (new_password !== null && new_password !=="") {
        formData.old_password = old_password;
        formData.new_password = new_password;
      }
    }

    try {
        await Bridge.updateAccountDetails(formData,async result=>{
          if(result.status===200){
            // console.log(result);
            swal("profile updated successfully");
            window.location.reload();
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
                    <li class="active"><a href="#user_account" data-toggle="tab">
                    {/* <IconContext.Provider value={{ color: 'white', className: 'form-ico' }}>
                        <FaUserAlt />
                      </IconContext.Provider> */}
                      My Account</a></li>
                    <li><a href="#booking_history" data-toggle="tab">
                      {/* <IconContext.Provider value={{ color: '#444444', className: 'icon-account' }}>
                        <FaChartBar />
                      </IconContext.Provider> */}
                       Booking History</a></li>
                    <li><a href="#payment_history" data-toggle="tab"><i class="far fa-credit-card"></i> Payment History</a></li>
                    <li><a href="#cancel_booking" data-toggle="tab"><i class="fas fa-times"></i> Cancel Booking</a></li>
                    <li><a href="javascript:void(0)" onClick={this.logOutUser} data-toggle="tab"><i class="fas fa-sign-out-alt"></i> Logout</a></li>
                  </ul>
                </div>
                <div class="tab-content">
                  <div class="tab-pane active" id="confirm_booking">
                    <UserDetails 
                      first_name={this.state.first_name}
                      last_name={this.state.last_name}
                      mobile={this.state.mobile}
                      email_id={this.state.email_id}
                      old_password={this.state.old_password}
                      new_password={this.state.new_password}
                      confirm_password={this.state.confirm_password}
                      handleInputChange={this.handleInputChange}
                      updateMyAccount={this.updateMyAccount}
                    />
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
