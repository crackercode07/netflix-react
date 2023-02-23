import { useContext, createContext, useState, useEffect } from 'react';
import { auth, db } from '../firebase';
import { 
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged,
 } from 'firebase/auth'
import {setDoc, doc} from 'firebase/firestore'

const AuthContext = createContext()

export const AuthContextProvider = ({children}) =>{

    const [user, setUser] = useState({});

    const signup = (email, password) => {
        createUserWithEmailAndPassword(auth, email, password);
        setDoc(doc(db, 'users', email), {
            savedShows: []
        })
    }
        

    const login = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logout = () => {
        return signOut(auth); 
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
        })
        return () => {
            unSubscribe();
        }
    })


    const contextValue = {
        user,
        signup,
        login,
        logout
    };

    return <AuthContext.Provider value={contextValue}>
        {children}
    </AuthContext.Provider>
}

export const UserAuth = () => {
    return useContext(AuthContext)
}