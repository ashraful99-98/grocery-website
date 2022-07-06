import { useEffect, useState } from "react"
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut, GithubAuthProvider, FacebookAuthProvider } from "firebase/auth";
import initializeAuthentication from "../Firebase/firebase.init";

initializeAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const auth = getAuth();
    const [error, setError] = useState('');
    const googleProvider = new GoogleAuthProvider();

    const githubProvider = new GithubAuthProvider();

    const faceBookProvider = new FacebookAuthProvider();

    const signInUsingGoogle = () => {
        signInWithPopup(auth, googleProvider)
            .then(result => {
                console.log(result.user);
                setUser(result.user);

            })
            .catch(error => {
                setError(error.message);
            })
    }

    const signInUsingGithub = () => {
        signInWithPopup(auth, githubProvider)
            .then(result => {
                setUser(result.user);
            })
    }

    const signInUsingFacebook = () => {
        signInWithPopup(auth, faceBookProvider)
            .then(result => {
                setUser(result.user);
            })
    }

    const logOut = () => {
        signOut(auth, faceBookProvider, githubProvider, googleProvider)
            .then(() => {
                setUser({})
            })

    }
    // observe whether user auth state changed or not 
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            }
        });
    }, [auth])

    return {
        user,
        error,
        signInUsingGoogle,
        logOut,
        signInUsingGithub,
        signInUsingFacebook
    }
}
export default useFirebase;