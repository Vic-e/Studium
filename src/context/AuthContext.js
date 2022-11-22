import React, {createContext, useContext, useEffect, useState} from 'react';
import { auth, db } from '../components/firebase';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged} from 'firebase/auth'
import {doc, setDoc, Timestamp} from 'firebase/firestore' 


const AuthContext = createContext();

export function AuthContextProvider({ children }){
    const [user, setUser] = useState({})

    const signUp = (email, password, username) => {
        createUserWithEmailAndPassword(auth, email, password)
        setDoc(doc(db, 'users', email), {
        username: username,
        profilePic: (""), 
        userType: ("") ,   
        myCourses: [],
        dateCreated: Timestamp.fromDate(new Date())
         }) 
    }

    const logIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logOut = (email, password) => {
        return signOut(auth)
    }
    
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser)=>{
            setUser(currentUser)
        })
        return() => {
            unsubscribe();
        };
    });

    return(
        <AuthContext.Provider value={{signUp, logIn, logOut, user}}>
            {children}
        </AuthContext.Provider>  
    );
}

export function UserAuth(){
   return useContext(AuthContext);
}