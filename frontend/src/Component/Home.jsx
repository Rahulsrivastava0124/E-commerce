import React, { useState, useEffect } from "react";
import { AllProductData, productsCategories } from "../server/productAPI.js";
import ProductCardContainer from "../containers/ProductCardContainer.js";
import CardPlaceHolder from "./LoadingStructer/CardPlaceHolder";
import FooterFeature from '../Component/Footer/FooterFeature'
import NavbarContainer from "../containers/NavbarContainer.js";
import Footer from "./Footer/Footer.jsx";

export const Home = (props) => {
  const [productData, setProductData] = useState("");
  const [Categories, setCategories] = useState("");
  const [ProductpreviewData, setProductpreviewData] = useState(" ");
  const [SortProductItems, setSortProductItems] = useState("all product");
  const [WishList_value, setWishList_value] = useState(false)
  const ArrayData = [];

  let ArraySortProductData = [];

  const SortProductData = (e) => {
    let Selected = document.getElementsByClassName("ActiveFilter")[0];
    Selected.classList.remove("bg-primary-subtle");
    Selected.children[0].classList.add("d-none");
    Selected.classList.remove("ActiveFilter");

    e.target.classList.add("bg-primary-subtle");
    e.target.children[0].classList.remove("d-none");
    e.target.classList.add("ActiveFilter");
    setSortProductItems((e.target.innerText).toLowerCase());
  };

  function SortFilter() {
    if (SortProductItems === "" || SortProductItems === "all product") {
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

  for (let index = 0; index < Categories.length;) {
    productData.map((element) => {
      if (element.category === Categories[index]) {
        ArrayData.push(element);
        index++;
      }
    });
  }

  const AddToCart = (element) => {
    props.AddToCartHandler({ state: { element: element } })
  }

  return (
    <>
      <NavbarContainer />
      {Array.isArray(productData) ? (
        <div
          id="carouselExampleAutoplaying"
          className="carousel slide mt-2"
          data-bs-ride="carousel"
        >
          <div className="carousel-indicators">
            {ArrayData.map((_, index) => {
              return (
                <button
                  type="button"
                  data-bs-target="#carouselExampleAutoplaying"
                  data-bs-slide-to={index}
                  className={`${index === 0 ? "active" : ""}`}
                  aria-current="true"
                  aria-label={index + 1}
                  key={index + "carousel"}
                ></button>
              );
            })}
          </div>
          <div className="carousel-inner">
            {ArrayData.map((element, index) => {
              return (
                <div
                  className={`carousel-item border ${index === 0 ? "active" : null
                    }`}
                  key={index + "inner"}
                >
                  <div
                    className="d-block w-100 rounded-1 slider-container"
                    style={{ height: "500px" }}
                  >
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

      <h2 className="text-center text-capitalize mt-3 ">
        {SortProductItems}
        <hr />
      </h2>

      <div className=" d-flex flex-wrap justify-content-center mt-3">
        <div className="container mx-3 p-2 d-flex justify-content-between align-items-center">
          <div className="">
            <span className="fs-5"> Filter </span>
          </div>
          <div className="text-end d-flex">
            <span className="d-flex align-items-center mx-1">
              <span
                className=" d-flex align-items-center badge bg-primary-subtle text-primary-emphasis ActiveFilter"
                style={{ cursor: "pointer" }}
                onClick={(e) => SortProductData(e)}
              >
                All Product
                <span className=" rounded-end-pill text-primary-emphasis">
                  <i className="bi bi-x-circle fs-6 mx-1 "></i>
                </span>
              </span>
            </span>
            {Array.isArray(Categories) ? (
              Categories.map((element, index) => {
                return (
                  <span
                    className="d-flex align-items-center mx-1"
                    key={element + index}
                  >
                    <span
                      className="  d-flex align-items-center badge text-primary-emphasis  text-capitalize"
                      style={{ cursor: "pointer" }}
                      onClick={(e) => SortProductData(e)}
                    >
                      {element}
                      <span className=" d-none rounded-end-pill text-primary-emphasis ">
                        <i className="bi bi-x-circle fs-6 mx-1 "></i>
                      </span>
                    </span>
                  </span>
                );
              })
            ) : (
              <p aria-hidden="true">
                <span className="placeholder col-6"></span>
              </p>
            )}
          </div>
        </div>
        {Array.isArray(productData) ? (
          ArraySortProductData.map((element, tabIndex) => {
            let Wishvalue = false;
            let CartAddValue = false;

            if (props.data.UserWish.length != 0) {
              for (let index = 0; index < props.data.UserWish.length; index++) {
                if (props.data.UserWish[index].WishList.state.element.id === element.id) {
                  Wishvalue = true;
                }
              }
            }

            if (props.data.AddToCart.length != 0) {
              for (let index = 0; index < props.data.AddToCart.length; index++) {
                if (props.data.AddToCart[index].Cart.state.element.id == element.id) {
                  CartAddValue = true;
                }
              }
            }

            return (
              <ProductCardContainer
                setProductpreviewData={setProductpreviewData}
                WishList_value={Wishvalue}
                CartAddValue={CartAddValue}
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
      <FooterFeature />
      <Footer />
    </>
  );
};
