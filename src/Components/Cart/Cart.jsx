import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import Loading from '../Loading/Loading'
import { cartContext } from '../../Context/CartContext'
import { Link, useNavigate } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import { toast } from 'react-toastify'

export default function Cart() {
  const navi = useNavigate();
  const notify = (msg, type) => {
    toast[type](msg)
  }
  const { CartPrice, CartProd, setNumOfCartItems, NumOfCartItems, deleteProductsFromCart, updateCountInCart } = useContext(cartContext)
  function navToHome() {
    if (CartProd == 0) {
      notify(`Cart Is Empty, Redirecting to Homepage`, "error")
      navi('/home')
    }
  }
  useEffect(function () {
    navToHome()
  }, [CartProd])
  return (<>
    <Helmet>
      <title>Cart</title>
    </Helmet>
    {console.log(CartProd)}
    {CartProd.length != 0 ? <div className="container py-3">
      <div className="d-flex justify-content-between align-items-end">
        <h1 className="fw-bold"> Shopping Cart</h1>
        <h5 className='fw-bold text-success'>Total Cart Price: {CartPrice} EGP</h5>
      </div>
      <div className="container">
        {CartProd.map((elem) => {
          { elem.count === 0 && deleteProductsFromCart(elem.product.id) }
          return (

            <div key={elem._id} className="row">
              <hr />
              <div className="col-md-4">
                <div className="itemPic">
                  <img style={{ "height": "400px" }} src={elem.product.imageCover} className='w-100' alt="" />
                </div>
              </div>
              <div className="col-md-8">
                <div className="itemDet py-5">
                  <h2>{elem.product.title}</h2>
                  <p className='fw-bold text-info'>Price: {elem.price} EGP</p>
                  <div className="tex py-3">
                    <p className='text-success fw-bold'>In Stock</p>
                    <p className='fw-bold'>Eligible for FREE delivery</p>
                    <p className='fw-bold'>Color: No Options</p>
                    <div style={{ "width": "290px" }} className="counter d-flex justify-content-start align-items-center bg-dark text-white p-1 rounded-3 ">
                      <p className='me-5 my-0 fw-bold'>Number of Pieces: {elem.count}</p>
                      <button onClick={function () { updateCountInCart(elem.product.id, elem.count + 1) }} className="mx-2 btn btn-success btn-sm">+</button>
                      <button onClick={function () { updateCountInCart(elem.product.id, elem.count - 1) }} className="btn btn-danger btn-sm">-</button>
                    </div>
                  </div>
                  <div className="buttons pt-5">
                    <button onClick={function () { deleteProductsFromCart(elem.product.id) }} className='mx-1 btn btn-outline-danger text-center fw-bold'>Delete</button>
                    <button className='mx-1 btn btn-outline-warning text-center fw-bold'>Save For Later</button>
                    <button className='mx-1 btn btn-outline-info text-center fw-bold'>Share</button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <Link to="/payment">
        <button className='btn btn-success m-auto w-100'>Order  All Now!!</button>
      </Link>
    </div> : <Loading />}
  </>
  )
}
