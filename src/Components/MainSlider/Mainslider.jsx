import React from 'react'
import Slider from 'react-slick';
import slide1 from '../../../src/images/sliderr1.png'
import slide2 from '../../../src/images/sliderr2.png'
import slide3 from '../../../src/images/sliderr3.png'
import slide4 from '../../../src/images/sliderr4.jpg'
import slide5 from '../../../src/images/sliderr5.png'
import slide6 from '../../../src/images/sliderr6.png'
import slide7 from '../../../src/images/sliderr7.png'
import slide8 from '../../../src/images/sliderr8.png'
export default function Mainslider() {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay : true
    };
    return (
        <div className='my-5 container h-50 py-1'>
            <Slider {...settings} >
                <img src={slide1} alt="" />
                <img src={slide2} alt="" />
                <img src={slide3} alt="" />
                <img src={slide4} alt="" />
                <img src={slide5} alt="" />
                <img src={slide6} alt="" />
                <img src={slide7} alt="" />
                <img src={slide8} alt="" />
            </Slider>
        </div>
    );
}
