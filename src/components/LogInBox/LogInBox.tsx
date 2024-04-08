import React from 'react';

import './LogInBox.scss';

interface ILogInBox {}

const LogInBox: React.FC<ILogInBox> = () => {
   return (
      <div className="log-in-box">
         <h1>Log in</h1>
         <h3>to start creating</h3>
         <label htmlFor="userNameInp">
            <input type="text" id="userNameInp" name="userNameInp" />
         </label>
         <label htmlFor="passwordInp">
            <input type="password" id="passwordInp" name="passwordInp" />
         </label>
         <p>Forgot password?</p>
         <button>Log in</button>
      </div>
   );
};

export default LogInBox;
