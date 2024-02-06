import { BrowserRouter, Routes } from "react-router-dom";
// import css in app Component
import "./css/App.css";
import './css/Responsive.css'
import UserRoutes from './Routes/UserRoutes'
import AdminRoutes from './Routes/AdminRoutes'
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { useEffect, useState } from "react";
import { useMutation } from "@apollo/client";
import { LoginWithToken } from "./gql/mutation";
import { toast } from 'react-toastify'

function App(props) {
  const [TokenLogin, { data }] = useMutation(LoginWithToken)
  useEffect(() => {
    if (localStorage.getItem("Token")) {
      TokenLogin({ variables: { Token: { Token: localStorage.getItem('Token') } } })
    }
  }, [])

  useEffect(() => {
    if (data) {
      if (data.LoginWithToken.__typename == "Token") {
        props.UserTokenLoginHandler({ state: data.LoginWithToken })
      } else {
        toast.error(data.LoginWithToken.message, { position: "buttom-right" });
        localStorage.removeItem("Token");
      }
    }
  }, [data])

  return (
    <div className="App">
      <BrowserRouter>
        <ToastContainer
          position="top-center"
          autoClose={5000}
          hideProgressBar
          newestOnTop
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="colored"
          stacked
        />

        <Routes>
          {UserRoutes},
          {AdminRoutes}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
