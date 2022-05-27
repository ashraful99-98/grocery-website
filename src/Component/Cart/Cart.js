import React from 'react';
import './Cart.css';
const Cart = (props) => {
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

                <h3>Order Semmary</h3>
                <h4>Iteams Ordered:{totalQuantity}</h4>

                <div>
                    <p class="cart-para"><span>Subtotal:</span> <samp></samp> <span>৳{total.toFixed(2)}</span> </p>
                    <p class="cart-para"><span>Taxes:</span> <span>৳{tax.toFixed(2)}</span> </p>
                    <p class="cart-para"> <span>Delivery Charge:</span> <span>৳{shipping}</span> </p>
                    <p class="cart-para"> <span>Total:</span> <span>৳{grandTotal.toFixed(2)}</span> </p>
                    {props.children}
                    <a href="orderReview.html" class="cart-btn">Place Order</a>
                </div>
            </div>

        </div>
    );
};

export default Cart;