import React, { useContext, useEffect, useState } from 'react'
import logo from '../../freshcart-logo.svg'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { cartContext } from '../../Context/CartContext';
export default function Navbar({ crrUser, clearUserData }) {
  let { NumOfCartItems } = useContext(cartContext)
  const navigate = useNavigate()
  function logout() {
    clearUserData();
    navigate('/home')
  }

  return (
    <nav className="navbar navbar-expand-lg bg-main-light py-3">
      <div className="container">
        <NavLink className="navbar-brand" to="">
          <img src={logo} alt="" />
        </NavLink>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink className="nav-link" to="home">Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="products">Products</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="categories">Categories</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="brands">Brands</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="map">Map Sample</NavLink>
            </li>
          </ul>
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            {crrUser ? <>
              <Link to="cart" className="btn position-relative mx-3">
                Cart <i className="fa-solid fa-cart-shopping" />
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-success">
                  {NumOfCartItems}
                  <span className="visually-hidden">unread messages</span>
                </span>
              </Link>

              <li className="nav-item">
                <NavLink className="nav-link" to="profile">Profile</NavLink>
              </li>
              <li className="nav-item">
                <span onClick={logout} className="nav-link cursor-pointer" to="home">Logout</span>
              </li>
            </> : <>
              <li className="nav-item">
                <NavLink className="nav-link" to="login">Login</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="register">Register</NavLink>
              </li>

            </>}


          </ul>

        </div>
      </div>
    </nav>

  )
}
