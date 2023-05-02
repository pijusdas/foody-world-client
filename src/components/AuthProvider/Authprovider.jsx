import React, { createContext } from 'react';
import { GithubAuthProvider, GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import app from '../../firebase/firebse.config';


export const AuthContext = createContext(null)

const auth = getAuth(app)
const provider =new GoogleAuthProvider()
const GithubProvider = new  GithubAuthProvider()


const Authprovider = ({children}) => {


    const loginWithGoogle =()=>{
        return signInWithPopup(auth,provider)
    }

    const loginWithGithub =()=>{
        return signInWithPopup(auth,GithubProvider)
    }

    const authInfo ={
        loginWithGoogle,
        loginWithGithub
    }
    return <AuthContext.Provider value={authInfo}>
        {children}
    </AuthContext.Provider>
};

export default Authprovider;