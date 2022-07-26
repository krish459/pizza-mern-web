const { response } = require("express");
const express = require("express");
const router = express.Router();
const { v4 : uuidv4 } = require('uuid');
const stripe = require("stripe")("sk_test_51KzI03SFbTdh1Us3RQTdBjbOPhhFdxcqjd7iDR9l1rVylz0X9V5gKjB29p8I8UJTxt5Nzysz9KuXO4pslHt0JOyk00TVRBlx0D")
const Order = require('../models/orderModel')
router.post('/placeorder', async (req,res)=>{

    const {token , subtotal, currentUser, cartItems} = req.body

    try {
        const customer = await stripe.customers.create({
            email : token.email,
            source : token.id
        })
        //  Apparently Indian govt has asked stripe to change the charges api , so either register a stripe acc outside india and use the keys else use paymentIntents api instead of charges api

        const payment = await stripe.paymentIntents.create({
            amount : subtotal*100,
            currency : 'inr',
            paymentIntents,
            customer : customer.id,
            receipt_email : token.email
        },{
            idempotencyKey : uuidv4()
        })


        if(payment){

            // const neworder = new Order({
            //     name : currentUser.name,
            //     email : currentUser.email,
            //     userid : currentUser.userid,
            //     orderItems : cartItems,
            //     orderAmount : subtotal,
            //     shippingAddress : {
            //         street : token.card.address_line1,
            //         city : token.card.address_city,
            //         country : token.card.address_country,
            //         pincode : token.card.address_zip
                      
            //     },
            //     transactionId :  token.source,id
            // })

            // neworder.save()
            response.send('Payment Done')
        }
        else{
            
            response.send('Payment Failed')

        }
    } catch (error) {
        const neworder = new Order({
            name : currentUser.name,
            email : currentUser.email,
            userid : currentUser.userid,
            orderItems : cartItems,
            orderAmount : subtotal,
            shippingAddress : {
                street : token.card.address_line1,
                city : token.card.address_city,
                country : token.card.address_country,
                pincode : token.card.address_zip
                  
            },
            transactionId :  token.source,id
        })

        neworder.save()
        return res.status(400).json({ message : 'Something went Wrong' +error});
    }


});

module.exports = router