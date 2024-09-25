import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import {
  getFirestore, collection, doc, enableIndexedDbPersistence,
} from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
import { getAnalytics } from 'firebase/analytics';

const firebaseConfig = {
  apiKey: "AIzaSyChVz9Wzx2I-FjziR0teB39QgspINxUXYw",
  authDomain: "comment-ab863.firebaseapp.com",
  databaseURL: "https://comment-ab863-default-rtdb.firebaseio.com",
  projectId: "comment-ab863",
  storageBucket: "comment-ab863.appspot.com",
  messagingSenderId: "671930104341",
  appId: "1:671930104341:web:2a43daa2e6cc4e9ec3ac1c",
  measurementId: "G-LJ1RYM3C1M"
};

// Names of the collections in the firebase bucket
const collectionConfig = {
  users: 'users',
  songs: 'songs',
  comments: 'comments',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
getAnalytics(app);

const auth = getAuth();
const db = getFirestore();
enableIndexedDbPersistence(db)
  .catch((error) => {
    console.log(`Firebase persistence occurred. Error: ${error.code}`);
  });

const storage = getStorage(app);

const usersCollection = collection(db, collectionConfig.users);
// Used to get a single user doc reference, parameter is the id of the document
const usersDocWithID = (id) => doc(db, collectionConfig.users, id);

const songsCollection = collection(db, collectionConfig.songs);
// Used to get a single song doc reference, parameter is the id of the document
const songsDocWithID = (id) => doc(db, collectionConfig.songs, id);

const commentsCollection = collection(db, collectionConfig.comments);

export {
  auth,
  db,
  storage,
  usersCollection,
  usersDocWithID,
  songsCollection,
  songsDocWithID,
  commentsCollection,
};
