import { initializeApp } from 'firebase/app';
import firebaseConfig from './firebase.config';
// Initialize firebase
const initializeAuthentication = () => {
  initializeApp(firebaseConfig);
};

export default initializeAuthentication;
