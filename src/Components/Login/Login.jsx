import axios from 'axios';
import { useFormik } from 'formik'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup'
import { toast } from 'react-toastify';
import { Helmet } from 'react-helmet'


export default function Login({ getUserData, crrUser }) {
  const notify = (msg, type) => {
    toast[type](msg)
  }
  let navigate = useNavigate();
  const [isLoading, setisLoading] = useState(false)
  async function handleLogin(values) {
    setisLoading(true)
    axios.post('https://route-ecommerce-app.vercel.app/api/v1/auth/signin', values).then((data) => {
      console.log(data);
      if (data.data.message === "success") {
        setisLoading(false)
        localStorage.setItem("tkn", data.data.token)
        getUserData();
        notify(`Welcome Back`, "success")
        navigate('/Home')
      }
    }).catch((error) => {
      console.log(error);
      if (error.response.status == 401) {
        notify(error.response.data.message, "error")
        setisLoading(false)
      }
    })

  }
  let validationSchema = Yup.object({

    email: Yup.string().required("Email is Required").email("Not a valid Email"),
    password: Yup.string().required("Password is Required").matches(/^[A-Z][a-z0-9]{5,10}$/, "Invalid Password"),

  })
  let formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: handleLogin,
    validationSchema,
  })
  return <>
    <Helmet>
      <title>Login</title>
    </Helmet>
    <div className='w-50 mx-auto py-4'>
      <h3 className='py-5'>Login Now : </h3>
      <form onSubmit={formik.handleSubmit}>

        <label htmlFor="email">Email: </label>
        <input type="email" name='email' id='email' onBlur={formik.handleBlur} value={formik.values.email} onChange={formik.handleChange} className='form-control mb-2' />
        {formik.touched.email && formik.errors.email ? (
          <div className='bg-danger p-2 text-white rounded-2 mb-3'>{formik.errors.email}</div>
        ) : null}
        <label htmlFor="password">Password: </label>
        <input type="password" name='password' id='password' onBlur={formik.handleBlur} value={formik.values.password} onChange={formik.handleChange} className='form-control mb-2' />
        {formik.touched.password && formik.errors.password ? (
          <div className='bg-danger p-2 text-white rounded-2 mb-3'>{formik.errors.password}</div>
        ) : null}

        {isLoading ? <button type='button' disabled className='btn bg-main text-white'><i className='fas fa-spinner fa-spin'></i></button>
          : <button disabled={!(formik.dirty && formik.isValid)} type='submit' className='btn bg-main text-white'>Login</button>}


      </form>

    </div>
  </>
}
