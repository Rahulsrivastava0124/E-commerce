import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Account from "../../Svg/Account.svg";
import CartCanvasContainer from "../../containers/CartCanvasContainer";
import LoginContainers from "../../containers/LoginContainer";
import Logo from "../../Svg/images/logo.png"


export const Navbar = (props) => {
  const [LoginStates, setLoginStates] = useState(false);

  useEffect(() => {
    if (Object.keys(props.data.UserLogin.LoginData).length === 0) {
      setLoginStates(false);
    } else {
      if (LoginStates === false) {
        setLoginStates(true);
      }
    }
  });

  return (
    <>
      <div id="Navbar " className="position-sticky top-0 z-3">
        <nav className="navbar navbar-expand-lg bg-body-tertiary ">
          <div className="container-fluid m-0 me-3" >
            <div className="nav_phone_menu_icon">
              <input type="checkbox" id="checkbox" />
              <label htmlFor="checkbox" className="toggle">
                <div className="bars" id="bar1"></div>
                <div className="bars" id="bar2"></div>
                <div className="bars" id="bar3"></div>
              </label>
            </div>
            {/* navbar logo */}
            <div className="d-flex align-items-center">
              <span className="navbar-brand mb-0 me-3 h1 d-flex align-items-center">
                <span className="text-primary">On</span>
                <span className="text-warning">Market</span>
              </span>
              {/* navbar Links */}
              <ul className="navbar-nav nav nav-underline nav-phone-menu">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="/"
                ><i className="bi bi-house me-1"></i>
                  Home
                </Link>
                <Link className="nav-link">
                  <i className="bi bi-list me-1"></i>
                  Categories
                </Link>
                <Link className="nav-link " to="/WishList">
                  <i className="bi bi-bag-heart"></i>  WishList
                </Link>
              </ul>
            </div>
            <div className="d-flex align-items-center">
              {/* navbar search input */}
              <form className="me-3 ">
                <input
                  className="form-control me-2  rounded-pill nav-search border border-primary-subtle "
                  type="search"
                  placeholder="Search 🔍"
                  aria-label="Search"
                  style={{ width: "500px" }}
                />
              </form>
              <div id="Account">
                {/* Account logo */}
                {LoginStates ? (
                  <span className="me-4 h6 shadow-sm rounded pt-1 p-2 text-center ">
                    <Link to="/Profile" className="text-decoration-none">
                      <img src={Account} alt="Account" className="mx-2" />
                      <span className=" text-dark fw-bold text-capitalize ">
                        {Object.keys(props.data.UserLogin.LoginData).length === 0
                          ? null
                          : props.data.UserLogin.LoginData.state.username}

                      </span>
                    </Link>
                  </span>
                ) : (
                  <button
                    type="button"
                    style={{ border: "6px solid #ffffffb5" }}
                    className="btn btn-primary me-3 rounded-pill px-3 "
                    data-bs-target="#LoginModalToggle"
                    data-bs-toggle="modal"
                    id="nav_login_pill_arrow"
                    onClick={() => {
                      document.getElementsByClassName("modal-backdrop")[0] !==
                        undefined
                        ? document
                          .getElementsByClassName("modal-backdrop")[0]
                          .classList.add("z-0")
                        : null;
                    }}
                  >
                    Login
                    <i className="bi bi-arrow-right ms-2 "></i>
                  </button>
                )}
                {/* cart logo */}
                <button className="btn btnActiveBorderNone position-relative p-0">
                  <i
                    className="bi fs-4 bi-cart3 "
                    data-bs-toggle="offcanvas"
                    data-bs-target="#offcanvasRight"
                    aria-controls="offcanvasRight"
                  >
                    <span
                      className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger "
                      style={{ fontSize: "x-small" }}
                    >
                      {props.data.AddToCart.length}
                    </span>
                  </i>
                </button>
              </div>
            </div>
          </div>
        </nav>
        {/* <Login /> */}
        {props.data.UserLogin.LoginData === true ? null : <LoginContainers />}
        <CartCanvasContainer />
      </div>
    </>
  );
};
