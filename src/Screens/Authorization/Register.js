import React, { Component } from 'react';
import '../CommonCss/commonStyle.css';
import { IconContext } from 'react-icons';
import { FaEnvelope , FaHeadphones , FaLock , FaUserAlt } from 'react-icons/fa';


export default class Register extends Component {
  constructor(props){
    super(props);
    this.state={
      username : "",
      email_id:"",
      password:""
    }
  }

  async componentDidMount(){
    try {
      
    } catch (error) {
      console.log(error);
    }
  };

  handleChange=async(e)=>{
    this.setState({
      [e.target.name] : e.target.value
    })
  };

  render() {
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
              <li class="active">Register</li>
            </ul>
          </div>
        </div>
        <section class="tj-register">
          <div class="container">
            <div class="row">
              <div class="col-md-12 col-sm-12">
                <div class="tj-tabs">
                  <ul class="nav nav-tabs" role="tablist">
                    <li><a href="#login" data-toggle="tab">Login</a></li>
                    <li class="active"><a href="#register" data-toggle="tab">Register</a></li>
                  </ul>
                </div>
                <div class="tab-content">
                  <div class="tab-pane" id="login">
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
                    <div class="col-md-6 col-sm-6">
                      <form class="login-frm" method="POST">
                        <div class="field-holder">
                        <IconContext.Provider value={{ color: 'red', className: 'form-input-icon' }}>
                            <FaEnvelope />
                          </IconContext.Provider>
                          <input type="email" name="login_email" placeholder="Enter your Email Address" />
                        </div>
                        <div class="field-holder">
                        <IconContext.Provider value={{ color: 'red', className: 'form-input-icon' }}>
                            <FaLock />
                          </IconContext.Provider>
                          <input type="password" name="name" placeholder="Password" />
                        </div>
                        <a href="#" class="forget-pass">Forget Password?</a>
                        <button type="submit" class="reg-btn">Login <i class="fa fa-arrow-circle-right" aria-hidden="true"></i></button>
                        <button type="submit" class="facebook-btn">Login with Facebook <i class="fa fa-arrow-circle-right" aria-hidden="true"></i></button>
                        <button type="submit" class="google-btn">Login with Google <i class="fa fa-arrow-circle-right" aria-hidden="true"></i></button>
                      </form>
                    </div>
                  </div>
                  <div class="tab-pane active" id="register">
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
                    <div class="col-md-6 col-sm-6">
                      <form class="reg-frm" method="POST">
                        <div class="field-holder">
                          <IconContext.Provider value={{ color: 'red', className: 'form-input-icon' }}>
                            <FaUserAlt />
                          </IconContext.Provider>
                          <input type="text" name="username" placeholder="Username" onChange={this.handleChange} value={this.state.username} />
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
                          <input type="password" name="name" placeholder="Password" autoComplete='new-password' />
                        </div>
                        <label for="terms">
                          <input type="checkbox" name="terms" id="terms" />
                          I accept terms & conditions
                        </label>
                        <button type="submit" class="reg-btn">Signup <i class="fa fa-arrow-circle-right" aria-hidden="true"></i></button>
                        <button type="submit" class="facebook-btn">Login with Facebook <i class="fa fa-arrow-circle-right" aria-hidden="true"></i></button>
                        <button type="submit" class="google-btn">Login with Google <i class="fa fa-arrow-circle-right" aria-hidden="true"></i></button>
                      </form>
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
