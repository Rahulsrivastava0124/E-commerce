import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export const CategoriesList = (props) => {
  const [CategoriesListRes, setCategoriesListRes] = useState(" ");
  const getListData = () => {
    fetch("https://fakestoreapi.com/products/categories")
      .then((res) => res.json())
      .then((json) => {
        console.log(json);
        setCategoriesListRes(json);
      });
  };

  useEffect(() => {
    getListData();
  },[]);

  return (
    <div className="container bg-light rounded-3 mt-1">
      <ul className="nav nav-underline justify-content-evenly align-items-center">
        {Array.isArray(CategoriesListRes)
          ? CategoriesListRes.map((element, index) => {
              return (
                <li className="nav-item " key={index}>
                  <Link
                    className="nav-link text-dark "
                    aria-current="page"
                    to={`/Categories/${element.split(" ").join("")}`}
                  >
                    {element}
                  </Link>
                </li>
              );
            })
          : null}
      </ul>
    </div>
  );
};
