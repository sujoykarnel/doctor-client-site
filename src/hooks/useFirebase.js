import { useEffect, useState } from "react";
import initializeFirebase from "../Pages/Login/Firebase/Firebase.init";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, updateProfile, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";

//initialize firebase app
initializeFirebase();


const useFirebase = () => {
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [authError, setAuthError] = useState('');

    const auth = getAuth();

    const registerUser = (email, password, name, navigate) => {
        setIsLoading(true);

        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed up 
                setAuthError('');
                const newUser = { email, displayName: name };
                setUser(newUser)
                //send name to firebase
                updateProfile(auth.currentUser, {
                    displayName: name
                }).then(() => {
                    
                }).catch((error) => {
                    
                });

                navigate('/home');
            })
            .catch((error) => {
                const errorMessage = error.message;
                setAuthError(errorMessage);
            })
            .finally(() => setIsLoading(false));
    }

    const loginUser = (email, password, location, navigate) => {
        setIsLoading(true);
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                navigate(location?.state?.prevUrl ? location?.state?.prevUrl : '/home');
                setAuthError('');
            })
            .catch((error) => {
                const errorMessage = error.message;
                setAuthError(errorMessage);
            })
            .finally(() => setIsLoading(false));
    }

    //observe user state
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            } else {
                setUser({});
            }
            setIsLoading(false)
        });
        return () => unsubscribe;
    }, [])

    const logoutUser = () => {
        setIsLoading(true);
        signOut(auth).then(() => {
            // Sign-out successful.
        }).catch((error) => {
            // An error happened.
        })
            .finally(() => setIsLoading(false));
    }

    return {
        user,
        isLoading,
        registerUser,
        loginUser,
        logoutUser,
        authError
    }
};

export default useFirebase;