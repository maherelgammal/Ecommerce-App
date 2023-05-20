import Axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import Loading from '../Loading/Loading';
import { Helmet } from 'react-helmet';

export default function CategoryProducts() {
    let { id } = useParams();
    const [probras, setprobras] = useState([])
    async function getCategoryProducts() {
        try {
            let { data } = await Axios.get(`https://route-ecommerce-app.vercel.app/api/v1/products`, {
                params: { "category": id }
            })

            setprobras(data.data)
            console.log(data.data);
        } catch (error) {
            console.log("Error: ", error);
        }
    }
    useEffect(() => {
        getCategoryProducts()
    }, [])
    return (
        <>

            <div className="container my-5">
                <h2 className='my-3'>All Products</h2>
                <div className="row gy-1">
                    {probras.length != 0 ? probras.map((product) => {
                        return <div className='col-md-2' key={product.id}>
                            <Helmet>
                                <title>{product.category.name} Products</title>
                            </Helmet>
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
                                    <button className='btn bg-main text-white my-3 w-100'>Add to Cart</button>
                                </div>
                            </div>
                        </div>
                    }) : <Loading />}
                </div>
            </div>
        </>
    )
}
