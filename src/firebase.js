import { initializeApp } from 'firebase/app';
import { browserLocalPersistence, getAuth, setPersistence } from 'firebase/auth';

// Web app config is public by design; access is controlled by Firebase Auth
// (email/password users added manually in the console, sign-up disabled).
const firebaseConfig = {
  apiKey: 'AIzaSyCrD40ZL780xdjxTYPyTYT8WuCExLIDpAk',
  authDomain: 'colreg-5a21e.firebaseapp.com',
  projectId: 'colreg-5a21e',
  storageBucket: 'colreg-5a21e.firebasestorage.app',
  messagingSenderId: '707922391514',
  appId: '1:707922391514:web:00ff8df689dfc661be90e3',
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

// Keep the session across reloads/restarts. Firebase refresh tokens do not
// expire, so the user stays signed in until sign-out or account removal.
export const persistenceReady = setPersistence(auth, browserLocalPersistence).catch(() => {});
