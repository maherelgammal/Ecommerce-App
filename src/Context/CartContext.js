import axios from 'axios';
import React, { createContext, useEffect } from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Helmet } from 'react-helmet'


export const cartContext = createContext();

export default function CartContextProvider({ children }) {
    const [CartProd, setCartProd] = useState([]);
    const [NumOfCartItems, setNumOfCartItems] = useState(0);
    const [CartPrice, setCartPrice] = useState(0);
    const [CartId, setCartId] = useState(null);
    // const navv = useNavigate();
    const notify = (msg, type) => {
        toast[type](msg)
    }
    async function addProduct(id) {
        try {
            const { data } = await axios.post('https://route-ecommerce-app.vercel.app/api/v1/cart',
                { "productId": id }, { headers: { "token": localStorage.getItem('tkn') } }
            )
            console.log(data.numOfCartItems)
            setCartProd(data.data.products);
            setNumOfCartItems(data.numOfCartItems);
            setCartPrice(data.data.totalCartPrice);
            notify(`Product Added Successfully`, "success")
            getProductsInCart();

        } catch (error) {
            notify(`Product Not Added, Login first Please`, "error")
            console.log("Error: ", error);
            setNumOfCartItems(NumOfCartItems);
        }
    }

    async function deleteProductsFromCart(id) {
        try {
            const { data } = await axios.delete(`https://route-ecommerce-app.vercel.app/api/v1/cart/${id}`, {
                headers: { "token": localStorage.getItem('tkn') }
            })
            if (data.status === 'success') {
                setCartProd(data.data.products);
                setNumOfCartItems(data.numOfCartItems);
                setCartPrice(data.data.totalCartPrice);
                notify(`Product Removed Successfully`, "error")
            }

        } catch (error) {
            console.log("Error ", error);
        }
    }


    async function getProductsInCart() {
        try {
            const { data } = await axios.get('https://route-ecommerce-app.vercel.app/api/v1/cart', {
                headers: { "token": localStorage.getItem('tkn') }
            })
            console.log(data);
            if (data.status == 'success') {
                setCartProd(data.data.products);
                setNumOfCartItems(data.numOfCartItems);
                setCartPrice(data.data.totalCartPrice);
                setCartId(data.data._id)
            }
        } catch (error) {
            console.log("Error ", error);
        }
    }

    async function updateCountInCart(id, count) {
        try {
            const { data } = await axios.put(`https://route-ecommerce-app.vercel.app/api/v1/cart/${id}`,
                {
                    count: count
                },
                {
                    headers: { "token": localStorage.getItem('tkn') }
                })
            if (data.status === 'success') {
                setCartProd(data.data.products);
                setNumOfCartItems(data.numOfCartItems);
                setCartPrice(data.data.totalCartPrice);
            }
        } catch (error) {
            console.log("Error ", error);
        }
    }


    useEffect(function () {
        getProductsInCart()
    }, [])
    return <cartContext.Provider value={{ addProduct, CartPrice, CartProd, NumOfCartItems, deleteProductsFromCart, updateCountInCart, setNumOfCartItems, CartId }}>
        {children}
        <Helmet>
            <title>Fresh Cart</title>
        </Helmet>
    </cartContext.Provider>
}
