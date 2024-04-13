import React from 'react';

import './LogInForm.scss';

interface ILogInForm {}

const LogInForm: React.FC<ILogInForm> = () => {
   return (
      <div className="log-in-form">
         <h1>Log in</h1>
         <h3>to start creating</h3>
         <div className="inputs">
            <label htmlFor="userNameInp">
               Username
               <input type="text" id="userNameInp" name="userNameInp" />
            </label>
            <label htmlFor="passwordInp">
               Password
               <input type="password" id="passwordInp" name="passwordInp" />
            </label>
         </div>
         <p>Forgot password?</p>
         <button>
            Log in
            <svg
               xmlns="http://www.w3.org/2000/svg"
               width="24"
               height="24"
               viewBox="0 0 24 24"
               fill="none"
               stroke="currentColor"
               strokeWidth="2"
               strokeLinecap="round"
               strokeLinejoin="round"
            >
               <path stroke="none" d="M0 0h24v24H0z" fill="none" />
               <path d="M5 12l14 0" />
               <path d="M13 18l6 -6" />
               <path d="M13 6l6 6" />
            </svg>
         </button>
      </div>
   );
};

export default LogInForm;
