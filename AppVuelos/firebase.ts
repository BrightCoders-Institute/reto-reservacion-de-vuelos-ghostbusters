import {initializeApp} from 'firebase/app';
import {getAuth} from 'firebase/auth';
import {
  API_KEY,
  AUTH_DOMAIN,
  DATABASE_UR,
  PROJECT_ID,
  STORAGE_BUCKET,
  MESSAGINGSENDER_ID,
  APP_ID,
} from '@env';

const firebaseConfig = {
  apiKey: API_KEY,
  authDomain: AUTH_DOMAIN,
  databaseURL: DATABASE_UR,
  projectId: PROJECT_ID,
  storageBucket: STORAGE_BUCKET,
  messagingSenderId: MESSAGINGSENDER_ID,
  appId: APP_ID,
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
