import Firebase from '../firebase/config';

const signInRequest = async (email, password) => {
  try {
    return await firebase.auth().signInWithEmailAndPassword(email, password);
  } catch (error) {
    return error;
  }
};

export default signInRequest;
