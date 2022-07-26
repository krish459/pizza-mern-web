import React from 'react'
import {useDispatch} from 'react-redux'
import StripeCheckout from 'react-stripe-checkout' 
import { placeOrder } from '../actions/orderAction'


export default function Checkout({subtotal}) {

    const dispatch = useDispatch()
    function tokenHandler(token) {
        console.log(token);
        dispatch(placeOrder(token , subtotal))
    }

  return (
    <div>

        <StripeCheckout
            amount={subtotal*100}
            shippingAddress
            token={tokenHandler}
            stripeKey='pk_test_51KzI03SFbTdh1Us3InmGMdTTLI5yEOHtn4hPSUTPMNOtDdGO9StswFZFZM9XB5FdKo6KaA4c3HB7dFPO2ZTBF4Rh00QE0e1a4K'
            currency = 'INR'
            >
            <button className='btn'>
                Pay Now
            </button>
        </StripeCheckout>

    </div>
  )
}
