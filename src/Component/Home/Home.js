import React from 'react';
import './Home.css';
import slider1 from '../picutre/Image/home-img-1.png';
import slider2 from '../picutre/Image/home-img-2.png';
import slider3 from '../picutre/Image/home-img-3.png';
import banner1 from '../picutre/Image/banner-1.jpg';
import banner2 from '../picutre/Image/banner-2.jpg';
import banner3 from '../picutre/Image/banner-3.jpg';


let slides = document.querySelectorAll('.home .slides-container .slide');
let index = 0;

function next() {
    slides[index].classList.remove('active');
    index = (index + 1) % slides.length;
    slides[index].classList.add('active');
}

function prev() {
    slides[index].classList.remove('active');
    index = (index - 1 + slides.length) % slides.length;
    slides[index].classList.add('active');
}

const Home = () => {

    return (
        <div>
            <section class="home">
                <div id="carouselExampleDark" class="carousel carousel-dark slide slides-container" data-bs-ride="carousel">
                    <div class="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    </div>
                    <div class="carousel-inner">

                        <div class="carousel-item slide active">
                            <div class="content">
                                <span>fresh and organic</span>
                                <h3>upto 50% off</h3>
                                <a href="shop.html" class="slide-btn">shop now</a>
                            </div>
                            <div class="image">
                                <img src={slider1} alt="" />
                            </div>
                        </div>

                        <div class="carousel-item slide">
                            <div class="content">
                                <span>fresh and organic</span>
                                <h3>upto 50% off</h3>
                                <a href="shop.html" class="slide-btn">shop now</a>
                            </div>
                            <div class="image">
                                <img src={slider2} alt="" />
                            </div>
                        </div>
                        <div class="carousel-item slide">
                            <div class="content">
                                <span>fresh and organic</span>
                                <h3>upto 50% off</h3>
                                <a href="shop.html" class="slide-btn">shop now</a>
                            </div>
                            <div class="image">
                                <img src={slider3} alt="" />
                            </div>
                        </div>
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                </div>
            </section>

            <section class="banner-container container">

                <div class="banner">
                    <img src={banner1} alt="" />
                    <div class="content">
                        <span>limited sales</span>
                        <h3>upto 50% off</h3>
                        <a href="#" class="banner-btn">shop now</a>
                    </div>
                </div>

                <div class="banner">
                    <img src={banner2} alt="" />
                    <div class="content">
                        <span>limited sales</span>
                        <h3>upto 50% off</h3>
                        <a href="#" class="banner-btn">shop now</a>
                    </div>
                </div>

                <div class="banner">
                    <img src={banner3} alt="" />
                    <div class="content">
                        <span>limited sales</span>
                        <h3>upto 50% off</h3>
                        <a href="#" class="banner-btn">shop now</a>
                    </div>
                </div>

            </section>

        </div>
    );
};

export default Home;