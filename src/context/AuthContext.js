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
        profilePic: "https://cdn.dribbble.com/users/6142/screenshots/5679189/media/1b96ad1f07feee81fa83c877a1e350ce.png?compress=1&resize=400x300&vertical=top" , 
        userType: "basic" ,   
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