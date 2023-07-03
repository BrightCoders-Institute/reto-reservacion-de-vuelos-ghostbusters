import {initializeApp} from 'firebase/app';
import {getAuth} from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyCMBjX8Dm0-hVCTEe0OeEI5V1ZkQuuCIew',
  authDomain: 'appvuelos-16ac9.firebaseapp.com',
  databaseURL: 'https://appvuelos-16ac9-default-rtdb.firebaseio.com/',
  projectId: 'appvuelos-16ac9',
  storageBucket: 'gs://appvuelos-16ac9.appspot.com',
  messagingSenderId: '227704013235',
  appId: '1:227704013235:android:ca6cb9c44cbbdd9b6dcbc6',
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
