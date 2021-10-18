import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut } from "firebase/auth";
import {useState, useEffect} from 'react';
import initializeAuthentication from "../Pages/Login/firebase/firebase.init";

initializeAuthentication();

const useFirebade = () => {
    const [users, setUsers] = useState({});

    const auth = getAuth();

    const signInUsingGoogle = () => {
        const googleProvider = new GoogleAuthProvider();
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                setUsers(result.user)
            });
    }

    // observe user state change
    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, user => {
            if(user){
                setUsers(user);
            }
            else{
                setUsers({});
            }
          });
          return () => unsubscribed;
    }, [])

    
    const logOut = () => {
        signOut(auth)
        .then(()=>{});
    }

    return {
        users,
        signInUsingGoogle,
        logOut
    }
}

export default useFirebade;