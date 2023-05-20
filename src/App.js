import React, { createContext, useEffect, useState } from 'react'
import Navbar from './Components/Navbar/Navbar'
import Mainslider from './Components/MainSlider/Mainslider'
import CategorySlider from './Components/CategorySlider/CategorySlider'
import Products from './Components/Products/Products'
import { Navigate, RouterProvider, createBrowserRouter, createHashRouter } from 'react-router-dom'
import Layout from './Components/Layout/Layout'
import Home from './Pages/Home/Home'
import Cart from './Components/Cart/Cart'
import Categories from './Components/Categories/Categories'
import About from './Components/About/About'
import Login from './Components/Login/Login'
import Register from './Components/Register/Register'
import NotFound from './Components/NotFound/NotFound'
import Brands from './Components/Brands/Brands'
import ProductDetails from './Components/ProductDetails/ProductDetails'
import BrandProducts from './Components/BrandProducts/BrandProducts'
import { ToastContainer } from 'react-toastify';
import Profile from './Components/Profile/Profile'
import jwtDecode from 'jwt-decode'
import CartContextProvider from './Context/CartContext'
import Payment from './Components/Payment/Payment'
import NoCartItems from './Components/NoCartItems/NoCartItems'
import AllOrders from './Components/AllOrders/AllOrders'
import Map from './Components/Map/Map'
import CategoryProducts from './Components/CategoryProducts/CategoryProducts'

export const appContext = createContext();

export default function App() {
  const [crrUser, setcrrUser] = useState(null)


  function getUserData() {
    const userData = jwtDecode(localStorage.getItem("tkn"))
    setcrrUser(userData)
  }

  function clearUserData() {
    localStorage.removeItem('tkn');
    setcrrUser(null);
  }
  useEffect(function () {
    if (localStorage.getItem('tkn') !== null && crrUser == null) {
      getUserData()
    }
  }, [])

  function ProtectedRoute({ children }) {
    if (crrUser == null) {
      return <Navigate to='/login' />
    } else {
      return <>
        {children}
      </>
    }
  }
  let routers = createBrowserRouter([
    {
      path: "", element: <Layout crrUser={crrUser} clearUserData={clearUserData} />, children: [
        { index: true, element: <Home /> },
        { path: "products", element: <Products /> },
        { path: "map", element: <Map /> },
        { path: "brandsprod/:id", element: <BrandProducts /> },
        { path: "categoryprod/:id", element: <CategoryProducts /> },
        { path: "cart", element: <ProtectedRoute> <Cart /></ProtectedRoute> },
        { path: "payment", element: <ProtectedRoute> <Payment /></ProtectedRoute> },
        { path: "NoCartItems", element: <ProtectedRoute> <NoCartItems /></ProtectedRoute> },
        { path: "AllOrders", element: <AllOrders crrUser={crrUser} /> },
        { path: "brands", element: <Brands /> },
        { path: "profile", element: <ProtectedRoute><Profile crrUser={crrUser} /></ProtectedRoute> },
        { path: "categories", element: <Categories /> },
        { path: "home", element: <Home /> },
        { path: "about", element: <About /> },
        { path: "login", element: <Login getUserData={getUserData} crrUser={crrUser} /> },
        { path: "register", element: <Register /> },
        { path: "productdetails/:id", element: <ProductDetails /> },
        { path: "navbar", element: <Navbar /> },
        { path: "*", element: <NotFound /> },
      ]
    }
  ])
  return (
    <>
      <CartContextProvider>
        <ToastContainer theme='dark' />
        <RouterProvider router={routers}></RouterProvider>
      </CartContextProvider>
    </>
  )
}
