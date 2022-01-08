import React, { Component } from 'react';
import { FaMailBulk, FaMapMarkedAlt , FaMobile } from 'react-icons/fa';
import '../CommonCss/commonStyle.css';
import { IconContext } from 'react-icons';
import Bridge from '../../Middleware/Bridge';
import Validators from '../../HelperComponents/Validators';
import swal from 'sweetalert';

export default class Contact extends Component {
	constructor(props) {
		super(props);
		this.state = {
			name:'',
			email_id:'',
			subject:'',
			message:''
		}
	};

	handleInput=async(e)=>{
		this.setState({ [e.target.name] : e.target.value })
	};

  addContactUs=async()=>{
    const { name,email_id,message,subject }=this.state;
    const validateEmail = await Validators.emailValidation(email_id);
    if(!name){
      swal('Please enter the you name')
      return;
    }
    if (!email_id) {
      swal('Please enter the email id')
      return;
    } else if (validateEmail !== null) {
      swal('Please enter the valid email id')
      return;
    };
    if(!message){
      swal('Please enter the your message')
      return;
    };

    try {
      const formDate = {
        name : name,
        email_id:email_id,
        subject:subject,
        message:message
      };
      await Bridge.addContactUs(formDate,async result =>{
        if(result.status===200){
          this.setState({
            name:'',
            email_id:'',
            subject:'',
            message:''
          });
          swal('Your enquery had been submitted , we will contact you soon');
        }else{
          swal(result.message);
        }
      });
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    return (
      <React.Fragment>
        <div class="tj-inner-banner">
          <div class="container">
            <h2>Contact us</h2>
          </div>
        </div>
        <div class="tj-breadcrumb">
				<div class="container">
					<ul class="breadcrumb-list">
						<li><a href="/">Home</a></li>
						<li class="active">Contact us</li>
					</ul>
				</div>
	    	</div>
        {/* <div id="tj-map"></div> */}
        <section class="tj-contact-section">
				<div class="container">
					<div class="row">
						<div class="col-md-12 col-sm-12">
							<div class="tj-heading-style">
								<h3>Got any queries?</h3>
								<p>Feel free to fill up this form and one of our account managers will get in touch.</p>
							</div>
						</div>
						<div class="col-md-8 col-sm-8">
							<div class="form-holder">
								<div class="tj-contact-form" id="contact-form">
									<div class="row">
										<div class="col-md-6 col-sm-6">
                        <div class="inner-holder">
                          <label for="name">Name</label>
                          <input
                            placeholder="Enter Your Name"
                            name="name"
                            type="text" id="name"
                            value={this.state.name}
                            onChange={this.handleInput}
                             />
                        </div>
                      </div>
                      <div class="col-md-6 col-sm-6 no-pad">
                        <div class="inner-holder">
                          <label for="email">Email</label>
                          <input
                            placeholder="Enter Your Email"
                            name="email_id"
                            type="email"
                            value={this.state.email_id}
                            onChange={this.handleInput}
                            id="email" />
                        </div>
                      </div>
										<div class="col-md-12 col-sm-12">
											<div class="inner-holder">
												<label for="subject">Subject</label>
                          <input
                            placeholder="Your Subject"
                            name="subject"
                            type="text"
                            value={this.state.subject}
                            onChange={this.handleInput}
                            id="subject" />
											</div>
										</div>
										<div class="col-md-12 col-sm-12">
                        <div class="inner-holder">
                          <label for="message">Message</label>
                          <textarea name="message"
                            placeholder="Your Message"
                            value={this.state.message}
                            onChange={this.handleInput}
                            id="message"></textarea>
                        </div>
										</div>
										<div class="col-md-12 col-sm-12">
                        <div class="inner-holder">
                          <button class="btn-submit"
                            type="buton"
                            id="frm_submit_btn"
                            onClick={this.addContactUs}
                          >Send Message
                            <i class="fa fa-arrow-circle-right" aria-hidden="true"></i>
                          </button>
                        </div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div class="col-md-4 col-sm-4">
							<div class="address-box">
								<div class="add-info">
                    <IconContext.Provider value={{ color: 'red', className:'form-ico' ,style:{ fontSize:'44px' } }}>
                      <FaMapMarkedAlt />
                    </IconContext.Provider>
									<p>Vellore,TamilNadu,<br/> India</p>
								</div>
								<div class="add-info">
                    <IconContext.Provider value={{ color: 'red', className: 'form-ico', style: { fontSize: '44px' } }}>
                      <FaMobile />
                    </IconContext.Provider>
									<p>
										<a href="tel:+91-9940944413">+91-9940944413</a>
									</p>
								</div>
								<div class="add-info">
                    <IconContext.Provider value={{ color: 'red', className: 'form-ico', style: { fontSize: '44px' } }}>
                      <FaMailBulk />
                    </IconContext.Provider>
									<p>
										<a href="mailto:support@igotaxy.in">
										support@igotaxy.in</a>
										<a href="mailto:booking@igotaxy.in">booking@igotaxy.in</a>
									</p>
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
