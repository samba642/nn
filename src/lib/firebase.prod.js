import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// 1) when seeding the database you'll have to uncomment this!
//import { seedDatabase } from '../seed';

const config = {
  apiKey: "AIzaSyBXONCffMxFb4eTc5DxVR_wPbP8HnPCaiA",
  authDomain: "netflix-5912d.firebaseapp.com",
  projectId: "netflix-5912d",
  storageBucket: "netflix-5912d.appspot.com",
  messagingSenderId: "203619534428",
  appId: "1:203619534428:web:6844c630b65892c4f08899",
};

const firebase = Firebase.initializeApp(config);
// 2) when seeding the database you'll have to uncomment this!
//seedDatabase(firebase);
// 3) once you have populated the database (only run once!), re-comment this so you don't get duplicate data

export { firebase };
