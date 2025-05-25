import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signOut, updateProfile, GoogleAuthProvider,signInWithPopup} from 'firebase/auth';
import app from '../firebase/firebase.config';

const AuthProvider = ({ children }) => {

    const auth = getAuth(app)

    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    const googleProvider = new GoogleAuthProvider();

    const signInWithGoogle = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    };

    const createUser = (email, password) => {

        return createUserWithEmailAndPassword(auth, email, password)
    }

    useEffect(() => {
        const unSubs = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
            setLoading(false)
        })
        return () => {
            unSubs()
        }
    })

    const logOut = () => {
        return signOut(auth)
    }

    const logIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const updateUser = (updatedData) => {
        return updateProfile(auth.currentUser, updatedData)
    }
    const forgotPass = (email) => {
        return sendPasswordResetEmail(auth, email)
    }



    const userInfo = {
        createUser, user, setUser, logOut, logIn, loading, setLoading, updateUser, forgotPass ,signInWithGoogle
    }

    return (
        <AuthContext value={userInfo}>
            {children}
        </AuthContext>
    );
};

export default AuthProvider;