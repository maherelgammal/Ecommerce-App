import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Loading from '../Loading/Loading'
import { Helmet } from 'react-helmet'
import { Link } from 'react-router-dom'


export default function Categories() {
  const [Categories, setCategories] = useState(null)
  async function getCategories() {
    const { data } = await axios.get('https://route-ecommerce-app.vercel.app/api/v1/categories')
    setCategories(data.data)
    console.log(data.data);
  }

  useEffect(() => {

    getCategories()

  }, [])
  return (
    <>
      <Helmet>
        <title>Categories</title>
      </Helmet>
      {Categories ? <div className="container py-5 text-center">
        <div className="row gy-5">
          {Categories.map(function (brand, idx) {
            return <div key={idx} className="col-md-3 py-3">
              <Link to={"/categoryprod/" + brand._id}>
                <div className="item">
                  <img src={brand.image} alt={brand.name} className='w-100' style={{"height":"300px"}} />
                  <h2 className='fw-bold'>{brand.name}</h2>

                </div>
              </Link>
            </div>
          })}

        </div>
      </div > : <Loading />
      }
    </>
  )
}
