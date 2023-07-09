import React from "react";
import { Link } from "react-router-dom";

export const CategoriesList = (props) => {
  return (
    <div className="container bg-light rounded-3 mt-1">
      <ul className="nav nav-underline justify-content-between">
        <li className="nav-item">
          <Link
            className="nav-link text-dark "
            aria-current="page"
            to="/Categories/Mobiles&Tablets"
          >
            Mobiles & Tablets
          </Link>
        </li>
        <li className="nav-item">
          <Link
            className="nav-link text-dark"
            to="/Categories/Laptops&Desktops"
          >
            Laptops & Desktops
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-dark" to="/Categories/Watches">
            Watches
          </Link>
        </li>
        <li className="nav-item">
          <Link
            className="nav-link text-dark "
            to="/Categories/TV&Applications"
          >
            TVs & Applications
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-dark " to="/Categories/Fashion">
            Fashion
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-dark " to="/Categories/Beauty">
            Beauty
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-dark " to="/Categories/Home&Kitchen">
            Home & Kitchen
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-dark " to="/Categories/Grocery">
            Grocery
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-dark " to="/Categories/Gifts">
            Gifts
          </Link>
        </li>
      </ul>
    </div>
  );
};
