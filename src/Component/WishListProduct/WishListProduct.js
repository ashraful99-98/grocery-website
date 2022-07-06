import React from 'react';
import './WishListProduct.css';

const WishListProduct = (props) => {
    const { img, name, price, quantity, key } = props.product;
    const { handleRemove } = props;
    return (
        <div>

            <div class="row row-cols-4 wishlist-item">
                <p class="col p">
                    <img src={img} alt="" width="130px" height="120px" /></p>
                <p class="col p">{name}</p>
                <div>
                    <p class="col p">৳{price}</p>
                    <p class="col p">Qty {quantity}</p>
                </div>
                <p class="col"><i onClick={
                    () => handleRemove(key)} class="fas fa-trash-alt wishlist-icon"></i></p>
            </div>

        </div>
    );
};

export default WishListProduct