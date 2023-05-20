import React from 'react'
import Navbar from '../Navbar/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../Footer/Footer'
import CartContextProvider from '../../Context/CartContext'

export default function Layout({ crrUser, clearUserData }) {

    return <>
        <Navbar crrUser={crrUser} clearUserData={clearUserData} />
        <Outlet></Outlet>
        <Footer />
    </>
}
