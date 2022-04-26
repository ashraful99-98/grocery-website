import React from 'react';
import './Contact.css';

const Contact = () => {
    return (
        <div>
            <div class="heading-section">
                <div className="heading-div">
                    <h1 class="head">About Us</h1>
                    <p class="heading-p"> <a href="home.html">home <span>>></span> </a> about </p>
                </div>
            </div>

            <section class="contact container">

                <div class="icons-container">

                    <div class="icons">
                        <i class="fas fa-phone"></i>
                        <h3>our number</h3>
                        <p>+88-017-7860-XXXX</p>
                        <p>+111-222-3833-XXXX</p>
                    </div>

                    <div class="icons">
                        <i class="fas fa-envelope"></i>
                        <h3>our email</h3>
                        <p>grocery-web-bd22@gmail.com</p>
                        <p>grocery-web-bd.2022@gmail.com</p>
                    </div>

                    <div class="icons">
                        <i class="fas fa-map-marker-alt"></i>
                        <h3>our address</h3>
                        <p>Sylhet, Bangladesh-3100</p>
                    </div>

                </div>
                <div class="row">

                    <form action="">
                        <h3>get in touch</h3>
                        <div class="inputBox">
                            <input type="text" placeholder="enter your name" class="box" />
                            <input type="email" placeholder="enter your email" class="box" />
                        </div>
                        <div class="inputBox">
                            <input type="number" placeholder="enter your number" class="box" />
                            <input type="text" placeholder="enter your subject" class="box" />
                        </div>
                        <textarea placeholder="your message" cols="30" rows="10"></textarea>
                        <input type="submit" value="send message" class="message-btn" />
                    </form>

                    <iframe class="map"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d115806.34359550575!2d91.79094155131145!3d24.899747201107232!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x375054d3d270329f%3A0xf58ef93431f67382!2sSylhet!5e0!3m2!1sen!2sbd!4v1643525653201!5m2!1sen!2sbd"
                        allowfullscreen="" loading="lazy"></iframe>

                </div>
            </section>
        </div>
    );
};

export default Contact;