import React,{useState} from 'react'
import logo from '../../Svg/images/logo.png'
export default function Admin_login_page() {
  const [AdminData, setAdminData] = useState({
    Email: "",
    Password: "",
    CheckBox:""
  })

  const Admin_login_page = (e) => {
    e.preventDefault();
console.log(AdminData);
  }

  return (
    <>
      <form className='container w-25 mt-5' onSubmit={(e) => Admin_login_page(e)}>
        <div className='d-flex justify-content-center align-items-center'>
          <img className="mb-4" src={logo} alt="" width="100" height="100" />
        </div>
        <h1 className="h3 mb-3 fw-normal">Please sign in</h1>

        <div className="form-floating mb-2">
          <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" value={AdminData.Email}
            onChange={(e) => setAdminData({ ...AdminData, Email: e.target.value })} />
          <label htmlFor="floatingInput">Email address</label>
        </div>
        <div className="form-floating">
          <input type="password" className="form-control" id="floatingPassword" placeholder="Password" value={AdminData.Password} onChange={(e) => setAdminData({ ...AdminData, Password: e.target.value })} />
          <label htmlFor="floatingPassword">Password</label>
        </div>

        <div className="form-check text-start my-3">
          <input className="form-check-input" type="checkbox" value="remember-me" id="flexCheckDefault" defaultValue={AdminData.CheckBox} onChange={(e)=>setAdminData({...AdminData,CheckBox:e.target.checked})} />
          <label className="form-check-label" htmlFor="flexCheckDefault">
            Remember me
          </label>
        </div>
        <button className="btn btn-primary w-100 py-2" type="submit">Sign in</button>
        <p className="mt-5 mb-3 text-body-secondary">© 2017–2023</p>
      </form>
    </>
  )
}
