import { auth } from '../firebase'
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    sendPasswordResetEmail,
    updateEmail,
    updatePassword
} from "firebase/auth";
import { useContext, useEffect, useState, createContext } from 'react';
import { useRouter } from 'next/router';

const AuthContext = createContext({});
export function useAuth() {
    return useContext(AuthContext);
}


export default function AuthProvider({ children }) {

    const [currentUser, setCurrentUser] = useState();
    const [loading, setLoading] = useState(true);


    function signup(email, password) {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    function login(email, password) {
        return signInWithEmailAndPassword(auth, email, password)
    }

    function logout() {
        return (currentUser && signOut(auth));
    }

    function resetPassword(email) {
        return sendPasswordResetEmail(auth, email);
    }

    function update_email(email) {
        return updateEmail(currentUser, email);
    }

    function update_password(password) {
        return updatePassword(currentUser, password);
    }

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            setCurrentUser(user);
            setLoading(false);
        })

        return unsubscribe;
    }, [])


    const value = {
        currentUser,
        login,
        signup,
        logout,
        resetPassword,
        update_email,
        update_password
    }

    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    )
}

export const ProtectRoute = ({ children }) => {
    const { currentUser, loading } = useAuth();
    if (loading || (!currentUser && window.location.pathname !== '/login')) {
        const router = useRouter();
        router.push('/login');
        return (<h1>Loading.....</h1>);
    }
    return currentUser && children;
};