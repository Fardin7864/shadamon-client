"use client"
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "@/common/firebase.config.js";
import { toast } from "react-toastify";


export const AuthContext = createContext();

const AuthanticationProvider = ({children}) => {

    // states
    const [user, setUser] = useState(null);
    const [isLoading, setLoading] = useState(true);


    // auth provider
    const google = new GoogleAuthProvider();

    // create user with email
    const creatUres =(emial, password) => { 
        setLoading(true)
        return createUserWithEmailAndPassword(auth, emial, password)
     }

    // Login with email and pass
    const login = (email, password) => { 
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    // Social login
    const loginWithProvider = (provider) => { 
        setLoading(true)
        return signInWithPopup(auth, provider)
     }

    //  sign out
    const logOut = () => { 
        setLoading(true)
        return signOut(auth)
     }

    // toasts
    const successToast = () => { 
        toast('Successfully Loged In!', {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            });
     }

    const faildToast =() => { 
        toast('Log In faild!', {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            });
     }
    const networkFaildToast =() => { 
        toast('please check your Network!', {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            });
     }

    
    useEffect(() => { 
        const unsebscribe = onAuthStateChanged(auth, currentUser =>{
            setLoading(true)
            setUser(currentUser);
            setLoading(false)
        })

        return () => {
            unsebscribe();
        }
     },[])

    //  context info
     const authInfo = {
        user,
        google,
        creatUres,
        login,
        loginWithProvider,
        logOut,
        isLoading,
        successToast,
        faildToast,
        networkFaildToast,
     }



    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthanticationProvider;