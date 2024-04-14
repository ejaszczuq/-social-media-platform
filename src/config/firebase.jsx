import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
   apiKey: 'AIzaSyDyqNy4iGWsWF5TBT-RbH2E3YWqd_q6PZQ',
   authDomain: 'social-media-platform-591bc.firebaseapp.com',
   projectId: 'social-media-platform-591bc',
   storageBucket: 'social-media-platform-591bc.appspot.com',
   messagingSenderId: '946679960641',
   appId: '1:946679960641:web:d7de99eeddad4e3f1322c0',
   measurementId: 'G-MC28FLJ2XG',
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();

export const db = getFirestore(app);
export const storage = getStorage(app);
