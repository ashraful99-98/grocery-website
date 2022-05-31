import React from 'react';
import useAuth from '../../hooks/useAuth';

import '../Header/Header.css';
import headerLogo from '../picutre/Image/logo_grocery.jpg';

const Header = () => {

    const { user, logOut } = useAuth();

    return (
        <div>
            <header class="header">
                <div class="container">
                    <nav class="navbar navbar-expand-lg header-nav">
                        <div>
                            <a href="home.html" class="logo"><img src={headerLogo} alt="" /></a>
                        </div>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarText">
                            <ul class="navbar-nav navbar-ul">
                                <li class="nav-item">
                                    <a class="nav-link" aria-current="page" href="home.html">Home</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="about.html">About</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="shop.html">Shop</a>
                                </li>
                                <li class="nav-item dropdown">
                                    <a class="nav-link dropdown-toggle" href="#" id="navbarScrollingDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Review
                                    </a>
                                    <ul class="dropdown-menu" aria-labelledby="navbarScrollingDropdown">
                                        <li><a class="dropdown-item dropdown" href="orderReview.html">Order Review</a><hr class="dropdown-divider" /></li>
                                        <li><a class="dropdown-item dropdown" href="orderReview.html">Cart</a></li>
                                        <li><hr class="dropdown-divider" /></li>
                                        <li><a class="dropdown-item dropdown" href="clientReview.html">Client Review</a></li>
                                    </ul>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="blog.html">Blog</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="contact.html">Contact</a>
                                </li>
                            </ul>


                        </div>
                        < div class="icons">

                            <a class="fas fa-shopping-cart icon" href="orderReview.html"> </a>
                            <a class="fas fa-heart icon" href="wishList.html"> </a>
                            <a class="fas fa-user icon" href="login.html"></a>
                            {/* <p>Hi! {user.displayname}</p>

                            {
                                user.email ?
                                    <button onClick={logOut}>Log Out</button>
                                    :
                                    <a href="login.html">Login</a>
                            } */}


                        </div>
                    </nav>
                </div>

            </header>

        </div >
    );
};

export default Header;
