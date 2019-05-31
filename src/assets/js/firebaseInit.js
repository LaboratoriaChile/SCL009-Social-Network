export const firebaseInit = () => {

  // Initialize Firebase
  // Your web app's Firebase configuration
  let firebaseConfig = {
    apiKey: "AIzaSyCDyWru2KECSeIl-lWvn3SBgKy0I6d6aGU",
    authDomain: "red-social-f4a27.firebaseapp.com",
    databaseURL: "https://red-social-f4a27.firebaseio.com",
    projectId: "red-social-f4a27",
    storageBucket: "red-social-f4a27.appspot.com",
    messagingSenderId: "121838053063",
    appId: "1:121838053063:web:3f20a5c6d0dcbf27"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
}