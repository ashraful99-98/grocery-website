
import React from 'react';
import useCart from '../../hooks/useCart';
import useProducts from '../../hooks/useProducts';
import { removeFromDb } from '../../utilities/fakedb';
import WishListProduct from '../WishListProduct/WishListProduct';
import './Wishlist.css';
const Wishlist = () => {
    const [products] = useProducts();
    const [cart, setCart] = useCart(products);
    const handleRemove = key => {
        console.log(key);
        const newCart = cart.filter(product => product.key !== key);
        setCart(newCart);
        removeFromDb(key);

    }
    return (
        <div>
            <div class="heading-section">
                <div className="heading-div">
                    <h1 class="head">Wishlist</h1>
                    <p class="heading-p"> <a href="home.html">Home<span>>></span></a>Wishlist </p>
                </div>
            </div>

            <div class="wishlist-container container">
                <div class="wishlist-product">
                    <div class="row row-cols-4 wishlist-row">
                        <div class="col">Image</div>
                        <div class="col">Product</div>
                        <div class="col">Price</div>
                        <div class="col">Remove</div>
                    </div>
                    {
                        cart.map(product => <WishListProduct
                            key={product.key}
                            product={product}
                            handleRemove={handleRemove}>

                        </WishListProduct>)

                    }
                </div>
            </div>
        </div>
    );
};

export default Wishlist;