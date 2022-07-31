import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// 1) when seeding the database you'll have to uncomment this!
//import { seedDatabase } from '../seed';

const config = {
  apiKey: "AIzaSyBhAD8FCdXxfBYUqJJOl9k8jYIBZYrBHV8",
  authDomain: "netflix-4ca07.firebaseapp.com",
  projectId: "netflix-4ca07",
  storageBucket: "netflix-4ca07.appspot.com",
  messagingSenderId: "273119152925",
  appId: "1:273119152925:web:e02db22332bccfdb66eff4"
};

const firebase = Firebase.initializeApp(config);
// 2) when seeding the database you'll have to uncomment this!
// seedDatabase(firebase);
// 3) once you have populated the database (only run once!), re-comment this so you don't get duplicate data

export { firebase };
