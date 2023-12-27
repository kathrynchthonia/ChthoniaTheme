// checkout/index.js
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createOrder } from '../actions/CheckoutActions';

const Checkout = () => {
    const dispatch = useDispatch();
    const [order, setOrder] = useState({
        billing: {
            first_name: '',
            last_name: '',
            address_1: '',
            city: '',
            postcode: '',
            country: '',
            email: '',
            phone: ''
        },
        line_items: [], // You need to fill this array with the products in the cart
        payment_method: '',
        payment_method_title: '',
        set_paid: true
    });

    const handleInputChange = (e) => {
        setOrder({
            ...order,
            billing: {
                ...order.billing,
                [e.target.name]: e.target.value
            }
        });
    };

    const handleCheckout = (e) => {
        e.preventDefault();
        dispatch(createOrder(order));
    };

    return (
        <div>
            <h2>Checkout</h2>
            <form onSubmit={handleCheckout}>
                {/* Render form fields for the billing information here */}
                <button type="submit">Place Order</button>
            </form>
        </div>
    );
};

export default Checkout;