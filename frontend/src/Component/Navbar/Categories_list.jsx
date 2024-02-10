import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { productsCategories } from "../../server/productAPI.js";

export const CategoriesList = (props) => {
  const [CategoriesListRes, setCategoriesListRes] = useState([]);

  async function getData() {
    setCategoriesListRes(await productsCategories());
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <div className=" bg-light border-top">
        <ul className="nav nav-underline justify-content-evenly align-items-center">
          {CategoriesListRes.map((element, index) => {
            return (
              <li className="nav-item" key={index}>
                <Link
                  className="nav-link text-dark "
                  aria-current="page"
                  to={`/Categories/${element.split(" ").join("")}`}
                >
                  <span>{element}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};
