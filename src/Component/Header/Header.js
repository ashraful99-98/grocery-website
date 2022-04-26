import React from 'react';
import '../Header/Header.css';

const Header = () => {
    return (
        <div>
            <header class="header">
                <a href="home.html" class="logo"> <i class="fas fa-shopping-basket"></i> grocery </a>
                
                <nav class="navbar">
                    <a href="home.html">home</a>
                    <a href="shop.html">shop</a>
                    <a href="about.html">about</a>
                    <a href="review.html">review</a>
                    <a href="blog.html">blog</a>
                    <a href="contact.html">contact</a>
                </nav>

                <div class="icons">
                    <div id="login-btn" class="fas fa-user"></div>
                </div>
            </header>
        </div>
    );
};

export default Header;