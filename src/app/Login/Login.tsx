import React from 'react';

import './Login.scss';
import LogInBox from '../../components/LogInBox/LogInBox';

const LoginPage = () => {
   return (
      <div className="login">
         <h1>Login Page</h1>
         <LogInBox />
      </div>
   );
};

export default LoginPage;
