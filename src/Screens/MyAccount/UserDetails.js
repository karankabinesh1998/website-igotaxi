import React from 'react';
import Validators from '../../HelperComponents/Validators';

export default function UserDetails({
   first_name,
   last_name,
   mobile,
   email_id,
   old_password,
   new_password,
   confirm_password,
   handleInputChange,
   updateMyAccount
}) {
   return (
      <div class="account-frm">
         <div class="col-md-6 col-sm-6">
            <div class="account-field">
               <label>First Name</label>
               <span class="far fa-user"></span>
               <input type="text"
                  name="first_name"
                  value={first_name}
                  onChange={handleInputChange}
                  placeholder="Enter First Name" />
            </div>
         </div>
         <div class="col-md-6 col-sm-6">
            <div class="account-field">
               <label>Last Name</label>
               <span class="far fa-user"></span>
               <input type="text"
                  name="last_name"
                  value={last_name}
                  onChange={handleInputChange}
                  placeholder="Enter Last Name" />
            </div>
         </div>
         <div class="col-md-6 col-sm-6">
            <div class="account-field">
               <label>Phone</label>
               <span class="icon-phone icomoon"></span>
               <input type="tel"
                  name="mobile"
                  value={mobile}
                  maxLength={10}
                  onKeyPress={Validators.isNumber}
                  onChange={handleInputChange}
                  placeholder="Enter Phone Number" />
            </div>
         </div>
         <div class="col-md-6 col-sm-6">
            <div class="account-field">
               <label>Email</label>
               <span class="far fa-envelope"></span>
               <input type="email"
                  name="email_id"
                  value={email_id}
                  onChange={handleInputChange}
                  placeholder="Enter Email id" />
            </div>
         </div>
         <div class="col-md-4 col-sm-4">
            <div class="account-field">
               <label>Old Password</label>
               <span class="fas fa-lock"></span>
               <input type="password"
                  name="old_password"
                  value={old_password}
                  onChange={handleInputChange}
                  autoComplete='new-password'
                  placeholder="Password" />
            </div>
         </div>
         <div class="col-md-4 col-sm-4">
            <div class="account-field">
               <label>New Password</label>
               <span class="fas fa-lock"></span>
               <input
                  type="password"
                  name="new_password"
                  value={new_password}
                  onChange={handleInputChange}
                  placeholder="Password" />
            </div>
         </div>
         <div class="col-md-4 col-sm-4">
            <div class="account-field">
               <label>Confirm Password</label>
               <span class="fas fa-lock"></span>
               <input
                  type="password"
                  name="confirm_password"
                  placeholder="Password"
                  value={confirm_password}
                  onChange={handleInputChange}
               />
            </div>
         </div>
         <div class="col-md-6 col-sm-6"></div>
         <div class="col-md-6 col-sm-6">
            <button
               type="button"
               class="save-btn"
               onClick={updateMyAccount}
            >Save <i class="fa fa-arrow-circle-right" aria-hidden="true"></i></button>
         </div>
      </div>
   )
}
