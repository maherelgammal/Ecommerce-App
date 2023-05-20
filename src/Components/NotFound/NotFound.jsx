import React from 'react'
import Error from '../../images/404 Error.avif'
import { Helmet } from 'react-helmet'

export default function NotFound() {
  return (
    <>
      <Helmet>
        <title>Page Not Found</title>
      </Helmet>
      <div className='d-flex justify-content-top flex-column align-items-center py-5 text-center' style={{ "height": "800px" }}>
        <img src={Error} className='w-25 h-25 m-5' alt="404 Error" />
        <h1 className='text-main fw-bold'>Sorry, Wrong Page
          <br /> Go Home Page Please</h1>
      </div>
    </>
  )
}
