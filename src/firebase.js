import firebase from 'firebase/app'
import 'firebase/auth' // for authentication
import 'firebase/firestore' // for cloud firestore

const firebaseConfig = {
  apiKey: 'AIzaSyDTpauu8rLpOU8f3YAchYu0q-vGM8A2ni4',
  authDomain: 'slack-clone-redux-fc5c8.firebaseapp.com',
  projectId: 'slack-clone-redux-fc5c8',
  storageBucket: 'slack-clone-redux-fc5c8.appspot.com',
  messagingSenderId: '447441915727',
  appId: '1:447441915727:web:7069d724b9e73c2768bf3a',
}

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore()
const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider()

export { auth, provider, db }
