import React, { useState } from 'react';
import { getAuth, createUserWithEmailAndPassword, sendEmailVerification, sendPasswordResetEmail, updateProfile } from 'firebase/auth';

const Register = () => {
    const auth = getAuth();


    const [name, setName] = useState('');

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleNameChange = e => {
        setName(e.target.value);
    }

    const handleEmailChange = e => {
        setEmail(e.target.value);
    }
    const handlePasswordChange = e => {
        setPassword(e.target.value);
    }

    const handleRegistration = e => {
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
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                setError('');
                setUserName();
                verifyEmail();
            })
            .catch(error => {
                setError(error.message);
            })

    }

    const setUserName = () => {
        updateProfile(auth.currentUser, { displayName: name })
            .then(result => {

            })
    }

    const verifyEmail = () => {
        sendEmailVerification(auth.currentUser)
            .then(result => {
                console.log(result);
            })
    }
    const handleResetPassword = () => {
        sendPasswordResetEmail(auth, email)
            .then(result => {
                console.log(result);
                if (password) {
                    setError('Check Your Mail')
                    return;
                }
                //    RESET PASSWORD 
            })
    }
    const eye = () => {
        var password = document.getElementById("password");
        var hidee1 = document.getElementById("hide11");
        var hidee2 = document.getElementById("hide22");

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
                    <h1 class="head">Create Account</h1>
                    <p class="heading-p"> <a href="home.html">Home<span>>></span></a>Create Account </p>
                </div>
            </div>
            <div class="login">
                <div className="login-section container">

                    <form class="login-from" onSubmit={handleRegistration}>


                        <div className="input-box">
                            <input onBlur={handleNameChange} type="text" name="Name" id="First-Name" placeholder="Name" required />
                        </div>

                        <div class="input-box">
                            <input onBlur={handleEmailChange} type="email" name="Email" id="Email" placeholder="Email" required />
                        </div>

                        <div class="input-box" onClick={eye}>
                            <input onBlur={handlePasswordChange} type="password" name="Password" id="password" placeholder="Password" required />
                            <span class="eye">

                                <i id='hide11' class="fa fa-eye"></i>
                                <i id='hide22' class="fa fa-eye-slash"></i>

                            </span>
                        </div>

                        <small className='text-danger pb-2'>{error}</small>

                        <small>Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our <br /> <a class="privacy-policy" href="privacyPolicy.html">privacy policy</a>

                            <div class="reset-box">
                                <button onClick={handleResetPassword} class="reset-btn" href="">Reset Password</button>
                            </div>

                        </small>


                        <div class="login-box">
                            <button class="login-btn" href="">Create Account</button>

                        </div>
                        <div class="register-box">
                            <p><span>Already have an account?</span><a href="login.html">Login</a></p>
                            <br />

                            <h5 class="box"><a href="home.html">Return To Store</a>
                            </h5>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;