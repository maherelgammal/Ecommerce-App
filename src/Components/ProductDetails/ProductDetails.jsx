import Axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Loading from '../Loading/Loading';
import { cartContext } from '../../Context/CartContext';
import { Helmet } from 'react-helmet';

export default function ProductDetails() {
    const { addProduct, deleteProductsFromCart } = useContext(cartContext);

    let { id } = useParams();

    const [ProductsDetails, setProductsDetails] = useState(null)
    const [selectedImage, setSelectedImage] = useState(null);


    const getProductsDetails = async () => {
        let { data } = await Axios.get(`https://route-ecommerce-app.vercel.app/api/v1/products/${id}`)
        setProductsDetails(data.data);
    }

    useEffect(() => {
        getProductsDetails();
    }, [])
    useEffect(() => {
        // setInterval to update the selectedImage state every 3 seconds
        const interval = setInterval(() => {
            if (ProductsDetails && ProductsDetails.images) {
                const currentImageIndex = ProductsDetails.images.indexOf(selectedImage);
                const nextImageIndex = (currentImageIndex + 1) % ProductsDetails.images.length;
                setSelectedImage(ProductsDetails.images[nextImageIndex]);
            }
        }, 3000);

        // Clear the interval when the ProductsDetails or selectedImage state changes
        return () => clearInterval(interval);
    }, [ProductsDetails, selectedImage]);


    const handleImageClick = (event) => {
        setSelectedImage(event.target.src);
    }
    const [isAdded, setIsAdded] = useState(false);
    function handleAddToCart() {
        setIsAdded(true);
    }

    function handleRemoveFromCart() {
        setIsAdded(false);
    }

    return (
        <>
            {ProductsDetails ? <div className="container-fluid py-5">
                <div className="row">
                    <div className="col-md-2">
                        <div className="picGal d-flex flex-column justify-content-start align-items-start h-25 w-25 m-auto">
                            {ProductsDetails.images &&
                                ProductsDetails.images.map((image, index) => (
                                    <img
                                        key={index}
                                        src={image}
                                        alt=""
                                        className={`rounded-circle w-100 m-1 cursor-pointer rounded-2 ${selectedImage === image ? "border border-2 border-primary" : ""
                                            }`}
                                        onClick={handleImageClick}
                                    />
                                ))}
                        </div>
                    </div>
                    <Helmet>
                        <title>{ProductsDetails.title}</title>
                    </Helmet>
                    <div className="col-md-3">
                        <div className="d-flex">
                            <div className="pic  mb-4">
                                <img
                                    src={selectedImage || ProductsDetails.imageCover}
                                    alt=""
                                    className="rounded-5 w-100 cursor-pointer"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="col-md-7 px-5">
                        <div>
                            <h6 className='fw-bold'>{ProductsDetails.title}</h6>
                            <p className='text-info fw-bold'>{ProductsDetails.category?.name}  =&gt;  {ProductsDetails.brand?.name}</p>
                            <div className="d-flex justify-content-between">
                                <p>Model Number: {ProductsDetails.id}</p>
                                <div className="d-flex justify-content-center">
                                    <p>{ProductsDetails.ratingsAverage}<i className='fas fa-star rating-color mx-2'></i>  </p>
                                    <p className='text-decoration-underline'>{ProductsDetails.ratingsQuantity} Ratings</p>
                                </div>
                            </div>
                            <p>{ProductsDetails.name}</p>
                            <p className='fw-bold'><span className=''>Price: </span>{ProductsDetails.price} EGP</p>
                            <p className='fw-bold'><span className=''>Sold: </span>{ProductsDetails.sold} Piece</p>
                            <p className='text-danger fw-bold'><span className=''> </span>{ProductsDetails.quantity} Pieces left! Get your One Now...</p>
                            <p className='fw-bold py-4'><span className=''></span>{ProductsDetails.description} EGP</p>
                            <div>
                                {isAdded ? (
                                    <button onClick={() => { deleteProductsFromCart(ProductsDetails.id); handleRemoveFromCart(); }} className='btn bg-danger text-white my-3 w-100'>Remove from cart</button>
                                ) : (
                                    <button onClick={() => { addProduct(ProductsDetails.id); handleAddToCart(); }} className='btn bg-main text-white my-3 w-100'>Add to cart</button>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div> : <Loading />}
        </>
    )
}
