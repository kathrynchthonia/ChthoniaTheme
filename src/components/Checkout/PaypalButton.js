// PayPalButton.js
import React, { useEffect, useRef } from 'react';

const PayPalButton = ({ total, onSuccess, onError }) => {
    const paypalRef = useRef();

    useEffect(() => {
        window.paypal.Buttons({
            createOrder: (data, actions) => {
                return actions.order.create({
                    purchase_units: [{
                        amount: {
                            value: total
                        }
                    }]
                });
            },
            onApprove: (data, actions) => {
                return actions.order.capture().then(details => {
                    onSuccess(details);
                });
            },
            onError: (err) => {
                onError(err);
            }
        }).render(paypalRef.current);
    }, [total, onSuccess, onError]);

    return (
        <div ref={paypalRef}></div>
    );
};

export default PayPalButton;