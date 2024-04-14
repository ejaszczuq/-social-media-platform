import React from 'react';

import './RegistrationForm.scss';

interface IRegistrationForm {}

const RegistrationForm: React.FC<IRegistrationForm> = () => {
   return (
      <div className="log-in-box">
         <h1>Create your Profile</h1>
         <h4>
            By completing your profile, you'll unlock the full potential of
            <br />
            our platform.
         </h4>
         <div className="authorization">
            <div className="google">
               <p>Continue with</p>
               <img className="google-icon" src="/icons/google.svg" alt="google-icon" />
            </div>
            <div className="x">
               <p>Continue with</p>
               <img className="x-icon" src="/icons/x.png" alt="x-icon" width={30} />
            </div>
         </div>
         <h3>or</h3>
         <div className="inputs">
            <label htmlFor="emailInp">
               <img src="/icons/mail.svg" alt="mail-icon" />
               &nbsp;Email&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
               <input type="text" name="emailInp" id="emailInp" placeholder="sogi-kuranu18@mail.com" />
            </label>
            <label htmlFor="usernameInp">
               <img src="/icons/user.svg" alt="user-icon" />
               Username
               <input type="text" name="usernameInp" id="usernameInp" placeholder="e.g Sogi Kuranu" />
            </label>
            <label htmlFor="usernameInp">
               <img src="/icons/password.svg" alt="pass-icon" />
               Password&nbsp;
               <input type="password" name="passwordInp" id="passwordInp" placeholder="∗∗∗∗∗∗" />
            </label>
            <button>Create Profile</button>
         </div>

         <p>
            By continuing you are agreeing to our <span>Terms of Service</span> and <span>Privacy policy</span>
         </p>
      </div>
   );
};

export default RegistrationForm;
