import React, { createContext, useEffect, useState } from 'react';
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from '../../firebase/firebse.config';


export const AuthContext = createContext(null)

const auth = getAuth(app)
const provider =new GoogleAuthProvider()
const GithubProvider = new  GithubAuthProvider()


const Authprovider = ({children}) => {
    const [user,setUser] = useState(null)


    const creatUser = (email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password)
    }

    const login = (email,password)=>{
        return signInWithEmailAndPassword(auth,email,password);
    }

    const logout = ()=>{
        return signOut(auth)
    }

    const loginWithGoogle =()=>{
        return signInWithPopup(auth,provider)
    }

    const loginWithGithub =()=>{
        return signInWithPopup(auth,GithubProvider)
    }



    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth,loggedInser =>{
            setUser(loggedInser)
            console.log('login user ',loggedInser )
        })
        return unsubscribe
    },[])

    const authInfo ={
         auth,
        user,
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