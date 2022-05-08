import React from 'react';
import './About.css';
import aboutImg from '../picutre/Image/about-img.jpg';
import gellaryImg1 from '../picutre/Image/gallery-img-1.jpg';
import gellaryImg2 from '../picutre/Image/gallery-img-2.jpg';
import gellaryImg3 from '../picutre/Image/gallery-img-3.jpg';
import gellaryImg4 from '../picutre/Image/gallery-img-4.jpg';
import gellaryImg5 from '../picutre/Image/gallery-img-5.jpg';
import gellaryImg6 from '../picutre/Image/gallery-img-6.jpg';
import client1 from '../picutre/Image/client-1_200x200.png';
import client2 from '../picutre/Image/client-2_200x200.png';
import client3 from '../picutre/Image/client-3_200x200.png';
import client4 from '../picutre/Image/client-4_200x200.png';
import client5 from '../picutre/Image/client-5_200x200.png';
import client6 from '../picutre/Image/client-6_200x200.png';
import service1 from '../picutre/Image/service1.png';
import service2 from '../picutre/Image/service2.png';
import service3 from '../picutre/Image/service3.png';
import service4 from '../picutre/Image/service4.png';
import grocer from '../picutre/Image/groca-new.png';
import pic1 from '../picutre/Image/Untitled-2_180x.png';
import pic2 from '../picutre/Image/test-2_180x.png';
import pic3 from '../picutre/Image/test-3_180x.png';
const About = () => {

    return (
        <div>
            <div class="heading-section">
                <div className="heading-div">
                    <h1 class="head">About Us</h1>
                    <p class="heading-p"> <a href="home.html">home <span>>></span></a>about </p>
                </div>
            </div>

            <section class="about container">

                <div class="image">
                    <img src={aboutImg} alt="" />
                </div>

                <div class="content">
                    <div>
                        <span>welcome to our shop</span>
                        <h3>fresh and organic groceries</h3>
                        <p>Organic vegetables are often contaminated with harmful disease-causing bacteria, warns a new study.
                            Organic vegetables are often contaminated with harmful disease-causing bacteria, warns a new study.</p>
                        <p>Organic fruit and vegetables are becoming increasingly popular as more people eat healthy diets and avoid pesticides, fertilisers and herbicides.
                            Vegetables in particular can contain single-celled organism's like free-living amoebae (FLA), which feed on bacteria, some of which can be extremely harmful to humans.</p>
                        <a href="#" class="about-btn">read more</a>
                    </div>
                </div>

            </section>

            <section class="our-services-section">
                <div class="container our-services">

                    <div class="our-services-text">
                        <h2>Our Services</h2>
                        <h5>What we provide</h5>
                        <div class="our-service">
                            <div>
                                <img src={pic1} alt="" height="48px" width="48px" />
                            </div>
                            <div class="our-service-text">
                                <h4>Fresh Fruits</h4>
                                <p>Fresh produce means fruits and vegetables that have not been processed in any manner.</p>
                            </div>
                        </div>
                        <div class="our-service">
                            <div>
                                <img src={pic2} alt="" height="48px" width="48px" />
                            </div>
                            <div class="our-service-text">
                                <h4>Healthy Meat</h4>
                                <p>A healthy balanced diet can include protein from meat, as well as from fish and eggs or non-animal sources such as beans and pulses. Meats such as chicken, pork, lamb and beef are all rich in protein. Red meat provides us with iron, zinc and B vitamins. Meat is one of the main sources of vitamin B12 in the diet</p>
                            </div>
                        </div>
                        <div class="our-service">
                            <div>
                                <img src={pic3} alt="" height="48px" width="48px" />
                            </div>
                            <div class="our-service-text">
                                <h4>Organic Veggies</h4>
                                <p>
                                    Is organic food more nutritious than regular food? Organic foods are not healthier, per se, in terms of nutrients. You are still getting the same benefits in conventionally grown foods as you are in organic foods.</p>
                            </div>
                        </div>
                    </div>

                    <img src={grocer} alt="" />


                </div>
            </section>

            <section class="container">


            </section>


            <section class="services">
                <div class="container">
                    <h3>Know About Nutrition Programme</h3>
                    <p>"We provide food & pantry items to those in need"</p>

                    <div class="row row-cols-2">
                        <div class="col">
                            <div class="service">
                                <div class="service-text">
                                    <h5>Keeps Healthy Record</h5>
                                    <small>se a filing cabinet, 3-ring binder, or desktop divider with individual folders. Store files on a computer, where you can scan and save documents or type up notes from an appointment.</small>
                                </div>
                                <div class="service-img">
                                    <img src={service1} alt="" />
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="service">
                                <div class="service-img">
                                    <img src={service2} alt="" />
                                </div>
                                <div class="service-text">
                                    <h5>Meats Reduces Fat</h5>
                                    <small>Meat can be a part of a healthy weight loss diet. The key is to eat lean meats with higher protein content and less saturated fat content. You may also want to stay away from processed meat. </small>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="service">
                                <div class="service-text">
                                    <h5>Eggs Make you Fit</h5>
                                    <small>Eggs can help you lose weight because of their high protein content, which keeps you full longer. That protein may also slightly increase your metabolism, which can help you burn more calories.</small>
                                </div>
                                <div class="service-img">
                                    <img src={service3} alt="" />
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="service">
                                <div class="service-img">
                                    <img src={service4} alt="" />
                                </div>
                                <div class="service-text">
                                    <h5>Pure Green Vegetables</h5>
                                    <small>Spinach. As a heart-healthy food, spinach is packed with nutrients. ...
                                        Kale. As one of the best dark green leafy vegetables, kale packs in the vitamins, minerals, and antioxidants. ...
                                        Collard Greens. ...
                                        Bok Choy. ...
                                        Swiss Chard. ...
                                        Romaine Lettuce.</small>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </section>

            <section class="gallery container">

                <div className="gallery-title">
                    <h1 class="title"> <span>our <span>gallery</span></span> <a href="#">view all >></a> </h1>
                </div>

                <div class="box-container">

                    <div class="box">
                        <img src={gellaryImg1} alt="" />
                        <div class="icons">
                            <a href="#" class="fas fa-eye"></a>
                            <a href="#" class="fas fa-heart"></a>
                            <a href="#" class="fas fa-share-alt"></a>
                        </div>
                    </div>

                    <div class="box">
                        <img src={gellaryImg2} alt="" />
                        <div class="icons">
                            <a href="#" class="fas fa-eye"></a>
                            <a href="#" class="fas fa-heart"></a>
                            <a href="#" class="fas fa-share-alt"></a>
                        </div>
                    </div>

                    <div class="box">
                        <img src={gellaryImg3} alt="" />
                        <div class="icons">
                            <a href="#" class="fas fa-eye"></a>
                            <a href="#" class="fas fa-heart"></a>
                            <a href="#" class="fas fa-share-alt"></a>
                        </div>
                    </div>

                    <div class="box">
                        <img src={gellaryImg4} alt="" />
                        <div class="icons">
                            <a href="#" class="fas fa-eye"></a>
                            <a href="#" class="fas fa-heart"></a>
                            <a href="#" class="fas fa-share-alt"></a>
                        </div>
                    </div>

                    <div class="box">
                        <img src={gellaryImg5} alt="" />
                        <div class="icons">
                            <a href="#" class="fas fa-eye"></a>
                            <a href="#" class="fas fa-heart"></a>
                            <a href="#" class="fas fa-share-alt"></a>
                        </div>
                    </div>

                    <div class="box">
                        <img src={gellaryImg6} alt="" />
                        <div class="icons">
                            <a href="#" class="fas fa-eye"></a>
                            <a href="#" class="fas fa-heart"></a>
                            <a href="#" class="fas fa-share-alt"></a>
                        </div>
                    </div>

                </div>

            </section>


            <section>
                <div class="container">
                    <div class="row row-cols-1 row-cols-sm-3 row-cols-md-6  awards">
                        <div class="col">
                            <img src={client1} alt="" />
                        </div>
                        <div class="col">
                            <img src={client2} alt="" />
                        </div>
                        <div class="col">
                            <img src={client3} alt="" />
                        </div>
                        <div class="col">
                            <img src={client4} alt="" />
                        </div>
                        <div class="col">
                            <img src={client5} alt="" />
                        </div>
                        <div class="col">
                            <img src={client6} alt="" />
                        </div>
                    </div>
                </div>
            </section>



        </div>
    );
};

export default About;