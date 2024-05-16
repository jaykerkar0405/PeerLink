// App's External Imports
import { initializeApp } from "firebase/app";

const firebase_config = {
  appId: process.env.NEXT_PUBLIC_APP_ID,
  apiKey: process.env.NEXT_PUBLIC_API_KEY,
  projectId: process.env.NEXT_PUBLIC_PROJECT_ID,
  authDomain: process.env.NEXT_PUBLIC_AUTH_DOMAIN,
  storageBucket: process.env.NEXT_PUBLIC_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_MESSAGING_SENDER_ID,
};

const app = initializeApp(firebase_config);

export default app;
