import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// 1) when seeding the database you'll have to uncomment this!
//import { seedDatabase } from '../seed';

const config = {
  apiKey: "AIzaSyAHx-LasvgVWZRHnKBb-XTo2sLj0WzvMaQ",
  authDomain: "netflix-6df1c.firebaseapp.com",
  projectId: "netflix-6df1c",
  storageBucket: "netflix-6df1c.appspot.com",
  messagingSenderId: "1096122919922",
  appId: "1:1096122919922:web:002addbf6d4583b17d996b"
};

const firebase = Firebase.initializeApp(config);
// 2) when seeding the database you'll have to uncomment this!
// seedDatabase(firebase);
// 3) once you have populated the database (only run once!), re-comment this so you don't get duplicate data

export { firebase };
