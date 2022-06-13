import React, { useState } from 'react';
import './Login.css';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import google from '../picutre/Image/Google__G__Logo.svg.png';
import github from '../picutre/Image/github.png';
import facebook from '../picutre/Image/facebook.png';
import useAuth from '../../hooks/useAuth';
const Login = () => {
    const { signInUsingGithub, signInUsingGoogle, signInUsingFacebook } = useAuth();
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
    const eye = () => {
        var password = document.getElementById("password");
        var hidee1 = document.getElementById("hide1");
        var hidee2 = document.getElementById("hide2");

        if (password.type === 'password') {
            password.type = "text";
            hidee1.style.display = "block";
            hidee2.style.display = "none";
        }
        else {
            password.type = "password";
            hidee1.style.display = "none";
            hidee2.style.display = "block";
        }

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
                        <div class="input-box">
                            <input onBlur={handleEmail} type="email" name="Email" id="Email" placeholder="Enter Your Email" required />
                        </div>

                        <div class="input-box" onClick={eye}>
                            <input onBlur={handlePassword} type="password" name="Password" id="password" placeholder="Enter Your Password" required />
                            <span class="eye">

                                <i id='hide1' class="fa fa-eye"></i>
                                <i id='hide2' class="fa fa-eye-slash"></i>

                            </span>
                        </div>

                        <small className='text-danger pb-2'>{error}</small>

                        <div class="login-box">
                            <button class="login-btn" >Sign In</button>
                        </div>
                        <div class="register-box">
                            <a href="register.html">Create Account</a>
                        </div>

                        <div class="sign-in">
                            <div class="google-box">
                                <button
                                    onClick={signInUsingGoogle}
                                >
                                    <img class="google-img" src={google} alt="" width="27px" height="27px" />

                                    Sign In With Google</button>

                            </div>
                            <div class="github-box">
                                <button
                                    onClick={signInUsingGithub}
                                >
                                    <img class="github-img" src={github} alt="" width="27px" height="27px" />

                                    Sign In With GitHub</button>

                            </div>

                        </div>

                        <div class="facebook-box">
                            <button
                                onClick={signInUsingFacebook}
                            >
                                <img class="facebook-img" src={facebook} alt="" width="27px" height="27px" />

                                Sign In With Facebook</button>

                        </div>
                    </from>
                </div>
            </div>
        </div>
    );
};

export default Login;