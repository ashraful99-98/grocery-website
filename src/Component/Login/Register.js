import React, { useState } from 'react';
import { getAuth, createUserWithEmailAndPassword, sendEmailVerification, sendPasswordResetEmail, updateProfile } from 'firebase/auth';

const Register = () => {
    const auth = getAuth();

    const [name, setName] = useState('');
    // const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleNameChange = e => {
        setName(e.target.value);
    }
    // const handleLastChange = e => {
    //     setLastName(e.target.value);
    // }
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
                //    RESET PASSWORD 
            })
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

                        <input onBlur={handleNameChange} type="text" name="Name" id="First-Name" placeholder="Name" required />
                        {/* <input onBlur={handleLastChange} type="text" name="Last Name" id="Last-Name" placeholder="Last Name" required /> */}
                        <input onBlur={handleEmailChange} type="email" name="Email" id="Email" placeholder="Email" required />
                        <input onBlur={handlePasswordChange} type="password" name="Password" id="Password" placeholder="Password" required />
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