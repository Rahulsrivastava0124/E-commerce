import React, { useState, useEffect } from 'react'
import logo from '../../Svg/images/logo.png'
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
      localStorage.setItem("adminToken",data.AdminLogin.token)
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
      <form className='container w-25 mt-5 bg-light p-4 rounded-4 fw-medium' onSubmit={(e) => Admin_login_page(e)}>
        <div className='d-flex justify-content-center align-items-center flex-column'>
          <h4 className="h3 mb-3 fw-normal ">Admin Login</h4>
          <img className="mb-4 bg-warning-subtle rounded-circle" src={logo} alt="" width="100" height="100" />
        </div>

        <div className="form-floating mb-2">
          <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" value={AdminData.Email}
            onChange={(e) => setAdminData({ ...AdminData, Email: e.target.value })} />
          <label htmlFor="floatingInput">Email address</label>
        </div>
        <div className="form-floating pb-3">
          <input type="password" className="form-control" id="floatingPassword" placeholder="Password" value={AdminData.Password} onChange={(e) => setAdminData({ ...AdminData, Password: e.target.value })} />
          <label htmlFor="floatingPassword">Password</label>
        </div>
        {loading ? <button class="btn btn-primary w-100 py-2" type="button" disabled>
          <span class="spinner-border spinner-border-sm" aria-hidden="true"></span>
          <span role="status">Loading...</span>
        </button> : <button className="btn btn-primary w-100 py-2" type="submit">Sign in</button>}
        <p className="mt-5 mb-3 text-body-secondary">© 2017–2023</p>
      </form>
    </>
  )
}
