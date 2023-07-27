import axios from 'axios'
import React, { useContext } from 'react'
import { cartContext } from '../../Context/CartContext';
import Cart from '../Cart/Cart';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet'


export default function Payment() {
    const nav = useNavigate()
    const { CartId } = useContext(cartContext)
    async function confirmCashOrder() {
        console.log(CartId);
        try {
            const { data } = await axios.post(`https://ecommerce.routemisr.com/api/v1/orders/${CartId}`,
                {
                    "shippingAddress": {
                        "details": document.querySelector("#details").value,
                        "phone": document.querySelector("#Phone").value,
                        "city": document.querySelector("#city").value,
                    }
                }, {
                headers: {
                    "token": localStorage.getItem('tkn')
                }
            })
            console.log(data);
            if (data.status === "success") {
                nav('/AllOrders')
            }
        } catch (error) {
            console.log('err ', error);
        }
    }

    async function confirmCreditOrder() {
        try {
            const { data } = await axios.post(`https://ecommerce.routemisr.com/api/v1/orders/checkout-session/${CartId}`, {
                "shippingAddress": {
                    "details": document.querySelector("#details").value,
                    "phone": document.querySelector("#Phone").value,
                    "city": document.querySelector("#city").value,
                }
            }, {
                headers: { "token": localStorage.getItem('tkn') },
                params: { "url": "https://maherelgammal.github.io/Fresh-Cart" }
            })
            if (data.status == "success") {
                window.open(data.session.url)
            }
        } catch (error) {
            console.log('Error', error);
        }
    }
    return <>
        <Helmet>
            <title>Payment</title>
        </Helmet>
        <h2 className='text-center'>Hi User</h2>

        <div className="w-50 m-auto text-center">
            <form action="">
                <label className='mt-3' htmlFor="address">Address Details</label>
                <input type="text" placeholder='Address Details' id='details' className='form-control' />

                <label className='mt-3' htmlFor="Phone">Phone</label>
                <input type="text" placeholder='Phone' id='Phone' className='form-control' />

                <label className='mt-3' htmlFor="city">City</label>
                <input type="text" placeholder='City' id='city' className='form-control' />

                <button type='button' onClick={function () { confirmCashOrder() }} className='btn btn-success m-3'>Confirm Cash</button>
                <button type='button' onClick={function () { confirmCreditOrder() }} className='btn btn-success my-3'>Confirm Credit</button>
            </form>
        </div>

    </>
}
