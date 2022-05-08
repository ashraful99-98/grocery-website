import React from 'react';
import './Login.css';
const Login = () => {
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

                    <div class="login-from">

                        <input type="email" name="" id="" placeholder="Enter Your Email" />
                        <input type="password" name="" id="" placeholder="Enter Your Password" />
                        <div class="login-box">
                            <a class="login-btn" href="">Sign In</a>
                        </div>
                        <div class="register-box">
                            <a href="register.html">Create Account</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;