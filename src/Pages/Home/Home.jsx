import React from 'react'
import Categories from '../../Components/Categories/Categories'
import CategorySlider from '../../Components/CategorySlider/CategorySlider'
import Mainslider from '../../Components/MainSlider/Mainslider'
import Products from '../../Components/Products/Products'
import CartContextProvider from '../../Context/CartContext'
import { Helmet } from 'react-helmet'


export default function Home() {
    return <>
        <Helmet>
            <title>Fresh Cart</title>
        </Helmet>
        <Mainslider />
        <CategorySlider />
        <Products />
    </>
}
