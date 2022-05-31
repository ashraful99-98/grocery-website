import React, { useState } from 'react';
import './Login.css';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import google from '../picutre/Image/Google__G__Logo.svg.png';
import useAuth from '../../hooks/useAuth';
const Login = () => {
    const { signInUsingGoogle } = useAuth();
    const auth = getAuth();


    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');


    const handleEmail = e => {
        setEmail(e.target.value);
    }
    const handlePassword = e => {
        setPassword(e.target.value);
    }

    const handleLogin = e => {
        e.preventDefault();
        // console.log(email, password, firstName, lastName);
        // if (password.length < 6) {
        //     setError('Password Must be at least 6 characters long.')
        //     return;
        // }
        // if (!/(?=.*[A-Z].*[A-Z])/.test(password)) {
        //     setError('Password Must contain 2 upper case');
        //     return;
        // }
        signInWithEmailAndPassword(auth, email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                setError('');
            })
            .catch(error => {
                setError(error.message);
            })
    }


    return (
        <div>
            <div class="heading-section">
                <div class="heading-div">
                    <h1 class="head">Account</h1>
                    <p class="heading-p"> <a href="home.html">Home<span>>></span></a>Account </p>
                </div>
            </div>
            <div class="login">
                <div className="login-section container">

                    <from class="login-from" onChange={handleLogin}>

                        <input onBlur={handleEmail} type="email" name="Email" id="Email" placeholder="Enter Your Email" required />
                        <input onBlur={handlePassword} type="password" name="Password" id="Password" placeholder="Enter Your Password" required />
                        <small className='text-danger pb-2'>{error}</small>
                        <div class="login-box">
                            <button class="login-btn" >Sign In</button>
                        </div>
                        <div class="register-box">
                            <a href="register.html">Create Account</a>
                        </div>
                        <div class="google-box">
                            <button
                                onClick={signInUsingGoogle}
                            >
                                <img class="google-img" src={google} alt="" width="27px" height="27px" />

                                Sign In With Google</button>
                        </div>
                    </from>
                </div>
            </div>
        </div>
    );
};

export default Login;