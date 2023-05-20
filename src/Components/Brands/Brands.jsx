import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Loading from '../Loading/Loading'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet'

export default function Brands() {
  const [Brands, setBrands] = useState(null)
  async function getBrands() {
    const { data } = await axios.get('https://route-ecommerce-app.vercel.app/api/v1/brands')
    setBrands(data.data)

  }

  useEffect(() => {

    getBrands()

  }, [])
  return (
    <>
      <Helmet>
        <title>Brands</title>
      </Helmet>
      {Brands ? <div className="container py-5 text-center">
        <div className="row gy-5">
          <div className="col-md-3 d-flex flex-column text-center align-items-center justify-content-center pt-5">
            <h1 className='text-info fa-3x fw-bolder'>Our Brands</h1>
            <p className='fw-bold'>You Can See our Brands and Each Brand has Products in it</p>
          </div>
          {Brands.map(function (brand, idx) {
            return <div key={idx} className="col-md-3 py-3">
              <Link to={"/brandsprod/" + brand._id}>
                <div className="item">
                  <img src={brand.image} alt={brand.name} className='' />
                  <h2 className='fw-bold'>{brand.name}</h2>

                </div>
              </Link>
            </div>
          })}

        </div>
      </div> : <Loading />}
    </>
  )
}
