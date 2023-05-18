import React, { createContext, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, updateProfile } from "firebase/auth";
import { app } from '../firebase/firebase.config';
const auth = getAuth(app)

export const AuthContext = createContext(null)

const AuthProviders = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const updateUserData = (name, photoURL) => {
        setLoading(true)
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photoURL
        }).then(() => {
            // Profile updated!
            // ...
        }).catch((error) => {
            console.log(error.message);
            // An error occurred
            // ...
        });
    }

    const authInfo = {
        user,
        loading,
        setLoading,
        createUser,
        updateUserData,
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProviders;