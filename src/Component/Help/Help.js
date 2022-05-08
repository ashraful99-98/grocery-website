import React from 'react';
import './Help.css';
import help1 from '../picutre/Image/help1.png';
import help2 from '../picutre/Image/help2.png';
import help3 from '../picutre/Image/help3.png';
import help4 from '../picutre/Image/help4.png';
import help5 from '../picutre/Image/help5.png';
import help6 from '../picutre/Image/help6.png';
import help7 from '../picutre/Image/help7.png';
import help8 from '../picutre/Image/help8.png';
import help9 from '../picutre/Image/help9.png';

const Help = () => {
    return (
        <div>
            <section class="container">
                <div class="help-section">
                    <h2>Hi! How can we help?</h2>
                    <input type="email" class="help-email" name="" id="" placeholder="Search" />
                </div>
            </section>
            <section className="container">
                <div class="artical">
                    <h3>Popular Articles</h3>
                    <div class="row row-cols-3 artical-info">
                        <div class="col">
                            <h5>Are you a Senior?</h5>
                            <p>Instacart offers a special Senior Support Service for customers over age 60...</p>
                        </div>
                        <div class="col">
                            <h5>How Instacart works</h5>
                            <p>You’re busy, so every minute counts. Let us connect you with Shoppers in your area...</p>
                        </div>
                        <div class="col">
                            <h5>Instacart Express benefits</h5>
                            <p>You don’t need a membership to shop with Instacart. However, Instacart Express...</p>
                        </div>
                        <div class="col">
                            <h5>Tracking your order and delivery</h5>
                            <p>It’s easy to track your order, from the moment your personal shopper starts...</p>
                        </div>
                        <div class="col">
                            <h5>Coupons and promotions</h5>
                            <p>Coupons and in-store discounts are sometimes available on Instacart. The coupons...</p>
                        </div>
                        <div class="col">
                            <h5>Problem with your order</h5>
                            <p>Receive a delivery you’re not completely satisfied with? In most cases...</p>
                        </div>
                    </div>
                </div>
            </section>
            <section class="container">
                <div className="topic">
                    <h3>All Topics</h3>
                    <div class="topic-item">

                        <div class="row row-cols-2 topic-info">
                            <div class="col info ">
                                <div>
                                    <img src={help1} alt="" />
                                </div>
                                <div class="info-help">

                                    <h6>Instacart Express benefits</h6>
                                    <small>You don’t need a membership to shop with Instacart. </small>
                                </div>
                            </div>
                            <div class="col  info">
                                <div>
                                    <img src={help2} alt="" />
                                </div>
                                <div class="info-help">

                                    <h6>How Instacart works</h6>
                                    <small>You’re busy, so every minute counts. Let us </small>
                                </div>
                            </div>
                            <div class="col  info">
                                <dir>
                                    <img src={help3} alt="" />
                                </dir>
                                <div class="info-help">

                                    <h6>Purchase a gift card</h6>
                                    <small>With gift cards, you can share Instacart </small>
                                </div>
                            </div>
                            <div class="col  info">
                                <div>
                                    <img src={help4} alt="" />
                                </div>
                                <div class="info-help">

                                    <h6>place an order</h6>
                                    <small>We make it easy to find the items you</small>
                                </div>
                            </div>
                            <div class="col  info">
                                <div>
                                    <img src={help5} alt="" />
                                </div>
                                <div class="info-help">

                                    <h6>Order In Process</h6>
                                    <small>The Instacart app lets you track your personal</small>
                                </div>
                            </div>
                            <div class="col  info">
                                <div>
                                    <img src={help6} alt="" />
                                </div>
                                <div class="info-help">

                                    <h6>Delivery</h6>
                                    <small>After the items in your order have been picked and packed, </small>
                                </div>
                            </div>
                            <div class="col  info">
                                <div>
                                    <img src={help5} alt="" />
                                </div>
                                <div class="info-help">

                                    <h6>Fees and pricing</h6>
                                    <small>
                                        It’s important for our customers to understand the
                                    </small>
                                </div>
                            </div>
                            <div class="col  info ">
                                <div>
                                    <img src={help7} alt="" />
                                </div>
                                <div class="info-help">

                                    <h6>Profile and account setting</h6>
                                    <small>Personal setting, notifications,login issues</small>
                                </div>
                            </div>
                            <div class="col  info">
                                <div>
                                    <img src={help8} alt="" />
                                </div>
                                <div class="info-help">

                                    <h6>Instacart Sweepstakes rules</h6>
                                    <small>Views our monthly Sweepstakes  </small>
                                </div>
                            </div>
                            <div class="col  info">
                                <div>
                                    <img src={help9} alt="" />
                                </div>
                                <div class="info-help">
                                    <h6>Promo code and gift cards terms</h6>
                                    <small>Terms For Promotional Instacart Express Code</small>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
            <section class="container">

                <div class="row info-div">
                    <div class="col-sm-5 info-help">
                        <h4>Need to get in touch?</h4>
                        <p>Log in to help us get you to the right help quickly.
                        </p>
                        <a class="login-help" href="login.html">LogIn</a>

                    </div>
                    <div class="col-sm-5 info-help">
                        <h4>Are you a Senior?
                        </h4>
                        <p>Contact our dedicated Senior Support Service if you need help getting started or with an existing order.</p>
                    </div>
                </div>

            </section>
        </div>
    );
};

export default Help;