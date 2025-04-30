import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { auth } from '../firebase.init';

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null)
    const [loading, setLoading]=useState(true)


    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
 
    }

    const userSignin = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    const userSignOut = () => {
        setLoading(true)
         return signOut(auth)
         
    }

    // onAuthStateChanged(auth, (currentUser)=>{
    //    if(currentUser){
    //     console.log('has current user', currentUser)
    //    }
    //    else{
    //     console.log('current user', currentUser)
    //    }
    // })

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            console.log('inside useEffect on auth state change', currentUser)
            setUser(currentUser)
            setLoading(false)
        })
        return () => {
            unsubscribe()
        }
    }, [])

    const userInfo = {
        user,
        loading,
        userSignOut,
        createUser,
        userSignin
    }

    return (
        <AuthContext value={userInfo}>
            {children}
        </AuthContext>
    );
};

export default AuthProvider;