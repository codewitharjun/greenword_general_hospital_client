import { getAuth, signInWithPopup, createUserWithEmailAndPassword, signInWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signOut } from "firebase/auth";
import {useState, useEffect} from 'react';
import initializeAuthentication from "../Pages/Login/firebase/firebase.init";

initializeAuthentication();

const useFirebade = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(true);

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const auth = getAuth();

    // Start Register  New Account 

    const handleNameChange = e => {
       setName(e.target.value);
    }
    
    const handleEmailChange = e => {
       setEmail(e.target.value);
    }
    
   const handlePasswordChange = e => {
       setPassword(e.target.value);
    }
    
    const handleRegistration = e => {
        e.preventDefault();
        setIsLoading(true);
        if (password.length < 6) {
            setError('Password must be at least 6 characters long.')
            return;
        }
        if (!/(?=.*[A-Z])(?=.*[0-9])/.test(password)) {
            setError('Password must be at least 1 Number and 1 Capita Later.')
            return;
        }
        createUserWithEmailAndPassword(auth, email, password)
        .then(result => {
            const user = result.user;
            setError('')
            console.log(user);
        })
        .catch(error =>{
            setError(error.message);
            setIsLoading(false);
        })
    }
    // End register 

    // LogIn 
    const handleLogIn = (event, email, password) => {
        event.preventDefault();
        setIsLoading(true);
        signInWithEmailAndPassword(auth, email, password)
        .then(result => {
            const user = result.user;
            setError('')
            console.log(user);
        })
        .catch(error =>{
            setError(error.message);
            setIsLoading(false);
        })

    }


    // LogIn with Google 
    const signInUsingGoogle = () => {
        setIsLoading(true);
        const googleProvider = new GoogleAuthProvider();
        return signInWithPopup(auth, googleProvider)
        
    }
    
    // observe user state change
    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, user => {
            if(user){
                setUser(user);
            }
            else{
                setUser({});
            }
            setIsLoading(false);
          });
          return () => unsubscribed;
    }, [])

    
    const logOut = () => {
        setIsLoading(true);
        signOut(auth)
        .then(()=>{})
        .finally(() => setIsLoading(false));
    }
    
    return {
        user,
        error,
        isLoading,
        setIsLoading,
        handleRegistration,
        handleNameChange,
        handleEmailChange,
        handlePasswordChange,
        handleLogIn,
        signInUsingGoogle,
        logOut
    }
}

export default useFirebade;