import React, { useState, useEffect } from "react";
import { AllProductData, productsCategories } from "../server/productAPI.js";
import SolidColorBackground from "../Svg/images/SolidColorBackground.jpg";
import ProductCardContainer from "../containers/ProductCardContainer.js";
import CardPlaceHolder from "./LoadingStructer/CardPlaceHolder";
import { useLocation, useNavigate } from "react-router-dom";
import FooterFeature from '../Component/Footer/FooterFeature'
import NavbarContainer from "../containers/NavbarContainer.js";

export const Home = (props) => {
  const location = useLocation();
  const navigate = useNavigate();
  const [productData, setProductData] = useState("");
  const [Categories, setCategories] = useState("");
  const [ProductpreviewData, setProductpreviewData] = useState(" ");
  const [SortProductItems, setSortProductItems] = useState("");
  const ArrayData = [];
  let ArraySortProductData = [];
  const SortProductData = (e) => {
    let Selected = document.getElementsByClassName("ActiveFilter")[0];
    Selected.classList.remove("bg-warning-subtle");
    Selected.children[0].classList.add("d-none");
    Selected.classList.remove("ActiveFilter");
    e.target.classList.add("bg-warning-subtle");
    e.target.children[0].classList.remove("d-none");
    e.target.classList.add("ActiveFilter");
    setSortProductItems(e.target.innerText);
  };

  function SortFilter() {
    if (SortProductItems === "" || SortProductItems === "All Product") {
      ArraySortProductData = productData;
    } else {
      for (let index = 0; index < productData.length; index++) {
        if (productData[index].category === SortProductItems) {
          ArraySortProductData.push(productData[index]);
        }
      }
    }
  }
  SortFilter();
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

  return (
    <>
    <NavbarContainer/>
      {Array.isArray(productData) ? (
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
                  className={`carousel-item border ${
                    index === 0 ? "active" : null
                  }`}
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
                          <button
                            className="btn btn-warning my-3"
                            onClick={(e) => AddToCart(element)}
                          >
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
            className="carousel-control-prev z-0"
            type="button"
            data-bs-target="#carouselExampleAutoplaying"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon "
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next z-0"
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
      ) : (
        <div className="container place_div  mt-5">
          <div className="d-flex">
            <div className="image_holder rounded-2"></div>
            <div className="container " style={{ height: "500px" }}>
              <p aria-hidden="true">
                <span className="placeholder col-6"></span>
              </p>

              <div>
                <span className="placeholder col-6"></span>
                <span className="placeholder w-75"></span>
                <span className="placeholder" style={{ width: "25%" }}></span>
              </div>
            </div>
          </div>
        </div>
      )}
      <div className="container mt-3 rounded-1 shadow p-2 d-flex justify-content-between align-items-center">
        <div className="">
          <span className="fs-5"> Filter </span>
        </div>
        <div className="text-end d-flex">
          <span className="d-flex align-items-center mx-1">
            <button
              className=" btn d-flex align-items-center badge border border-primary-subtle rounded-pill bg-warning-subtle text-primary-emphasis ActiveFilter"
              onClick={(e) => SortProductData(e)}
            >
              All Product
              <span className="  border-primary-subtle rounded-end-pill text-primary-emphasis">
                <i className="bi bi-x-circle fs-6 mx-1 "></i>
              </span>
            </button>
          </span>
          {Array.isArray(Categories) ? (
            Categories.map((element, index) => {
              return (
                <span
                  className="d-flex align-items-center mx-1"
                  key={element + index}
                >
                  <button
                    className=" btn d-flex align-items-center badge border border-primary-subtle rounded-pill text-primary-emphasis  rounded-start-pill "
                    onClick={(e) => SortProductData(e)}
                  >
                    {element}
                    <span className=" d-none border-primary-subtle rounded-end-pill text-primary-emphasis ">
                      <i className="bi bi-x-circle fs-6 mx-1 "></i>
                    </span>
                  </button>
                </span>
              );
            })
          ) : (
            <p aria-hidden="true">
              <span className="placeholder col-6"></span>
            </p>
          )}
        </div>
        {/* Filters */}
      </div>
      <h2 className="text-center mt-3 ">
        {SortProductItems}
        <hr />
      </h2>

      <div className="container d-flex flex-wrap mt-3">
        {Array.isArray(productData) ? (
          ArraySortProductData.map((element, tabIndex) => {
            return (
              <ProductCardContainer
                setProductpreviewData={setProductpreviewData}
                element={element}
                tabIndex={tabIndex}
                link={props.link}
                key={tabIndex}
                CardType={SortProductItems}
              />
            );
          })
        ) : (
          <CardPlaceHolder />
        )}
      </div>
      <FooterFeature/>
    </>
  );
};
