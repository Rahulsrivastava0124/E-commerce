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
import Loading from "./Component/LoadingStructer/Loading";

function App(props) {
  const [TokenLogin, { data, loading, error }] = useMutation(LoginWithToken)
  useEffect(() => {
    if (localStorage.getItem("Token")) {
      TokenLogin({ variables: { Token: { Token: localStorage.getItem('Token') } } })
    }
  }, [])

  useEffect(() => {
    if (data) {
      if (data.LoginWithToken.__typename == "Token") {
        console.log("res", data);
        props.UserTokenLoginHandler({ state: data.LoginWithToken })
      } else {
        console.log(data.LoginWithToken.message);
      }
    }
  }, [data])

  return (
    loading ? <Loading /> :
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
