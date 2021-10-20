import { useEffect, useState } from "react"
import initializeAutentication from "../Firebase/firebase.init";
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

initializeAutentication();
const useFirebase = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [user, setUser] = useState({});
    const [error, setError] = useState('')
    const googlelProvider = new GoogleAuthProvider();
    const auth = getAuth();

    const signInUsingGoogle = () => {
        signInWithPopup(auth, googlelProvider)
            .then(result => {
                console.log(result.user);
                setUser(result.user);
            })
            .catch(error => {
                setError(error.message);
            })
    }
    const createNewUser = () => {
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                const user = result.user;
                setError('Registered Successfully');
                console.log(user);
            })
    }
    const loginWithEmailPassword = () => {
        signInWithEmailAndPassword(auth, email, password)
            .then(result => {
                setUser(result.user);
                setError('Login Successfull')
            })

    }
    const handleEmailChange = e => {
        setEmail(e.target.value);
        console.log(e.target.value);
    }
    const handlePasswordChange = e => {
        setPassword(e.target.value);
        console.log(e.target.value);
    }
    const logOut = () => {
        signOut(auth)
            .then(() => {
                setUser({});
            })
            .catch(error => {

            });
    }
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                console.log('inside state changed', user)
                setUser(user);
            }

        })
    }, []);

    return {
        logOut,
        user,
        error,
        email,
        password,
        signInUsingGoogle,
        createNewUser,
        handleEmailChange,
        handlePasswordChange,
        loginWithEmailPassword

    }
}
export default useFirebase;