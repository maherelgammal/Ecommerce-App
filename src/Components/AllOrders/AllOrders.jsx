import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import Loading from '../Loading/Loading';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { cartContext } from '../../Context/CartContext';

export default function AllOrders({ crrUser }) {
    const Navigate = useNavigate()
    const [cartItems, setcartItems] = useState(null)
    const { CartPrice, CartProd, setNumOfCartItems, NumOfCartItems, deleteProductsFromCart, updateCountInCart } = useContext(cartContext)

    async function getAllOrders() {
        try {
            const { data } = await axios.get(`https://route-ecommerce-app.vercel.app/api/v1/orders/user/${crrUser.id}`)
            console.log(data.data.cartItems.length);
            // setcartItems(data)
            // setNumOfCartItems((NumOfCartItems - data.data.cartItems.length))
        } catch (error) {
            console.log("Error", error)
        }
    }
    function backHome() {
        Navigate('/home')
    }

    useEffect(function () {
        getAllOrders()
    }, [])
    return (<>
        <Helmet>
            <title>All Your Completed Orders</title>
        </Helmet>
        <h1 className='text-center pt-3'>All Your Orders</h1>
        <div className='text-center py-3'>
            <button className='btn btn-success text-center m-auto' onClick={backHome}>Back to HomePage</button>
        </div>
        {cartItems ? <div className="container pb-5">
            <div className="row gy-3">
                {cartItems.map(function (item, idx) {
                    return <div key={idx} className="col-md-4 text-center">
                        <div className="order bg-primary p-3 rounded-4 text-white">
                            <div className="container">
                                <div className="row gy-3">
                                    {item.cartItems.map(function (elem, index) {
                                        return <div key={index} className="col-md-6">
                                            <div className="cartItem">
                                                <img src={elem.product.imageCover} className='w-100 rounded-4' alt="" />
                                                <p>Price: {elem.price}</p>
                                                <p>Count: {elem.count}</p>
                                            </div>
                                        </div>
                                    })}
                                </div>
                            </div>
                            <p>Total Price: {item.totalOrderPrice}</p>
                            <p>Pay Method: {item.paymentMethodType}</p>
                            <p>Order Address: {item.shippingAddress.details} in {item.shippingAddress.city} and We will call you on your phone: {item.shippingAddress.phone}</p>

                        </div>
                    </div>
                })}
            </div>
        </div> : <Loading />}

    </>
    )
}
