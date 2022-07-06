import React from 'react';
import { useEffect, useState } from 'react';
import './Home.css';
import slider1 from '../picutre/Image/home-img-1.png';
import slider2 from '../picutre/Image/home-img-2.png';
import slider3 from '../picutre/Image/home-img-3.png';
import banner4 from '../picutre/Image/img-1_600x.png';
import banner5 from '../picutre/Image/img-2_600x.png';
import banner1 from '../picutre/Image/banner-1.jpg';
import banner2 from '../picutre/Image/banner-2.jpg';
import banner3 from '../picutre/Image/banner-3.jpg';
import useCart from '../../hooks/useCart';
import spacialImg from '../picutre/Image/spacialPerson.png';
import { addToDb } from '../../utilities/fakedb';
import HomeProduct from '../HomeProduct/HomeProduct';

const Home = () => {

    const [products, setProducts] = useState([]);
    const [cart, setCart] = useCart(products);
    // products to be rendered on the UI
    const [displayProducts, setDisplayProducts] = useState([]);

    useEffect(() => {
        fetch('./homeProduct.JSON')
            // fetch('http://localhost:5000/products')
            .then(res => res.json())
            .then(data => {
                setProducts(data);
                setDisplayProducts(data);
            });
    }, []);



    const handleAddToCart = (product) => {
        const exists = cart.find(pd => pd.key === product.key);
        let newCart = [];
        if (exists) {
            const rest = cart.filter(pd => pd.key !== product.key);
            exists.quantity = exists.quantity + 1;
            newCart = [...rest, product];
        }
        else {
            product.quantity = 1;
            newCart = [...cart, product];
        }
        setCart(newCart);
        // save to local storage (for now)
        addToDb(product.key);

    }

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

            <section class="banner-section container">

                <div class="banner">
                    <img src={banner4} alt="" />
                    <div class="banner-content">
                        <h3>Veggies</h3>
                        <h6>100% <span>Organic Products</span></h6>
                        <a href="shop.html" class="banner-btn1">shop now</a>
                    </div>
                </div>

                <div class="banner">
                    <img src={banner5} alt="" />
                    <div class="banner-content">
                        <h3>Fruits</h3>
                        <h6>100% <span>Organic Products</span></h6>
                        <a href="shop.html" class="banner-btn2">shop now</a>
                    </div>
                </div>

            </section>

            <section class="banner-container container">

                <div class="banner">
                    <img src={banner1} alt="" />
                    <div class="content">
                        <span>limited sales</span>
                        <h3>upto 50% off</h3>
                        <a href="#product" class="banner-btn">shop now</a>
                    </div>
                </div>

                <div class="banner">
                    <img src={banner2} alt="" />
                    <div class="content">
                        <span>limited sales</span>
                        <h3>upto 50% off</h3>
                        <a href="#product" class="banner-btn">shop now</a>
                    </div>
                </div>

                <div class="banner">
                    <img src={banner3} alt="" />
                    <div class="content">
                        <span>limited sales</span>
                        <h3>upto 50% off</h3>
                        <a href="#product" class="banner-btn">shop now</a>
                    </div>
                </div>

            </section>

            <section class="spacial-section">
                <div class="container spacial-product">
                    <div class="spacial-info">
                        <h2>Special Discount For All Grocery Products</h2>
                        <p>Customers in Ontario can now shop from Metro’s full selection of more than 26,000 grocery and pharmacy items to be delivered from the store to their door in as fast as one hour.
                            Expired</p>
                        <a href="shop.html" class="login-btn">Shop Now</a>

                    </div>
                    <div class="spacial-img">
                        <img src={spacialImg} alt="" />
                    </div>
                </div>

            </section>
            <section class="products container">

                <div class='category-title'>
                    <h1 class="title"> <span>Special<span class="span-category">products</span></span>
                        <a href="shop.html">view all >></a> </h1>
                </div>

                <div class="box-container" id="">
                    {
                        displayProducts.map(product => <HomeProduct
                            key={product.key}
                            product={product}
                            handleAddToCart={handleAddToCart}
                        >
                        </HomeProduct>)

                    }

                </div>

            </section >

            <section class="container que-section">
                <h3>Questions & Answers</h3>
                <div class="accordion" id="accordionExample">
                    <div class="accordion-item">
                        <h2 class="accordion-header" id="headingOne">
                            <button class="accordion-button que-btn" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                How does Instacart delivery and curbside pickup work?
                            </button>
                        </h2>
                        <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                            <div class="accordion-body">
                                Instacart makes it easy to order from your favorite stores. Shop for items from stores near you, with a selection of more than 500 retailers and trusted local grocers across North America. Then, Instacart will connect you with a personal shopper in your area to shop and deliver your order. Contactless delivery is available with our “Leave at my door” option.

                                You can track your order’s progress and communicate with your shopper every step of the way using the Instacart app or website.

                                Instacart also offers curbside pickup at select retail locations. Simply place your order and choose a pickup time, and a shopper will prepare your order at the store.

                                When you get to the store, use the Instacart app to notify us. Depending on the store, a shopper or store employee will bring the groceries to your car, or you can pick them up at the designated area.
                            </div>
                        </div>
                    </div>
                    <div class="accordion-item">
                        <h2 class="accordion-header" id="headingTwo">
                            <button class="accordion-button que-btn collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                How much does Instacart cost?
                            </button>
                        </h2>
                        <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                            <div class="accordion-body">
                                You don’t need a membership to order with Instacart. In fact, you can even order from warehouse clubs, like Costco, Sam’s Club, and BJ’s Wholesale Club, without a retailer club membership.

                                To get started, create an account, select the store you want to shop, and place your order. New customers may be eligible for free delivery promotions.

                                Delivery: Fees start at $3.99 for same-day orders over $35. Fees vary for one-hour deliveries, club store deliveries, and deliveries under $35.

                                Pickup: There may be a “pickup fee” (equivalent to a delivery fee for pickup orders) on your pick up order.

                                Service fees: Service fees vary and are subject to change based on factors like location and the number and types of items in your cart. Orders containing alcohol have a separate service fee.

                                With an optional Instacart Express membership, you can get $0 delivery fee on every order over $35 and lower service fees too.

                                Tipping is optional but encouraged for delivery orders. It’s a great way to show your shopper appreciation and recognition for excellent service. 100% of your tip goes directly to the shopper who delivers your order.
                            </div>
                        </div>
                    </div>
                    <div class="accordion-item">
                        <h2 class="accordion-header" id="headingThree">
                            <button class="accordion-button que-btn collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                Will I pay the same price on Instacart as I would in the store?
                            </button>
                        </h2>
                        <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                            <div class="accordion-body">
                                Retail partners set the prices of items on the Instacart marketplace. While many retailers offer everyday store prices on Instacart, some retailers may set prices on the Instacart platform that are different from in-store prices.

                                You can view pricing policies for each retailer on the Instacart app and website.
                            </div>
                        </div>
                    </div>
                    <div class="accordion-item">
                        <h2 class="accordion-header" id="headingFour">
                            <button class="accordion-button que-btn collapsed " type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                What happens if something is out of stock and I need to give specific instructions?
                            </button>
                        </h2>
                        <div id="collapseFour" class="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
                            <div class="accordion-body">
                                Instacart makes it easy to communicate with your shopper. When an item you want is out-of-stock at the store, your shopper will follow your replacement preferences.

                                You can set item and delivery instructions in advance, as well as chat directly with your shopper while they shop and deliver your items. You can tell the shopper to:

                                - Find Best Match: By default, your shopper will use their best judgement to pick a replacement for your item.
                                - Pick Specific Replacement: You can pick a specific alternative for the shopper to purchase if your first choice is out-of-stock.
                                - Don’t Replace: For items you’d rather not replace, choose “Don’t replace” to get a refund if the item is out of stock.

                                You can update or cancel your order as long as your shopper hasn’t started shopping. If you need to make changes after shopping has started, you can use the app or website to approve replacements or chat with your shopper.
                            </div>
                        </div>
                    </div>
                    <div class="accordion-item">
                        <h2 class="accordion-header" id="headingFive">
                            <button class="accordion-button que-btn collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                                What happens if there’s an issue with my order?
                            </button>
                        </h2>
                        <div id="collapseFive" class="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#accordionExample">
                            <div class="accordion-body">
                                If something isn’t right, you’ve got options. In the Instacart app or website, you can report:

                                - Missing items
                                - Incorrect items
                                - Damaged items
                                - Poor replacements
                                - Early/late orders

                                If an order never came, or you get someone else’s order, you can reach out to Instacart Care.
                            </div>
                        </div>
                    </div>
                    <div class="accordion-item">
                        <h2 class="accordion-header" id="headingSix">
                            <button class="accordion-button que-btn collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
                                Can I get contactless delivery with Instacart?
                            </button>
                        </h2>
                        <div id="collapseSix" class="accordion-collapse collapse" aria-labelledby="headingSix" data-bs-parent="#accordionExample">
                            <div class="accordion-body">
                                The health and safety of our community is our number one priority. We are excited to offer contactless delivery through our Leave at My Door delivery feature.

                                Leave at My Door delivery gives you the flexibility to have your groceries delivered without having to come to the door or be at home. You can leave delivery instructions for your shopper at checkout, and we’ll notify you when your order arrives.

                                Leave at My Door is now the default setting for all Instacart deliveries. If you’d prefer to not use this feature, simply uncheck the box that says “Leave at my door if I’m not around” at checkout.

                                Customers who order alcohol, prescriptions, or certain high-value items may need to show ID upon delivery. We ask shoppers to wear masks whenever they come into contact with customers.
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default Home;