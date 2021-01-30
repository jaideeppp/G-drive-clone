import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage'
const app = firebase.initializeApp({
    apiKey: "AIzaSyCz1z4se68ujKlPw3DgpmDPMp3GTsQM0kY",
    authDomain: "drive-clone-56f21.firebaseapp.com",
    projectId: "drive-clone-56f21",
    storageBucket: "drive-clone-56f21.appspot.com",
    messagingSenderId: "105441156125",
    appId: "1:105441156125:web:d14f20acb5658c74c7faf4",
    measurementId: "G-6HXNSEV3ZF"
})

const firestore = app.firestore()
export const database = {
    folders: firestore.collection('folders'),
    files: firestore.collection('files'),
    formatDoc: doc => {
        return { id: doc.id, ...doc.data() }
    },
    getCurrentTimestamp: firebase.firestore.FieldValue.serverTimestamp
}

export const storage = app.storage()
export const auth = app.auth();
export default app;