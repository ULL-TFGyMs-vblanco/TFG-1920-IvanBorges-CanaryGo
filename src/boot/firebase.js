/* eslint-disable prefer-const */
// Firebase App (the core Firebase SDK) is always required and must be listed first
import * as firebase from 'firebase/app'

// Add the Firebase products that you want to use
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/database'
import 'firebase/analytics'
import 'firebase/storage'

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCciIEIxvTIkLFdP0cutu6WD3La0kZGBgY',
  authDomain: 'canarygo-f725d.firebaseapp.com',
  databaseURL: 'https://canarygo-f725d.firebaseio.com',
  projectId: 'canarygo-f725d',
  storageBucket: 'canarygo-f725d.appspot.com',
  messagingSenderId: '622261513235',
  appId: '1:622261513235:web:54a52232eeeec673fb63e6',
  measurementId: 'G-LJ9G5QJCF9'
}

// Initialize Firebase
let firebaseApp = firebase.initializeApp(firebaseConfig)
let firebaseAuth = firebaseApp.auth()
let firebaseAuthGoogle = new firebase.auth.GoogleAuthProvider()
let firebaseAuthFacebook = new firebase.auth.FacebookAuthProvider()
let firebaseDb = firebaseApp.firestore()
let firebaseStg = firebaseApp.storage()
firebase.analytics()

export { firebaseConfig, firebaseAuth, firebaseDb, firebaseStg, firebaseAuthGoogle, firebaseAuthFacebook }
