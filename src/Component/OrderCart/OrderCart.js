import React from 'react';
import './OrderCart.css';
import payment from '../picutre/Image/payment.png'
const OrderCart = (props) => {
    const { cart } = props;
    let totalQuantity = 0;
    let total = 0;
    for (const product of cart) {
        if (!product.quantity) {
            product.quantity = 1;
        }
        total = total + product.price * product.quantity;
        totalQuantity = totalQuantity + product.quantity;
    }
    const shipping = total > 0 ? 10 : 0;
    const tax = (total + shipping) * 0.10;
    const grandTotal = total + shipping + tax;
    return (
        <div>
            <div class="cart">
                <h4 class="cart-h4 h4">Cart & Payment </h4>
                <h6 class="cart-h4"><span>Iteams Ordered =</span><span>{totalQuantity}</span></h6>

                <p class="cart-h4"><span>Subtotal: </span><span>${total.toFixed(2)}</span></p>

                <p class="cart-h4"><span>Taxes:</span><span>${tax.toFixed(2)}</span></p>

                <p class="cart-h4 cart-p"><span>Delivery Charge:</span><span>${shipping}</span></p>
                <h5 class="cart-h4"><span>Total ></span><span>${grandTotal.toFixed(2)}</span></h5>

                {props.children}

                <div class="payment">
                    <h5 class="cart-h4 h5">Payment</h5>
                    <p class="cart-h4"><span>Payment Method: </span><span><img src={payment} alt="" width="140px" /></span></p>

                    <small class="cart-h4 small"><span>Card Number: </span><span><input type="" placeholder="Enter Your Card Num.." /></span></small>

                    <small class="cart-h4 small"><span>Security Code: </span><span><input type="" /></span></small>

                    <small class="cart-h4"><span>
                        <input type="checkbox" id="" name="" value="" />
                        <label for=""> I have read and accept
                        </label>
                        <a href="">Terms and conditions</a>
                    </span></small>
                    <a class="pay-btn" href="">Pay Now</a>

                </div>
            </div>

        </div>
    );
};

export default OrderCart;