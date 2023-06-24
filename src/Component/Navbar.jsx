import React, { useState } from "react";
import Account from "../Svg/Account.svg";
import Cart from "../Svg/Cart.svg";
import { CategoriesList } from "../Component/Categories_list";
import Login from "./Login";

export const Navbar = (props) => {
  const [CategoriesListShow, setCategoriesListShow] = useState(true);
  const [LoginStates, setLoginStates] = useState(false);
  const showCategories = () => {
    if (CategoriesListShow === true){
      setCategoriesListShow(false);
    } else {
      setCategoriesListShow(true);
    }
  };

  return (
    <div id="Navbar">
      <nav className="navbar navbar-expand-lg bg-body-tertiary mx-2 rounded-3">
        <div className="container-md">
          {/* navbar logo */}
          <div className="d-flex align-items-center">
            <span className="navbar-brand mb-0 me-3 h1">Navbar</span>
            {/* navbar Links */}
            <ul className="navbar-nav nav nav-underline">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/Home">
                  Home
                </a>
              </li>
              <li
                className="nav-item curser-pointer"
                onClick={() => showCategories()}
              >
                <span className="nav-link">
                  Categories <span>{CategoriesListShow ? "▼" : "△"}</span>
                </span>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="./Deals.jsx">
                  Deals
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link " href="/">
                  What's New
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">
                  {/* {Test} */}
                  Delivery
                </a>
              </li>
            </ul>
          </div>
          <div className="d-flex align-items-center">
            {/* navbar search input */}
            <form className="me-3">
              <input
                className="form-control me-2 border-0"
                type="search"
                placeholder="Search 🔍"
                aria-label="Search"
              />
            </form>
            <div id="Account">
              {/* Account logo */}
              {LoginStates ? (
                <span className="me-4 h6">
                  <img src={Account} alt="Account" className="" /> {props.User}
                </span>
              ) : (
                <button
                  type="button"
                  className="btn btn-primary me-3"
                  data-bs-target="#exampleModalToggle"
                  data-bs-toggle="modal"
                >
                  Login
                </button>
              )}
              {/* cart logo */}
              <span>
                <img src={Cart} alt="Account" className=" cart_logo" />
              </span>
            </div>
          </div>
        </div>
      </nav>
      {/* show  and hide CategoriesList is click  */}
      {CategoriesListShow ? <CategoriesList /> : null}
      <Login />
    </div>
  );
};
