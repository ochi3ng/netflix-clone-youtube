import firebase from '../firebase'
const firebaseConfig = {
    apiKey: "AIzaSyC1ZOBp-qCo0KhFnPd1L1t53GLX32McI4Q",
    authDomain: "netflix-clone-9f483.firebaseapp.com",
    projectId: "netflix-clone-9f483",
    storageBucket: "netflix-clone-9f483.appspot.com",
    messagingSenderId: "420155961930",
    appId: "1:420155961930:web:c61bf714beeacfcab3ecb3"
  };
  const firebaseApp=firebase.inializeApp(firebaseConfig);
  const db=firebaseApp.fireStore();
  const auth=firebase.auth();

  export{auth}
  export default db;