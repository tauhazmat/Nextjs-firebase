import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { app } from './firbaseConfig';

const auth = getAuth(app);

export const signupWithEmailPassword = async (email: string, password: string) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    console.log('User signed up successfully', userCredential.user);
    return userCredential.user;  // Return the user
  } catch (error) {
    console.error('Error signing up:', error);
    throw error;  // Rethrow the error so it can be handled in the UI
  }
};

export const loginWithEmailPassword = async (email: string, password: string) => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    console.log('User logged in successfully', userCredential.user);
    return userCredential.user;  // Return the user
  } catch (error) {
    console.error('Error logging in:', error);
    throw error;
  }
};

export const logout = async () => {
  try {
    await signOut(auth);
    console.log('User logged out successfully');
  } catch (error) {
    console.error('Error logging out:', error);
  }
};
