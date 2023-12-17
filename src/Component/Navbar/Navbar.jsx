import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Account from "../../Svg/Account.svg";
import { CategoriesList } from "../Navbar/Categories_list";
import CartCanvasContainer from "../../containers/CartCanvasContainer";
import LoginContainers from "../../containers/LoginContainer";

export const Navbar = (props) => {
  const [CategoriesListShow, setCategoriesListShow] = useState(false);
  const [LoginStates, setLoginStates] = useState(false);
  const [PhoneMenuList, setPhoneMenuList] = useState(false);
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
    <div id="Navbar " className="position-sticky top-0 z-1">
      <nav className="navbar navbar-expand-lg bg-body-tertiary" >
        <div className="container-md m-0">
          {/* menu button for phone */}
          <div className="nav_phone_menu_icon" >
            <input type="checkbox" id="checkbox" />
            <label htmlFor="checkbox" className="toggle" onClick={(e) => setPhoneMenuList(!PhoneMenuList)}>
              <div className="bars" id="bar1"></div>
              <div className="bars" id="bar2"></div>
              <div className="bars" id="bar3"></div>
            </label>
          </div>
          {/* navbar logo */}
          <div className="d-flex align-items-center">
            <span className="navbar-brand mb-0 me-3 h1 d-flex">
              <span className="text-primary">On</span>
              <span className="text-warning">Market</span>
            </span>
            {/* navbar Links */}
            <ul className={`navbar-nav nav nav-underline nav-phone-menu ${PhoneMenuList ? "navbar-nav-responsive" : null}`}>
              <Link
                className="nav-link active"
                aria-current="page"
                to="/E-commerce"
              ><i className="bi bi-house mx-1"></i>
                Home
              </Link>
              <li
                className="nav-item curser-pointer"
                onClick={() => showCategories()}
              >
                <span className="nav-link">
                  <i className="bi bi-list mx-1"></i>
                  Categories <span>{CategoriesListShow ? "▼" : "△"}</span>
                </span>
              </li>
              <Link className="nav-link " to="/E-commerce/WishList">
                <i className="bi bi-bag-heart-fill mx-1"></i>  WishList
              </Link>
            </ul>
          </div>
          <div className="d-flex align-items-center">
            <div class="Search_input-wrapper me-2" >
              <button class="Search_icon">
                <i class="bi bi-search"></i>
              </button>
              <input placeholder="search.." class="Search_input" name="text" type="text" />
            </div>
          
            <div id="Account">
              {/* Account logo */}
              {LoginStates ? (
                <span className="me-4 h6 shadow rounded-pill bg-danger-subtle pt-1 p-2" >
                  <Link to="E-commerce/Profile" className="text-decoration-none">
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
                  className="btn btn-primary me-3 Nav_Login_btn "
                  data-bs-target="#LoginModalToggle"
                  data-bs-toggle="modal"
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
                </button>
              )}
              {/* cart logo */}
              <button className="btn btnActiveBorderNone position-relative p-0">
                <i
                  className="bi fs-4 bi-cart3 "
                  type="button"
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
      {/* show  and hide CategoriesList is click  */}
      {CategoriesListShow ? <CategoriesList /> : null}
      {/* <Login /> */}
      {props.data.UserLogin.LoginData === true ? null : (
        <LoginContainers LoginState={LoginStates} />
      )}
      <CartCanvasContainer />
    </div>
  );
};
