import React, { useEffect, useState } from 'react';
import './Shop.css'
import cart1 from '../picutre/Image/cat-1.png';
import cart2 from '../picutre/Image/cat-2.png';
import cart3 from '../picutre/Image/cat-3.png';
import cart4 from '../picutre/Image/cat-4.png';
import cart5 from '../picutre/Image/cat-5.png';
import Product from '../Product/Product';

const Shop = () => {
    const [products, setProducts] = useState([]);
    // const [cart, setCart] = useState([]);

    useEffect(() => {
        fetch('./product.JSON')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, []);

    // const handleAddToCart = (product) => {
    //     const newCart = [...cart, product];
    //     setCart(newCart);
    // }
    return (
        <div>
            <div class="heading-section">
                <div className="heading-div">
                    <h1 class="head">our shop</h1>
                    <p class="heading-p"> <a href="home.html">home <span>>></span> </a> shop </p>
                </div>
            </div>

            <section class="category container">

                <div class='category-title'>
                    <h1 class="title"> <span>our <span class="span-category">category</span></span>
                        <a href="#">view all >></a> </h1>
                </div>

                <div class="box-container">

                    <a href="#" class="box">
                        <img src={cart1} alt="" />
                        <h3>fresh fruits</h3>
                    </a>

                    <a href="#" class="box">
                        <img src={cart2} alt="" />
                        <h3>vegetables</h3>
                    </a>

                    <a href="#" class="box">
                        <img src={cart3} alt="" />
                        <h3>organic spices</h3>
                    </a>

                    <a href="#" class="box">
                        <img src={cart4} alt="" />
                        <h3>fresh meat</h3>
                    </a>

                    <a href="#" class="box">
                        <img src={cart5} alt="" />
                        <h3>organic wheat</h3>
                    </a>

                </div>

            </section>
            <section class="products container">

                <div class='category-title'>
                    <h1 class="title"> <span>our <span class="span-category">products</span></span>
                        <a href="#products">view all >></a> </h1>
                </div>

                <div class="box-container">

                    {
                        products.map(product => <Product
                            key={product.key}
                            product={product}
                        // handleAddToCart={handleAddToCart}
                        >
                        </Product>)
                    }
                </div>

            </section>
        </div>
    );
};

export default Shop;