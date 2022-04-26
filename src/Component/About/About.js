import React from 'react';
import './About.css';
import aboutImg from '../picutre/Image/about-img.jpg';
import gellaryImg1 from '../picutre/Image/gallery-img-1.jpg';
import gellaryImg2 from '../picutre/Image/gallery-img-2.jpg';
import gellaryImg3 from '../picutre/Image/gallery-img-3.jpg';
import gellaryImg4 from '../picutre/Image/gallery-img-4.jpg';
import gellaryImg5 from '../picutre/Image/gallery-img-5.jpg';
import gellaryImg6 from '../picutre/Image/gallery-img-6.jpg';

const About = () => {
    return (
        <div>
            <div class="heading-section">
                <div className="heading-div">
                    <h1 class="head">About Us</h1>
                    <p class="heading-p"> <a href="home.html">home <span>>></span> </a> about </p>
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



        </div>
    );
};

export default About;