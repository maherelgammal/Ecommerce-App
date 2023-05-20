import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { cartContext } from '../../Context/CartContext';
import { Helmet } from 'react-helmet'
import jwtDecode from 'jwt-decode'


export default function Product({ Products }) {
    const { addProduct, NumOfCartItems, setNumOfCartItems, deleteProductsFromCart } = useContext(cartContext);
    const [isAdded, setIsAdded] = useState({});
    const [crrUser, setcrrUser] = useState(null)


    function handleAddToCart(productId) {
        setIsAdded(prevState => ({ ...prevState, [productId]: true }));
    }

    function handleRemoveFromCart(productId) {
        setIsAdded(prevState => ({ ...prevState, [productId]: false }));
    }

    return (
        <>
            <Helmet>
                <title>Product</title>
            </Helmet>
            <div className="container my-5 ">
                <h2 className='my-3'>All Products</h2>
                <div className="row gy-1">
                    {Products.map((product) => {
                        return (
                            <div className='col-md-2' key={product.id}>
                                <div className="product cursor-pointer pt-3">
                                    <div className='p-1'>
                                        <Link to={"/productdetails/" + product.id}>
                                            <img src={product.imageCover} alt="" className='w-100' />
                                            <h6 className='text-main'>{product.category.name}</h6>
                                            <p className='fw-bolder'>{product.title.split(" ").slice(0, 2).join(" ")}</p>
                                            <div className='d-flex justify-content-between align-items-center'>
                                                <span>{product.price} EGP</span>
                                                <div>
                                                    <i className='fas fa-star rating-color'></i>
                                                    {product.ratingsAverage}
                                                </div>
                                            </div>
                                        </Link>
                                        <div>
                                            {isAdded[product.id] ?(
                                                <button onClick={() => { handleRemoveFromCart(product.id); deleteProductsFromCart(product.id) }} className='btn bg-danger text-white my-3 w-100'>Remove from Cart</button>
                                            ) : (
                                                <button onClick={() => { addProduct(product.id); handleAddToCart(product.id); }} className='btn bg-main text-white my-3 w-100'>Add to Cart</button>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </>
    );
}

