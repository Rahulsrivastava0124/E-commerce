import { BrowserRouter, Routes } from "react-router-dom";
import React, { Suspense, useEffect, useState } from "react";
// import css in app Component
import "./css/App.css";
import './css/Responsive.css'
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { useMutation } from "@apollo/client";
import { LoginWithToken } from "./gql/mutation";
import { toast } from 'react-toastify'

// Lazy load routes for better performance
const UserRoutes = React.lazy(() => import('./Routes/UserRoutes'));
const AdminRoutes = React.lazy(() => import('./Routes/AdminRoutes'));

// Loading fallback component
const LoadingFallback = () => (
  <div className="d-flex justify-content-center align-items-center" style={{height: '100vh'}}>
    <div className="spinner-border text-primary" role="status">
      <span className="visually-hidden">Loading...</span>
    </div>
  </div>
);

function App(props) {
  const [TokenLogin, { data }] = useMutation(LoginWithToken)
  
  useEffect(() => {
    if (localStorage.getItem("Token")) {
      TokenLogin({ variables: { Token: { Token: localStorage.getItem('Token') } } })
    }
  }, [TokenLogin])

  useEffect(() => {
    if (data) {
      if (data.LoginWithToken.__typename === "Token") {
        props.UserTokenLoginHandler({ state: data.LoginWithToken })
      } else {
        toast.error(data.LoginWithToken.message, { position: "bottom-right" });
        localStorage.removeItem("Token");
      }
    }
  }, [data, props])

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
        <Suspense fallback={<LoadingFallback />}>
          <Routes>
            {UserRoutes}
            {AdminRoutes}
          </Routes>
        </Suspense>
      </BrowserRouter>
    </div>
  );
}

export default App;
