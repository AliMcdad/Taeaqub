import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

export const app = initializeApp({
    apiKey: "AIzaSyCvsgJTI0JFypp4dDmN75xi7E_hUeTWIsk",
    authDomain: "test-4b4f7.firebaseapp.com",
    projectId: "test-4b4f7",
    storageBucket: "test-4b4f7.appspot.com",
    messagingSenderId: "203632325554",
    appId: "1:203632325554:web:33d06ace4c917ec1816aab"
});

export const db = getFirestore(app);
export const auth = getAuth(app);