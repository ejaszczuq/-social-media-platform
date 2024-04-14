import React from 'react';

import './RegistrationForm.scss';

import { useNavigate } from 'react-router-dom';
import { auth, googleProvider } from '../../config/firebase';
import { createUserWithEmailAndPassword, signInWithPopup, updateProfile } from 'firebase/auth';
import { useState } from 'react';
import { doc, setDoc, getFirestore } from 'firebase/firestore';

interface IRegistrationForm {}

const RegistrationForm: React.FC<IRegistrationForm> = () => {
   const [email, setEmail] = useState('');
   const [password, setPassword] = useState('');
   const [username, setUsername] = useState('');

   const db = getFirestore();
   const navigate = useNavigate();

   const signIn = async () => {
      try {
         const userCredential = await createUserWithEmailAndPassword(auth, email, password);
         const user = userCredential.user;
         if (user) {
            await updateProfile(user, {
               displayName: username,
            });
            navigate('/'); // to MainPage
         }
      } catch (err) {
         console.error(err);
      }
      console.log(auth?.currentUser?.displayName);
   };

   const signInWithGoogle = async () => {
      try {
         await signInWithPopup(auth, googleProvider);
      } catch (err) {
         console.error(err);
      }
   };

   return (
      <div className="log-in-box">
         <h1>Create your Profile</h1>
         <h4>
            By completing your profile, you'll unlock the full potential of
            <br />
            our platform.
         </h4>
         <div className="authorization">
            <div className="google" onClick={signInWithGoogle}>
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
               <input
                  type="text"
                  onChange={(e) => setEmail(e.target.value)}
                  name="emailInp"
                  id="emailInp"
                  placeholder="sogi-kuranu18@mail.com"
               />
            </label>
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
            <button onClick={signIn}>Create Profile</button>
         </div>

         <p>
            By continuing you are agreeing to our <span>Terms of Service</span> and <span>Privacy policy</span>
         </p>
      </div>
   );
};

export default RegistrationForm;
