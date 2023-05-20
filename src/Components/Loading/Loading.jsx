import React from 'react'
import { Helmet } from 'react-helmet'

export default function Loading() {
    return (
        <>
            <Helmet>
                <title>Loading Page</title>
            </Helmet>
            <div className='d-flex justify-content-center align-items-center vh-100 fa-spin'>
                <i className="fa-solid fa-hurricane fa-spin fa-7x rating-color"></i>
            </div>
        </>

    )
}
