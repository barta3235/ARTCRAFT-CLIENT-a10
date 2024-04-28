import auth from "../firebase/firebase.config";
import { createUserWithEmailAndPassword,onAuthStateChanged,signInWithEmailAndPassword,signOut,updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider,signInWithPopup } from "firebase/auth";
import { GithubAuthProvider } from "firebase/auth";

export const AuthContext= createContext();

const AuthProvider = ({children}) => {

    const [user,setUser]=useState(null);
    const [loading,setLoading]=useState(true);
    const provider = new GoogleAuthProvider();
    const provider2 = new GithubAuthProvider();

    const createUser=(email,password)=>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const updateUser=(name,photoLink)=>{
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photoLink 
          })
    }

    const loginUser=(email,password)=>{
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }

    const googleSignIn=()=>{
        setLoading(true);
        return signInWithPopup(auth, provider);
    }

    const githubSignIn=()=>{
        setLoading(true);
        return signInWithPopup(auth, provider2)
    }

    const signOutUser=()=>{
        setLoading(true);
       return  signOut(auth);
    }

    useEffect(()=>{
       const unSubscribe= onAuthStateChanged(auth, (currentUser)=>{
            if(currentUser){
                setUser(currentUser)
            }else{
                setUser(null)
            }
            setLoading(false);
        })
        return ()=>{
            return unSubscribe();
        }
    },[])


    const authInfo={createUser,loginUser,signOutUser,user,setUser,loading,updateUser,googleSignIn,githubSignIn}


    return (
        <AuthContext.Provider value={authInfo}>
             {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;