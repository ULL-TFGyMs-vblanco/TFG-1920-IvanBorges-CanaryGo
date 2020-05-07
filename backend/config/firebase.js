
var firebase = require('firebase')

// Firebase project configuration
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

require('firebase/storage')
require('firebase/firestore')
require('firebase/auth')

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig)
const firebaseAuth = firebaseApp.auth()
const firebaseAuthGoogle = new firebase.auth.GoogleAuthProvider()
const firebaseAuthFacebook = new firebase.auth.FacebookAuthProvider()
const firebaseDb = firebaseApp.firestore()
const firebaseStg = firebaseApp.storage()
// firebase.analytics()

module.exports = { firebaseConfig, firebaseAuth, firebaseDb, firebaseStg, firebase, firebaseAuthFacebook, firebaseAuthGoogle }
