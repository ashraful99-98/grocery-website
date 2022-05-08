import React from 'react';
import './Blog.css';
import blog1 from '../picutre/Image/blog-1.jpg';
import blog2 from '../picutre/Image/blog-2.jpg';
import blog3 from '../picutre/Image/blog-3.jpg';
import blog4 from '../picutre/Image/blog-4.jpg';
import blog5 from '../picutre/Image/blog-5.jpg';
import blog6 from '../picutre/Image/blog-6.jpg';
const Blog = () => {
    return (
        <div>

            <div class="heading-section">
                <div className="heading-div">
                    <h1 class="head">our blogs</h1>
                    <p class="heading-p"> <a href="home.html">home <span>>></span></a>blogs </p>
                </div>
            </div>

            <section class="blogs container">
                <div class='category-title'>
                    <h1 class="title"> <span>our <span class="span-category">Blogs</span></span>
                        <a href="#">view all >></a> </h1>
                </div>

                <div class="box-container">

                    <div class="box">
                        <div class="image">
                            <img src={blog1} alt="" />
                        </div>
                        <div class="content">
                            <div class="icons">
                                <a href="#"> <i class="fas fa-calendar"></i> 21st may, 2022 </a>
                                <a href="#"> <i class="fas fa-user"></i> by admin </a>
                            </div>
                            <h3>food treated with pesticides and chemical fertilisers</h3>
                            <p>Vegetables in particular can contain single-celled organism's like free-living amoebae (FLA), which feed on bacteria, some of which can be extremely harmful to humans.
                            </p>
                            <a href="#" class="blog-btn">read more</a>
                        </div>
                    </div>

                    <div class="box">
                        <div class="image">
                            <img src={blog2} alt="" />
                        </div>
                        <div class="content">
                            <div class="icons">
                                <a href="#"> <i class="fas fa-calendar"></i> 21st may, 2022 </a>
                                <a href="#"> <i class="fas fa-user"></i> by admin </a>
                            </div>
                            <h3>The contamination takes place throughout the food supply chain</h3>
                            <p>"However, comparatively little is known about the occurrence and diversity of free-living amoebae on organic vegetables and their role in transmitting human pathogens."</p>
                            <a href="#" class="blog-btn">read more</a>
                        </div>
                    </div>

                    <div class="box">
                        <div class="image">
                            <img src={blog3} alt="" />
                        </div>
                        <div class="content">
                            <div class="icons">
                                <a href="#"> <i class="fas fa-calendar"></i> 21st may, 2022 </a>
                                <a href="#"> <i class="fas fa-user"></i> by admin </a>
                            </div>
                            <h3>52 types of potentially harmful bacteria were found in</h3>
                            <p>Acanthamoeba castellanii, a bacteria capable of causing blindness and encephalitis was also recorded in almost two thirds of samples - 63 per cent.
                            </p>
                            <a href="#" class="blog-btn">read more</a>
                        </div>
                    </div>

                    <div class="box">
                        <div class="image">
                            <img src={blog4} alt="" />
                        </div>
                        <div class="content">
                            <div class="icons">
                                <a href="#"> <i class="fas fa-calendar"></i> 21st may, 2022 </a>
                                <a href="#"> <i class="fas fa-user"></i> by admin </a>
                            </div>
                            <h3>The main types of bacteria identified were Flavobacterium</h3>
                            <p>But 52 types of harmful bacteria, including Legionella,  were discovered in a third of the samples.These can cause serious diseases like pneumonia and gastrointestinal illnesses.
                            </p>
                            <a href="#" class="blog-btn">read more</a>
                        </div>
                    </div>

                    <div class="box">
                        <div class="image">
                            <img src={blog5} alt="" />
                        </div>
                        <div class="content">
                            <div class="icons">
                                <a href="#"> <i class="fas fa-calendar"></i> 21st may, 2022 </a>
                                <a href="#"> <i class="fas fa-user"></i> by admin </a>
                            </div>
                            <h3>Another species called Vermamoeba vermiformis </h3>
                            <p>Dr Moreno said: "The presence of bacteria of public health concern contained inside the free-living amoebae suggests that they are vehicles that can easily transmit pathogens.</p>
                            <a href="#" class="blog-btn">read more</a>
                        </div>
                    </div>

                    <div class="box">
                        <div class="image">
                            <img src={blog6} alt="" />
                        </div>
                        <div class="content">
                            <div class="icons">
                                <a href="#"> <i class="fas fa-calendar"></i> 21st may, 2022 </a>
                                <a href="#"> <i class="fas fa-user"></i> by admin </a>
                            </div>
                            <h3>More than 50 species of harmful bacteria -</h3>
                            <p>some that can cause severe health issues like pneumonia and gastrointestinal illnesses - were found on samples of organic spinach and lettuce, according to a Spanish study</p>
                            <a href="#" class="blog-btn">read more</a>
                        </div>
                    </div>

                </div>

            </section>

        </div>
    );
};

export default Blog;