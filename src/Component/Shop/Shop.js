import React, { useEffect, useState } from 'react';
import './Shop.css'
import cart1 from '../picutre/Image/cat-1.png';
import cart2 from '../picutre/Image/cat-2.png';
import cart3 from '../picutre/Image/cat-3.png';
import cart4 from '../picutre/Image/cat-4.png';
import cart5 from '../picutre/Image/cat-5.png';
import Product from '../Product/Product';
import Cart from '../Cart/Cart';
import useCart from '../../hooks/useCart';
import { addToDb } from '../../utilities/fakedb';

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useCart(products);
    const [pageCount, setPageCount] = useState(0);
    const [page, setPage] = useState(0);
    // products to be rendered on the UI
    const [displayProducts, setDisplayProducts] = useState([]);
    const size = 4;
    useEffect(() => {
        // fetch('./product.JSON')
        fetch(`http://localhost:5000/products?page=${page}&&size=${size}`)
            .then(res => res.json())
            .then(data => {
                // setProducts(data);
                // setDisplayProducts(data);
                setProducts(data.products);
                setDisplayProducts(data.products);
                const count = data.count;
                const pageNumber = Math.ceil(count / size);
                setPageCount(pageNumber);
            });
    }, [page]);

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
            <div class="heading-section">

                <div className="heading-div">
                    <h1 class="head">our shop</h1>
                    <p class="heading-p"> <a href="home.html">Home<span>>></span></a>shop </p>
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
                        <a href="#product">view all >></a> </h1>
                </div>

                <div class="box-container" id="product">
                    {
                        displayProducts.map(product => <Product
                            key={product.key}
                            product={product}
                            handleAddToCart={handleAddToCart}
                        >
                        </Product>
                        )

                    }

                </div>
                <div className="pagination">
                    {
                        [...Array(pageCount).keys()]
                            .map(number => <button
                                className={number === page ? 'selected' : ''}
                                key={number}
                                onClick={() => setPage(number)}
                            >{number + 1}</button>)
                    }
                </div>

            </section >
            <section class="container cart-item">
                <Cart cart={cart}></Cart>
            </section>
        </div >
    );
};

export default Shop;