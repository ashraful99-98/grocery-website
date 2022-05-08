import React from 'react';

const Register = () => {
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

                    <div class="login-from">

                        <input type="text" name="" id="" placeholder="First Name" />
                        <input type="text" name="" id="" placeholder="Last Name" />
                        <input type="email" name="" id="" placeholder="Email" />
                        <input type="password" name="" id="" placeholder="Password" />
                        <small>Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our <br /> <a class="privacy-policy" href="privacyPolicy.html">privacy policy</a></small>
                        <div class="login-box">
                            <a class="login-btn" href="">Create</a>
                        </div>
                        <div class="register-box">
                            <a href="login.html">Login Account</a>
                            <br />
                            <br />
                            <h5 class="box"><a href="home.html">Return To Store</a>
                            </h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;