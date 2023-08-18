import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Account from "../../Svg/Account.svg";
import { CategoriesList } from "../Navbar/Categories_list";
import { CartCanvas } from "../LoadingStructer/CartCanvas";
import Containers from "../../containers/LoginContainer";

export const Navbar = (props) => {
  const [CategoriesListShow, setCategoriesListShow] = useState(true);
  const [LoginStates, setLoginStates] = useState(false);
  const showCategories = () => {
    if (CategoriesListShow === true) {
      setCategoriesListShow(false);
    } else {
      setCategoriesListShow(true);
    }
  };

  useEffect(() => {
    if (Object.keys(props.data.UserLogin.LoginData).length === 0) {
      setLoginStates(false);
    } else {
      if (LoginStates === false) {
        setLoginStates(props.data.UserLogin.LoginData.state.state);
      }
    }
  });

  return (
    <div id="Navbar">
      <nav className="navbar navbar-expand-lg bg-body-tertiary mx-2 rounded-3">
        <div className="container-md">
          {/* navbar logo */}
          <div className="d-flex align-items-center">
            <span className="navbar-brand mb-0 me-3 h1">Navbar</span>
            {/* navbar Links */}
            <ul className="navbar-nav nav nav-underline">
              <Link className="nav-link active" aria-current="page" to="/">
                Home
              </Link>
              <li
                className="nav-item curser-pointer"
                onClick={() => showCategories()}
              >
                <span className="nav-link">
                  Categories <span>{CategoriesListShow ? "▼" : "△"}</span>
                </span>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Deals">
                  Deals
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link " to="/WishList">
                  WishList
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Delivery">
                  {/* {Test} */}
                  Delivery
                </Link>
              </li>
            </ul>
          </div>
          <div className="d-flex align-items-center">
            {/* navbar search input */}
            <form className="me-3">
              <input
                className="form-control me-2 border-0 rounded-pill"
                type="search"
                placeholder="Search 🔍"
                aria-label="Search"
                style={{ width: "500px" }}
              />
            </form>
            <div id="Account">
              {/* Account logo */}
              {LoginStates ? (
                <span className="me-4 h6 shadow rounded-1 p-2">
                  <Link to="/Profile" className="text-decoration-none">
                    <img src={Account} alt="Account" className="" />{" "}
                    <span className=" text-dark fw-bold">
                      {Object.keys(props.data.UserLogin.LoginData).length === 0
                        ? null
                        : props.data.UserLogin.LoginData.state.username}
                    </span>
                  </Link>
                </span>
              ) : (
                <button
                  type="button"
                  className="btn btn-primary me-3"
                  data-bs-target="#LoginModalToggle"
                  data-bs-toggle="modal"
                >
                  Login
                </button>
              )}
              {/* cart logo */}
              <button
                type="button"
                data-bs-toggle="offcanvas"
                data-bs-target="#offcanvasRight"
                aria-controls="offcanvasRight"
                className="btn"
              >
                <i className="bi fs-5 bi-cart3"></i>
                <span className="fw-bold">Cart</span>
              </button>
            </div>
          </div>
        </div>
      </nav>
      {/* show  and hide CategoriesList is click  */}
      {CategoriesListShow ? <CategoriesList /> : null}
      {/* <Login /> */}
      <Containers />
      <CartCanvas />
    </div>
  );
};
