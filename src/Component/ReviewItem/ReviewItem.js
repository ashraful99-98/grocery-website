
import React from 'react';
import './ReviewItem.css';

const ReviewItem = (props) => {
    const { img, name, price, quantity, key } = props.product;
    const { handleRemove } = props;
    return (

        <div class="review-item">
            <div class="item-img">
                <img src={img} alt="" width="130px" height="120px" />
            </div>

            <div>
                <h4>{name}</h4>

                <p class="paragraph">Pure and fresh products. If, this product is not pure,  you can  changing your product.</p>

                <div class="review-p">

                    <p class="paragraph">Qty {quantity}</p>
                    <p class="price">${price}</p>

                </div>

            </div>
            <div class="icon-div">
                <i onClick={
                    () => handleRemove(key)} class="fas fa-trash-alt review-icon"></i>
            </div>
        </div>

    );
};

export default ReviewItem;