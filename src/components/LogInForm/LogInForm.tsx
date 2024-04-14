import React, { useState } from 'react';

import { getFirestore, doc, getDoc } from 'firebase/firestore';
import { signInWithEmailAndPassword } from 'firebase/auth';

import './LogInForm.scss';
import { auth } from '../../config/firebase';
import { useNavigate } from 'react-router-dom';

interface ILogInForm {}

const LogInForm: React.FC<ILogInForm> = () => {
   const [username, setUsername] = useState('');
   const [password, setPassword] = useState('');

   const db = getFirestore();

   const navigate = useNavigate();

   const login = async () => {
      try {
         const docRef = doc(db, 'users', username);
         const docSnap = await getDoc(docRef);

         if (docSnap.exists()) {
            const data = docSnap.data();
            const email = data.email;

            await signInWithEmailAndPassword(auth, email, password);
            navigate('/');
         } else {
            console.log('No such document!');
         }
      } catch (err) {
         console.error(err);
      }
   };
   return (
      <div className="log-in-form">
         <h1>Log in</h1>
         <h3>to start creating</h3>
         <div className="inputs">
            <label htmlFor="userNameInp">
               <img src="/icons/user.svg" alt="user-icon" />
               Username
               <input
                  type="text"
                  onChange={(e) => setUsername(e.target.value)}
                  name="usernameInp"
                  id="usernameInp"
                  placeholder="e.g Sogi Kuranu"
               />
            </label>

            <label htmlFor="passwordInp">
               <img src="/icons/password.svg" alt="pass-icon" />
               Password&nbsp;
               <input
                  type="password"
                  onChange={(e) => setPassword(e.target.value)}
                  name="passwordInp"
                  id="passwordInp"
                  placeholder="∗∗∗∗∗∗"
               />
            </label>
         </div>
         <p>Forgot password?</p>
         <button onClick={login}>Log in ➩</button>
      </div>
   );
};

export default LogInForm;
