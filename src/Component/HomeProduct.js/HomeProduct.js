import React from 'react';
import Rating from 'react-rating';
import './HomeProduct.css';

const HomeProduct = (props) => {
    const { name, img, star, wight, price, stock, starCount } = props.product;
    return (
        <div>
            <div class="home-box">
                <div class="icons">
                    <a onClick={() => props.handleAddToCart(props.product)} class="fas fa-shopping-cart"></a>

                    <a href="OrderReview.html" class="fas fa-heart"></a>

                    <a href="#" class="fas fa-eye"></a>
                </div>
                <div class="image">
                    <img src={img} alt="" />
                </div>
                <div class="content">
                    <h3>{name}</h3>
                    <small>{wight}/${price}</small>
                    <p><small class="small-p">only {stock} left in stock - order soon</small></p>
                    <div class="price">${price}</div>
                    <div class="stars">
                        <Rating
                            initialRating={star}
                            emptySymbol="far fa-star icon"
                            fullSymbol="fas fa-star icon"
                            readonly
                        >
                        </Rating>
                    </div>
                    <div class="review-icon">
                        <p><i class="fas fa-user user"></i></p>
                        <p>{starCount} review</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeProduct;