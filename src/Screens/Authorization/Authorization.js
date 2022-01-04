import React, { Component } from 'react';
import '../CommonCss/commonStyle.css';
import { IconContext } from 'react-icons';
import { FaEnvelope, FaHeadphones, FaLock, FaUserAlt, FaMobile } from 'react-icons/fa';
import Bridge from '../../Middleware/Bridge';
import Validators from '../../HelperComponents/Validators';
import swal from 'sweetalert';


export default class Authorization extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      email_id: "",
      password: "",
      mobile: "",
      loginOrRegister: true,
      termsAndConditions : false
    }
  }

  async componentDidMount() {
    try {
      const userDetails = localStorage.getItem("userDetail") ? JSON.parse(localStorage.getItem("userDetail")) : null;
      console.log('object',userDetails);
      if(userDetails){
        window.location.href="/my-account";
      }
    } catch (error) {
      console.log(error);
    }
  };

  handleChange = async (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  };

  userLogin = async () => {
    const { mobile, password } = this.state;
    const validatePhone = await Validators.phoneNumberValidation(mobile);
    if (validatePhone) {
      swal(validatePhone);
      return;
    };
    try {
      const formData = {
        mobile: mobile,
        password: password
      };
      const result = await Bridge.userLogin(formData, result => {
        console.log(result);
        if (result.status == 200) {
          localStorage.setItem("userDetail",JSON.stringify(result?.data[0]));
          localStorage.setItem("loginToken",result.data?.[0]?.login_token);
          swal("Welcome to I Go Taxi , you have successfully logged In");
          window.location.href="/my-account";
        } else {
          swal(result.message)
        }
      })
    } catch (error) {
      console.log(error);
    }
  };

  addUser = async () => {
    const { username, email_id, mobile, password ,termsAndConditions } = this.state;
    if (!username) {
      swal("Please enter the username");
      return;
    }
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
    if (!password) {
      swal("Please enter the password");
      return;
    }
    if(!termsAndConditions){
      swal("Please accept the terms and conditions")
      return;
    }
    try {
      const formData = {
        username: username.trim(),
        email_id: email_id.toLowerCase(),
        mobile: mobile,
        password: password
      };

      await Bridge.addUser(formData, result => {
        console.log(result);
        if (result.status == 200) {
          this.setState({
            username:"",
            email_id:"",
            password:""
          })
           swal("Welcome to I Go Taxi , you have successfully registered the account");
           this.setState({
             loginOrRegister : false
           });
        } else {
          swal(result.message)
        }
      })

    } catch (error) {
      console.log(error);
    }
  };

  checkTermsAndConditon=async(e)=>{
    this.setState({
      termsAndConditions : e.target.checked
    })
  }

  render() {
    const { loginOrRegister } = this.state;
    return (
      <React.Fragment>
        <div class="tj-inner-banner">
          <div class="container">
            <h2>Register</h2>
          </div>
        </div>
        <div class="tj-breadcrumb">
          <div class="container">
            <ul class="breadcrumb-list">
              <li><a href="/">Home</a></li>
              <li class="active">{loginOrRegister ? 'Login' : 'Register'}</li>
            </ul>
          </div>
        </div>
        <section class="tj-login">
          <div class="container">
            <div class="row">
              <div class="col-md-12 col-sm-12">
                <div class="tj-tabs">
                  <ul class="nav nav-tabs" role="tablist">
                    <li class={loginOrRegister ? 'active' : null} >
                      <a href="#login" data-toggle="tab" onClick={()=>this.setState({ loginOrRegister : true })} >Login</a>
                      </li>
                    <li class={loginOrRegister ? null : 'active'}>
                      <a href="#register" data-toggle="tab" onClick={()=>this.setState({ loginOrRegister : false })}>Register</a>
                      </li>
                  </ul>
                </div>
                <div class="tab-content">
                  <div class={loginOrRegister ? "tab-pane active" : "tab-pane" } id="login">
                  <div class="col-md-6 col-sm-6">
                      <div class="login-frm" method="POST">
                        <div class="field-holder">
                          <IconContext.Provider value={{ color: 'red', className: 'form-input-icon' }}>
                            <FaMobile />
                          </IconContext.Provider>
                          <input type="text" name="mobile"
                            placeholder="Enter your mobile number"
                            onChange={this.handleChange}
                            value={this.state.mobile}
                            maxLength={10}
                            onKeyPress={Validators.isNumber} />
                        </div>
                        <div class="field-holder">
                          <IconContext.Provider value={{ color: 'red', className: 'form-input-icon' }}>
                            <FaLock />
                          </IconContext.Provider>
                          <input type="password" name="password"
                            placeholder="Password" onChange={this.handleChange}
                            autoComplete='new-password'
                          />
                        </div>
                        <a href="#" class="forget-pass">Forget Password?</a>
                        <button type="button" class="reg-btn" onClick={this.userLogin} >Login</button>
                        <button type="submit" class="facebook-btn">Login with Facebook <i class="fa fa-arrow-circle-right" aria-hidden="true"></i></button>
                        <button type="submit" class="google-btn">Login with Google <i class="fa fa-arrow-circle-right" aria-hidden="true"></i></button>
                      </div>
                    </div>
                    <div class="col-md-6 col-sm-6">
                      <div class="login-cta">
                        <ul class="cta-list">
                          <li>
                            <IconContext.Provider value={{ color: 'red', className: 'auth-icons' }}>
                              <FaEnvelope />
                            </IconContext.Provider>
                            <div class="cta-info">
                              <strong>30 Days Money Back Guarantee</strong>
                              <p>A more recently with desktop softy like aldus pages maker still versions have evolved.</p>
                            </div>
                          </li>
                          <li>
                            <IconContext.Provider value={{ color: 'red', className: 'auth-icons' }}>
                              <FaHeadphones />
                            </IconContext.Provider>
                            <div class="cta-info">
                              <strong>24/7 Customer Support</strong>
                              <p>A more recently with desktop softy like aldus pages maker still versions have evolved.</p>
                            </div>
                          </li>
                          <li>
                            <IconContext.Provider value={{ color: 'red', className: 'auth-icons' }}>
                              <FaLock />
                            </IconContext.Provider>
                            <div class="cta-info">
                              <strong>100% Secure Payment</strong>
                              <p>A more recently with desktop softy like aldus pages maker still versions have evolved.</p>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div class={loginOrRegister ? "tab-pane" : "tab-pane active" } id="register">
                    <div class="col-md-6 col-sm-6">
                      <div class="reg-frm" method="POST">
                        <div class="field-holder">
                          <IconContext.Provider value={{ color: 'red', className: 'form-input-icon' }}>
                            <FaUserAlt />
                          </IconContext.Provider>
                          <input type="text" name="username" placeholder="Username" onChange={this.handleChange} value={this.state.username} />
                        </div>
                        <div class="field-holder">
                          <IconContext.Provider value={{ color: 'red', className: 'form-input-icon' }}>
                            <FaMobile />
                          </IconContext.Provider>
                          <input type="text" name="mobile"
                            placeholder="Enter your mobile number"
                            onChange={this.handleChange}
                            value={this.state.mobile}
                            maxLength={10}
                            onKeyPress={Validators.isNumber} />
                        </div>
                        <div class="field-holder">
                          <IconContext.Provider value={{ color: 'red', className: 'form-input-icon' }}>
                            <FaEnvelope />
                          </IconContext.Provider>
                          <input type="email" name="email_id" placeholder="Enter your Email Address" onChange={this.handleChange} value={this.state.email_id} />
                        </div>
                        <div class="field-holder">
                          <IconContext.Provider value={{ color: 'red', className: 'form-input-icon' }}>
                            <FaLock />
                          </IconContext.Provider>
                          <input type="password" name="password" placeholder="Password" onChange={this.handleChange} autoComplete='new-password' />
                        </div>
                        <label for="terms">
                          <input type="checkbox" name="terms" id="terms" checked={this.state.termsAndConditions} onClick={this.checkTermsAndConditon} />
                          <a href='/privacy-and-policy' target='_blank'>I accept terms & conditions</a>
                        </label>
                        <button type="button" onClick={this.addUser} class="reg-btn">Signup</button>
                        <button type="submit" class="facebook-btn">Login with Facebook <i class="fa fa-arrow-circle-right" aria-hidden="true"></i></button>
                        <button type="submit" class="google-btn">Login with Google <i class="fa fa-arrow-circle-right" aria-hidden="true"></i></button>
                      </div>
                    </div>
                    <div class="col-md-6 col-sm-6">
                      <div class="reg-cta">
                        <ul class="cta-list">
                          <li>
                            <IconContext.Provider value={{ color: 'red', className: 'auth-icons' }}>
                              <FaEnvelope />
                            </IconContext.Provider>
                            <div class="cta-info">
                              <strong>30 Days Money Back Guarantee</strong>
                              <p>A more recently with desktop softy like aldus pages maker still versions have evolved.</p>
                            </div>
                          </li>
                          <li>
                            <IconContext.Provider value={{ color: 'red', className: 'auth-icons' }}>
                              <FaHeadphones />
                            </IconContext.Provider>
                            <div class="cta-info">
                              <strong>24/7 Customer Support</strong>
                              <p>A more recently with desktop softy like aldus pages maker still versions have evolved.</p>
                            </div>
                          </li>
                          <li>
                            <IconContext.Provider value={{ color: 'red', className: 'auth-icons' }}>
                              <FaLock />
                            </IconContext.Provider>
                            <div class="cta-info">
                              <strong>100% Secure Payment</strong>
                              <p>A more recently with desktop softy like aldus pages maker still versions have evolved.</p>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
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
