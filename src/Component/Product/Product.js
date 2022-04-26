import React from 'react';
import Rating from 'react-rating';
import './Product.css';

const Product = (props) => {
    const { name, img, star, wight, price, stock } = props.product;
    return (
        <div>
            <div class="box">
                <div class="icons">
                    <a href="#" class="fas fa-shopping-cart"></a>
                    <a href="#" class="fas fa-heart"></a>
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
                </div>
            </div>
        </div>
    );
};

export default Product;