import React, { useState, useEffect } from "react";
import "../App.css";
import { AllProductData, productsCategories } from "../server/productAPI.js";
import SolidColorBackground from "../Svg/images/SolidColorBackground.jpg";
import ProductCardContainer from "../containers/ProductCardContainer.js";
import CardPlaceHolder from "./CardPlaceHolder";

export const Home = (props) => {
  const [productData, setProductData] = useState("");
  const [Categories, setCategories] = useState(""); // console.log("Home", props);

  const ArrayData = [];
  useEffect(() => {
    async function GetProductData() {
      setProductData(await AllProductData());
      setCategories(await productsCategories());
    }
    GetProductData();
  }, []);

  for (let index = 0; index < Categories.length; ) {
    productData.map((element) => {
      if (element.category === Categories[index]) {
        ArrayData.push(element);
        index++;
      }
      return null;
    });
  }

  console.log("home", props);
  return (
    <>
      <div
        id="carouselExampleAutoplaying"
        className="carousel slide mt-2"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          {ArrayData.map((element, index) => {
            return (
              <button
                type="button"
                data-bs-target="#carouselExampleAutoplaying"
                data-bs-slide-to={index}
                className={`${index === 0 ? "active" : ""}`}
                aria-current="true"
                aria-label={index + 1}
                key={index}
              ></button>
            );
          })}
        </div>
        <div className="carousel-inner">
          {ArrayData.map((element, index) => {
            return (
              <div
                className={`carousel-item ${index === 0 ? "active" : null}`}
                key={index}
              >
                <img
                  src={SolidColorBackground}
                  className="d-block w-100 rounded-1"
                  alt={element.title}
                  style={{ height: "500px" }}
                />
                <div className="carousel-caption d-none d-md-block  text-start">
                  <div className="d-flex">
                    <div>
                      <img
                        className="rounded-1 imageTransparentBackground"
                        src={element.image}
                        alt={element.category}
                        style={{
                          width: "300px",
                          height: "350px",
                          margin: "30px 100px 30px -80px",
                        }}
                      />
                    </div>
                    <div className="mt-4">
                      <h5 className="fs-2 mb-4 fw-bold text-dark">
                        {element.title}
                      </h5>
                      <p className=" fs-5">
                        {element.description.slice(0, 200)}
                      </p>
                      <div>
                        <button className="btn btn-lg btn-warning my-3">
                          Read More..
                        </button>
                        <button className="btn btn-lg btn-primary m-4">
                          Add to Cart
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      <div className="container mt-3 rounded-1 shadow p-2">
        <span className="fs-5"> Filter </span>
        {/* Filters */}
      </div>
      <h2 className="text-center mt-2">Best Product,s</h2>
      <div className="container d-flex flex-wrap mt-3">
        {Array.isArray(productData) ? (
          productData.map((element, tabIndex) => {
            return (
              <ProductCardContainer
                element={element}
                tabIndex={tabIndex}
                link={props.link}
                key={tabIndex}
                CardType={"Home"}
              />
            );
          })
        ) : (
          <CardPlaceHolder />
        )}
      </div>
    </>
  );
};
