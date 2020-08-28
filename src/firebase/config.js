import Firebase from 'firebase';

const firebaseConfig = {
  apikey: 'AIzaSyD0wXCp-R5-kalQFlBSNGwc6dh0XSj9E7c',
  databaseURL: 'https://chitchatter-bb7cb.firebaseio.com/',
  projectId: 'chitchatter-bb7cb',
  appId: '1:764252421122:android:1a2a801771dfee5597bb1b',
};

export default Firebase.initializeApp(firebaseConfig);
