import React, { createContext, useEffect, useState } from 'react';
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from '../../firebase/firebse.config';


export const AuthContext = createContext(null)

const auth = getAuth(app)
const provider = new GoogleAuthProvider()
const GithubProvider = new GithubAuthProvider()


const Authprovider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loader,setLoader] = useState(true)

    console.log(user)
    const creatUser = (email, password) => {
        setLoader(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const login = (email, password) => {
        setLoader(true)
        return signInWithEmailAndPassword(auth, email, password);
    }

    const logout = () => {
        return signOut(auth)
    }

    const loginWithGoogle = () => {
        return signInWithPopup(auth, provider)
    }

    const loginWithGithub = () => {
        return signInWithPopup(auth, GithubProvider)
    }



    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, loggedInser => {
            setUser(loggedInser)
            console.log('login user ', loggedInser)
            setLoader(false)
        })
        return unsubscribe
    }, [])

    const authInfo = {
        auth,
        user,
        loader,
        creatUser,
        login,
        logout,
        loginWithGoogle,
        loginWithGithub
    }
    return <AuthContext.Provider value={authInfo}>
        {children}
    </AuthContext.Provider>
};

export default Authprovider;