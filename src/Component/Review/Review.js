import React from 'react';
import './Review.css';
import reviewIcon1 from '../picutre/Image/icon-1.png';
import reviewIcon2 from '../picutre/Image/icon-2.png';
import reviewIcon3 from '../picutre/Image/icon-3.png';
import reviewPerson1 from '../picutre/Image/pic-1.png';
import reviewPerson2 from '../picutre/Image/pic-2.png';
import reviewPerson3 from '../picutre/Image/pic-3.png';
import reviewPerson4 from '../picutre/Image/pic-4.png';
import reviewPerson5 from '../picutre/Image/pic-5.png';
import reviewPerson6 from '../picutre/Image/pic-6.png';

const Review = () => {
    return (
        <div>

            <div class="heading-section">
                <div className="heading-div">
                    <h1 class="head">client's review</h1>
                    <p class="heading-p"> <a href="home.html">home <span>>></span> </a> review </p>
                </div>
            </div>


            <section class="info-container container">

                <div class="info">
                    <div>
                        <img src={reviewIcon1} alt="" />
                    </div>
                    <div class="content">
                        <h3>fast delivery</h3>
                        <span>within 30 minutes</span>
                    </div>
                </div>

                <div class="info">
                    <div>
                        <img src={reviewIcon2} alt="" />
                    </div>
                    <div class="content">
                        <h3>24 / 7 available</h3>
                        <span>call us anytime</span>
                    </div>
                </div>

                <div class="info">
                    <div>
                        <img src={reviewIcon3} alt="" />
                    </div>
                    <div class="content">
                        <h3>easy payments</h3>
                        <span>cash or credits</span>
                    </div>
                </div>

            </section>

            <section class="review container">

                <div class="box">
                    <div class="user">
                        <img src={reviewPerson1} alt="" />
                        <div class="info">
                            <h3>MZ Ashraful</h3>
                            <span>happy client</span>
                        </div>
                    </div>
                    <p>In,This website services is very good.I am satisfied with that. You all can buy food and product in this website.
                        Thanks to grocery and the seller.
                        I am so glad to have this service🖤☺️</p>
                </div>

                <div class="box">
                    <div class="user">
                        <img src={reviewPerson2} alt="" />
                        <div class="info">
                            <h3>Jannat Khan</h3>
                            <span>happy client</span>
                        </div>
                    </div>
                    <p>In,This website services is very good.I am satisfied with that. You all can buy food and product in this website.
                        Thanks to grocery and the seller.
                        I am happy for this services to have this service</p>
                </div>

                <div class="box">
                    <div class="user">
                        <img src={reviewPerson3} alt="" />
                        <div class="info">
                            <h3>MD Kmaran</h3>
                            <span>happy client</span>
                        </div>
                    </div>
                    <p>In,This website services is very good.I am satisfied with that. You all can buy food and product in this website.
                        Thanks to grocery and the seller.
                        I am happy for this services to have this service</p>
                </div>

                <div class="box">
                    <div class="user">
                        <img src={reviewPerson4} alt="" />
                        <div class="info">
                            <h3>MD Masum</h3>
                            <span>happy client</span>
                        </div>
                    </div>
                    <p>In,This website services is very good.I am satisfied with that. You all can buy food and product in this website.
                        Thanks to grocery and the seller.
                        I am happy for this services to have this service</p>
                </div>

                <div class="box">
                    <div class="user">
                        <img src={reviewPerson5} alt="" />
                        <div class="info">
                            <h3>Sumon Ahmed</h3>
                            <span>happy client</span>
                        </div>
                    </div>
                    <p>In,This website services is very good.I am satisfied with that. You all can buy food and product in this website.
                        Thanks to grocery and the seller.
                        I am happy for this services to have this service</p>
                </div>

                <div class="box">
                    <div class="user">
                        <img src={reviewPerson6} alt="" />
                        <div class="info">
                            <h3>Ashraful Kamran</h3>
                            <span>happy client</span>
                        </div>
                    </div>
                    <p>In,This website services is very good.I am satisfied with that. You all can buy food and product in this website.
                        Thanks to grocery and the seller.
                        I am happy for this services to have this service</p>
                </div>

            </section>


        </div>
    );
};

export default Review;