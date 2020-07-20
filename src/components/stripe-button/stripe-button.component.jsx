import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import "./stripe-button.component.scss"

const StripeCheckoutButton = ({price})=>{
    const priceForStrip = price * 100;
    const publishableKey = 'pk_test_51GrABNBN3aZP5ei2qU9XeBBWy1YEhU7lAqOqOgKjsiWQ9D6K5U6o5XFCeBcxlfdLv1mzsHURTwBmDosggWNyNW1B00moJEze0z';
    const onToken = (token) => {
        console.log(token)
        alert('Payment successful!');
    }
    return (
        <StripeCheckout 
            label= "Pay Now"
            name="tta Clothing"
            billingAddress
            shippingAddress
            image='https://svgshare.com/i/CUz.svg'
            description = {`Your total is ${price}`}
            amount={priceForStrip}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        />
    )
}

export default StripeCheckoutButton;

