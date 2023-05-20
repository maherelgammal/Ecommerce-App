import React from 'react'
import { Helmet } from 'react-helmet'


export default function Profile({ crrUser }) {
  return (<>
    <Helmet>
      <title>Profile</title>
    </Helmet>
    <div className='d-flex justify-content-center align-items-center vh-100'>
      <h1 className='fw-bold'>Welcome {crrUser.name}</h1>
    </div>
  </>
  )
}
