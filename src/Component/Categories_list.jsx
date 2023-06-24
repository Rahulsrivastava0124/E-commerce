import React from "react";

export const CategoriesList = (props) => {
  return (
    <div className="container bg-light rounded-3 mt-1">
      <ul className="nav nav-underline justify-content-between">
        <li className="nav-item">
          <a className="nav-link text-dark " aria-current="page" href="/">
            Mobiles & Tablets
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-dark" href="/">
            Laptops & Desktops
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-dark" href="/">
            Watches
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-dark " href="/">
            TVs & Applications
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-dark " href="/">
            Fashion
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-dark " href="/">
            Beauty
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-dark " href="/">
            Home & Kitchen
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-dark " href="/">
            Grocery
          </a>
        </li>
        <li className="nav-item">
          <span className="nav-link text-dark " type="button" href="/">
            Gifts
          </span>
        </li>
      </ul>
    </div>
  );
};
