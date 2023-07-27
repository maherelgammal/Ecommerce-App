import axios, { Axios } from 'axios'
import React, { useState } from 'react'
import { useEffect } from 'react';
import Slider from 'react-slick';
import { Helmet } from 'react-helmet'
import Loading from '../Loading/Loading';

export default function CategorySlider() {
    const [categories, setCategories] = useState([])
    const getAllCategories = async () => {
        let { data } = await axios.get(`https://ecommerce.routemisr.com/api/v1/categories`)
        setCategories(data.data);
    }
    useEffect(() => {
        getAllCategories()
    }, [])
    var settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 5,
        autoplay: true
    };
    return (
        categories.length != 0 ? <div className='my-5 container h-50'>
            <h2 className='my-3'>Shop Popular Categories</h2>
            <Slider {...settings} autoplaySpeed={3000}>
                {categories.map((item) => {
                    return <div key={item._id}>
                        <img src={item.image} className='w-100' alt="" height={300} />
                        <p className='text-center'>{(item.name.split(" ").slice(0, 1))}</p>
                    </div>
                })}

            </Slider>
        </div> : <Loading />)
}
