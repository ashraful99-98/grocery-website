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
            <div class="heading">
                <h1>about us</h1>
                <p> <a href="home.html">home >></a> about </p>
            </div>

            <section class="about">

                <div class="image">
                    <img src={aboutImg} alt="" />
                </div>

                <div class="content">
                    <div>
                        <span>welcome to our shop</span>
                        <h3>fresh and organic groceries</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae vel sequi nostrum quae nobis non quaerat
                            nisi voluptatibus recusandae reprehenderit tempore eligendi, eum quibusdam perferendis dicta, incidunt
                            dolores nemo ex.</p>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem cumque molestiae blanditiis deleniti
                            aspernatur, ab tempora quisquam sapiente commodi hic.</p>
                        <a href="#" class="btn">read more</a>
                    </div>
                </div>

            </section>

            <section class="gallery">

                <h1 class="title"> our <span>gallery</span> <a href="#">view all >></a> </h1>

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