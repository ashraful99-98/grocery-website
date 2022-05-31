import React from 'react';
import './Footer.css';
import payment from '../picutre/Image/payment.png';
import footerImg from '../picutre/Image/logo_grocery.jpg';

const Footer = () => {
    return (
        <div>
            <section class="footer">

                <div class="box-container container">

                    <div class="box">
                        <h3>quick links</h3>
                        <a href="home.html"> <i class="fas fa-arrow-right"></i> home</a>
                        <a href="about.html"> <i class="fas fa-arrow-right"></i> about</a>
                        <a href="shop.html"> <i class="fas fa-arrow-right"></i> shop</a>
                        <a href="orderReview.html"> <i class="fas fa-arrow-right"></i>order review</a>
                        <a href="blog.html"> <i class="fas fa-arrow-right"></i> blog</a>
                        <a href="contact.html"> <i class="fas fa-arrow-right"></i> contact</a>
                    </div>

                    <div class="box">
                        <h3>extra links</h3>
                        <a href="orderReview.html"> <i class="fas fa-arrow-right"></i> my order </a>
                        <a href="wishlist.html"> <i class="fas fa-arrow-right"></i> my favorite </a>
                        <a href="wishlist.html"> <i class="fas fa-arrow-right"></i> my wishlist </a>
                        <a href="login.html"> <i class="fas fa-arrow-right"></i> my account </a>
                        <a href="help.html"> <i class="fas fa-arrow-right"></i> help </a>
                    </div>

                    <div class="box">
                        <h3>follow us</h3>
                        <a href="#"> <i class="fab fa-facebook-f"></i> facebook </a>
                        <a href="#"> <i class="fab fa-twitter"></i> twitter </a>
                        <a href="#"> <i class="fab fa-instagram"></i> instagram </a>
                        <a href="#"> <i class="fab fa-linkedin"></i> linkedin </a>
                        <a hrefef="#"> <i class="fab fa-pinterest"></i> pinterest </a>
                    </div>

                    <div class="box">
                        <img src={footerImg} alt="" />
                        <h3>newsletter</h3>
                        <p>subscribe for latest updates</p>

                        <div class="submit">
                            <input type="email" value="" placeholder="Your email address" name="contact[email]" class="submit-mail" aria-label="Your email address" required="required" />
                            <input type="hidden" name="contact[tags]" value="newsletter" />
                            <button type="submit" class="submit-btn" name="subscribe" value=""><span class="span" >Submit</span><i class=" fa fa-paper-plane" ></i></button>
                        </div>
                        <img src={payment} class="payment" alt="" />
                    </div>
                </div>
            </section>
            <section class="credit">created by Kamran & Masum | all rights reserved!</section>
        </div>
    );
};

export default Footer;