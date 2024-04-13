import React from "react";

import './RegistrationForm.scss'


interface IRegistrationForm {}

const RegistrationForm: React.FC<IRegistrationForm> = () => {
   return (
        <div className="log-in-box">
            <h1>Create your Profile</h1>
            <h4>By completing your profile, you'll unlock the full potential of our platform.</h4>
            <div className="authorization">
                <div className="google">
                    Continue with 
                </div>
                <div className="x">
                    Continue with 
                </div>
                </div>
                <h3>or</h3>
                <div className="inputs">
                <label htmlFor="emailInp" className="emailLabel">Email
                    <input type="text" name="emailInp" id="emailInp" />
                </label>
                <label htmlFor="usernameInp" className="usernameLabel">Username
                    <input type="text" name="usernameInp" id="usernameInp" />
                </label>
                <label htmlFor="usernameInp" className="passwordLabel">Password
                    <input type="password" name="passwordInp" id="passwordInp" />
                </label>
                <button>Create Profile</button>
            </div>

            <p>By continuing you are agreeing to our <span>Terms of Service</span> and <span>Privacy policy</span></p>
        </div>
   );
};

export default RegistrationForm;

