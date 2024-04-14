import React from 'react';
import './Main.scss';
import { signOut } from 'firebase/auth';
import { auth } from '../../config/firebase';
import { useNavigate } from 'react-router-dom';

const MainPage = () => {
   const navigate = useNavigate();
   const logout = async () => {
      try {
         await signOut(auth);
         navigate('/login');
      } catch (err) {
         console.error(err);
      }
   };
   return (
      <div className="main-page">
         <h1>Main Page</h1>
         <button onClick={logout}>Log out</button>
      </div>
   );
};

export default MainPage;
