import React from 'react';
import './Footer.css';
import payment from '../picutre/Image/payment.png';

const Footer = () => {
    return (
        <div>
            <section class="footer">

                <div class="box-container container">

                    <div class="box">
                        <h3>quick links</h3>
                        <a href="home.html"> <i class="fas fa-arrow-right"></i> home</a>
                        <a href="shop.html"> <i class="fas fa-arrow-right"></i> shop</a>
                        <a href="about.html"> <i class="fas fa-arrow-right"></i> about</a>
                        <a href="review.html"> <i class="fas fa-arrow-right"></i> review</a>
                        <a href="blog.html"> <i class="fas fa-arrow-right"></i> blog</a>
                        <a href="contact.html"> <i class="fas fa-arrow-right"></i> contact</a>
                    </div>

                    <div class="box">
                        <h3>extra links</h3>
                        <a href="#"> <i class="fas fa-arrow-right"></i> my order </a>
                        <a href="#"> <i class="fas fa-arrow-right"></i> my favorite </a>
                        <a href="#"> <i class="fas fa-arrow-right"></i> my wishlist </a>
                        <a href="#"> <i class="fas fa-arrow-right"></i> my account </a>
                        <a href="#"> <i class="fas fa-arrow-right"></i> terms or use </a>
                    </div>

                    <div class="box">
                        <h3>follow us</h3>
                        <a href="#"> <i class="fab fa-facebook-f"></i> facebook </a>
                        <a href="#"> <i class="fab fa-twitter"></i> twitter </a>
                        <a href="#"> <i class="fab fa-instagram"></i> instagram </a>
                        <a href="#"> <i class="fab fa-linkedin"></i> linkedin </a>
                        <a href="#"> <i class="fab fa-pinterest"></i> pinterest </a>
                    </div>

                    <div class="box">
                        <h3>newsletter</h3>
                        <p>subscribe for latest updates</p>
                        <div>
                            <input class="submit-btn" type="email" placeholder="enter your email" />
                            <input type="submit" value="subscribe" class="btn" />
                        </div>
                        <img src={payment} class="payment" alt="" />
                    </div>
                </div>
            </section>
            <section class="credit">created by Ashraful Islam Kamran | all rights reserved!</section>
        </div>
    );
};

export default Footer;