import React, { useState, useEffect } from 'react'
import logo from '../../Svg/GifImages/shopping-cart.gif'
import '../../css/Admin_login_logo.css'
import AdminLoginLogo from '../../Svg/Admin_login_svg.svg'
import { useMutation } from '@apollo/client'
import { Admin_Login } from '../../gql/mutation'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'

export default function Admin_login_page() {

  // setting up navigation using react-router-dom
  const navigate = useNavigate()

  // setting up state for admin login data
  const [AdminData, setAdminData] = useState({
    Email: "",
    Password: "",
  })
  const [Admin_login_show_password, setAdmin_login_show_password] = useState(false)

  // setting up mutation for admin login using @apollo/client
  const [AdminLogin, { loading, data, error }] = useMutation(Admin_Login)

  // handling admin login on form submit
  const Admin_login_page = (e) => {
    e.preventDefault() // preventing default form submit behavior
    // calling the AdminLogin mutation with admin login data
    AdminLogin({ variables: { AdminData: AdminData } })
  }

  // listening for changes in the admin login data state
  useEffect(() => {
    if (data) {
      // if login is successful, navigate to admin dashboard
      localStorage.setItem("adminToken", data.AdminLogin.token)
      toast.success('Login Successful')
      navigate('/admin/dashboard')
    }
    if (error) {
      // if there is an error, show a toast message
      toast.error(error.message)
    }
  }, [data, error, navigate]) // running the effect only when data or error changes


  return (
    <>
      <form className='container w-50 mt-5 bg-light ps-0 shadow rounded-4 fw-medium d-flex' onSubmit={(e) => Admin_login_page(e)}>
        <div className="Admin_login_logo_image bg-light w-50 rounded-start-4 me-3 bg-warning-subtle">
          <img src={AdminLoginLogo} alt="login_image" srcSet="" />
        </div>
        <div className="Input_field w-50 ms-5">
          <div className='d-flex justify-content-center align-items-center flex-column'>
            <div className='mb-3 mt-3'>
              <span><img src={logo} alt="" width={'50px'} /></span>
              <span className="text-primary h5">On</span>
              <span className="text-warning h5">Market</span>
            </div>
          </div>
          <h5 className=" mb-3 fw-normal text-primary">Login to Admin</h5>
          <div className="form-floating mb-2">
            <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" value={AdminData.Email}
              onChange={(e) => setAdminData({ ...AdminData, Email: e.target.value })} />
            <label htmlFor="floatingInput">Email </label>
          </div>
          <div className="form-floating pb-3">
            <input type={Admin_login_show_password ? 'text' : `password`} className="form-control" id="floatingPassword" placeholder="Password" value={AdminData.Password} onChange={(e) => setAdminData({ ...AdminData, Password: e.target.value })} />
            <label htmlFor="floatingPassword">Password</label>
            <i className={`bi bi-eye${Admin_login_show_password ? '-slash-fill' : '-fill'} h5`} id="Admin_login_Password_show_icon" onClick={() => setAdmin_login_show_password(!Admin_login_show_password)}></i>
          </div>
          <div className='d-flex justify-content-between'>
            <div className="form-check form-switch mb-3">
              <input className="form-check-input" type="checkbox" role="switch" style={{cursor:"pointer"}} id="flexSwitchCheckChecked" />
              <label className="form-check-label text-body-tertiary" htmlFor="flexSwitchCheckChecked">Remember me </label>
            </div>
            <div>
              <span className='text-warning' style={{cursor:"pointer"}}>forget ? </span>
            </div>
          </div>
          {loading ? <button className="btn btn-primary w-100 py-2" type="button" disabled>
            <span className="spinner-border spinner-border-sm" aria-hidden="true"></span>
            <span role="status">Loading...</span>
          </button> : <button className="btn btn-primary w-100 py-2" type="submit">Sign in</button>}
          <p className="mt-5 mb-3 text-body-secondary">© 2017–2023</p>
        </div>
      </form>
    </>
  )
}
