import axios from 'axios';
import { useFormik } from 'formik'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import * as Yup from 'yup'
import { Helmet } from 'react-helmet'



export default function Register() {
  const notify = (msg, type) => {
    toast[type](msg)
  }
  let navigate = useNavigate();
  const [isLoading, setisLoading] = useState(false)
  async function handleRegister(values) {
    setisLoading(true)
    axios.post('https://route-ecommerce-app.vercel.app/api/v1/auth/signup', values).then((data) => {
      console.log(data);
      if (data.data.message === "success") {
        setisLoading(false)
        notify("Success", "success")
        navigate('/login')
      }
    }).catch((error) => {
      console.log(error);
      if (error.response.status == 409) {
        notify(error.response.data.message, "error")
        setisLoading(false)
      }
    })

  }
  let validationSchema = Yup.object({
    name: Yup.string().max(12, "Max Length must be 12 letters").min(3, "Min Length must be 3 letters").required("Name is Required"),
    email: Yup.string().required("Email is Required").email("Not a valid Email"),
    password: Yup.string().required("Password is Required").matches(/^[A-Z][a-z0-9]{5,10}$/, "Invalid Password"),
    rePassword: Yup.string().required("Repassword is Required").oneOf([Yup.ref('password')]),
    phone: Yup.string().required("Phone is Required").matches(/^01[0125][0-9]{8}$/, "Invalid Phone Number")
  })
  let formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      rePassword: "",
      phone: "",
    },
    onSubmit: handleRegister,
    validationSchema,
  })
  return <>
    <Helmet>
      <title>Register</title>
    </Helmet>
    <div className='w-75 mx-auto py-4'>
      <h3>Register Now : </h3>
      <form onSubmit={formik.handleSubmit}>
        <label htmlFor="name">Name: </label>
        <input type="text" name='name' id='name' onBlur={formik.handleBlur} value={formik.values.name} onChange={formik.handleChange} className='form-control mb-2' />
        {formik.touched.name && formik.errors.name ? (
          <div className='bg-danger p-2 text-white rounded-2 mb-3'>{formik.errors.name}</div>
        ) : null}
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
        <label htmlFor="rePassword">rePassword: </label>
        <input type="password" name='rePassword' id='rePassword' onBlur={formik.handleBlur} value={formik.values.rePassword} onChange={formik.handleChange} className='form-control mb-2' />
        {formik.touched.rePassword && formik.errors.rePassword ? (
          <div className='bg-danger p-2 text-white rounded-2 mb-3'>{formik.errors.rePassword}</div>
        ) : null}
        <label htmlFor="phone">Phone: </label>
        <input type="tel" name='phone' id='phone' value={formik.values.phone} onChange={formik.handleChange} className='form-control mb-2' />
        {formik.touched.phone && formik.errors.phone ? (
          <div className='bg-danger p-2 text-white rounded-2 mb-3'>{formik.errors.phone}</div>
        ) : null}
        {isLoading ? <button type='button' disabled className='btn bg-main text-white'><i className='fas fa-spinner fa-spin'></i></button>
          : <button disabled={!(formik.dirty && formik.isValid)} type='submit' className='btn bg-main text-white'>Register</button>}


      </form>

    </div>
  </>
}
