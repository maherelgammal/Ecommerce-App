import Axios from 'axios';
import React, { useEffect, useState } from 'react'
import Product from '../Product/Product';
import Loading from '../Loading/Loading';
import CartContextProvider from '../../Context/CartContext';
import { Helmet } from 'react-helmet'


export default function Products(props) {
    console.log(props);
    const [Products, setProducts] = useState(null)
    const getAllproducts = async () => {
        try {
            let { data } = await Axios.get(`https://route-ecommerce-app.vercel.app/api/v1/products`)
            setProducts(data.data);
        } catch (error) {
            console.log("Error", error);
        }
    }
    useEffect(() => {
        getAllproducts()
    }, [])
    return (
        <>

            {Products ?
                <>
                    <Helmet>
                        <title>Products</title>
                    </Helmet>
                    <Product Products={Products} />
                </> : <Loading />}
        </>
    )
}
