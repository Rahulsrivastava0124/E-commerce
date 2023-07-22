import React, { useState, useEffect } from "react";
import SolidColorImage from "../image/solidColorImage.png";
import { PreviewProduct } from "./PreviewProduct";
import { Rating } from "../Function/Rating.js";

export const Categories = (props) => {
  const [ResData, setResData] = useState("");
  const [ProductpreviewData, setProductpreviewData] = useState(" ");
  const FetchProductAPI = (data) => {
    fetch(`https://fakestoreapi.com/products/category/${data}`)
      .then((res) => res.json())
      .then((json) => {
        setResData(json);
      });
  };
  useEffect(() => {
    console.log("Categories", props);
    FetchProductAPI(props.link);
    if (props.data.UserWish.length !== 0) {
      for (let i = 0; i < props.data.UserWish.length; i++) {
        if (props.data.UserWish[i].WishList.state.category === props.link) {
          setTimeout(() => {
            document
              .getElementById(
                `${props.data.UserWish[i].WishList.state.category}${props.data.UserWish[i].WishList.state.id}`
              )
              .classList.add("bi-heart-fill");
            document
              .getElementById(
                `${props.data.UserWish[i].WishList.state.category}${props.data.UserWish[i].WishList.state.id}`
              )
              .classList.remove("bi-heart");
          }, 1000);
        }
      }
    }
  }, [props]);

  return (
    <>
      <h3 className="fw-bolder text-center">
        {" "}
        {props.link ? props.link : null}{" "}
      </h3>
      <div className="container d-flex flex-wrap">
        {Array.isArray(ResData) ? (
          ResData.map((element, tabIndex) => {
            const rateArray = Rating(element.rating.rate);
            const WishList = (e, element) => {
              if (e.target.classList[0] === "btn") {
                var data = e.target.firstChild.classList[1];
              } else {
                data = e.target.classList[1];
              }
              let ClassData = document.querySelector(`.${data}`);
              if (ClassData.classList.contains("bi-heart")) {
                ClassData.classList.add("bi-heart-fill");
                ClassData.classList.remove("bi-heart");
                props.AddTowishlist({ state: element });
              } else {
                ClassData.classList.remove("bi-heart-fill");
                ClassData.classList.add("bi-heart");
                props.RemoveTowishlist({state:element})
              }
            };
            return (
              <div
                className="card m-3 border-0 shadow-sm"
                style={{ width: "18rem" }}
                key={tabIndex}
              >
                <img
                  className="mx-auto pt-3 "
                  style={{ width: "250px", height: "200px" }}
                  src={element.image}
                  alt="productImage"
                />
                <div className="card-body">
                  <h5 className="card-title">{element.title.slice(0, 20)}</h5>
                  <p className="card-text">
                    {element.description.slice(0, 50)}
                  </p>
                  <div className="d-flex justify-content-between">
                    <h3 className="fw-bold text-primary">Rs.{element.price}</h3>
                    <h className="text-success"> Instock </h>
                  </div>
                  <h6 className="text-decoration-line-through">
                    Rs.{element.price + 300}
                  </h6>
                  <h5>
                    {rateArray.map((element, index) => {
                      return (
                        <i className={`bi bi-star${element}`} key={index}></i>
                      );
                    })}
                  </h5>
                  <a href="/" className="btn btn-primary">
                    Add to cart
                  </a>
                  <span
                    type="button"
                    className="btn ScaleButton mx-3 rounded-circle shadow fs-4"
                    onClick={(e) => WishList(e, element)}
                  >
                    <i
                      className={`IconScale ${element.category
                        .split(" ")
                        .join("")
                        .split(`'`)
                        .join("")}${element.id} bi bi-heart fw-bolder `}
                      id={`${element.category
                        .split(" ")
                        .join("")
                        .split(`'`)
                        .join("")}${element.id}`}
                    ></i>
                  </span>
                  <button
                    type="button"
                    className="btn rounded-circle ScaleButton shadow "
                    data-bs-toggle="modal"
                    data-bs-target="#productPreviewModal"
                    onClick={() => setProductpreviewData(element)}
                  >
                    <i className="bi bi-eye-fill fs-4"></i>
                  </button>
                </div>
                <PreviewProduct data={ProductpreviewData} />
              </div>
            );
          })
        ) : (
          <div className=" container d-flex flex-wrap">
            <div
              className="card m-2"
              style={{ width: "18rem" }}
              aria-hidden="true"
            >
              <img src={SolidColorImage} alt="" />
              <div className="card-body">
                <h5 className="card-title placeholder-glow">
                  <span className="placeholder col-6"></span>
                </h5>
                <p className="card-text placeholder-glow">
                  <span className="placeholder col-7"></span>
                  <span className="placeholder col-4"></span>
                  <span className="placeholder col-4"></span>
                  <span className="placeholder col-6"></span>
                  <span className="placeholder col-8"></span>
                </p>
                <span className="btn btn-primary disabled placeholder col-6"></span>
              </div>
            </div>
            <div
              className="card m-2"
              style={{ width: "18rem" }}
              aria-hidden="true"
            >
              <img src={SolidColorImage} alt="" />
              <div className="card-body">
                <h5 className="card-title placeholder-glow">
                  <span className="placeholder col-6"></span>
                </h5>
                <p className="card-text placeholder-glow">
                  <span className="placeholder col-7"></span>
                  <span className="placeholder col-4"></span>
                  <span className="placeholder col-4"></span>
                  <span className="placeholder col-6"></span>
                  <span className="placeholder col-8"></span>
                </p>
                <span className="btn btn-primary disabled placeholder col-6"></span>
              </div>
            </div>
            <div
              className="card m-2"
              style={{ width: "18rem" }}
              aria-hidden="true"
            >
              <img src={SolidColorImage} alt="" />
              <div className="card-body">
                <h5 className="card-title placeholder-glow">
                  <span className="placeholder col-6"></span>
                </h5>
                <p className="card-text placeholder-glow">
                  <span className="placeholder col-7"></span>
                  <span className="placeholder col-4"></span>
                  <span className="placeholder col-4"></span>
                  <span className="placeholder col-6"></span>
                  <span className="placeholder col-8"></span>
                </p>
                <span className="btn btn-primary disabled placeholder col-6"></span>
              </div>
            </div>
            <div
              className="card m-2"
              style={{ width: "18rem" }}
              aria-hidden="true"
            >
              <img src={SolidColorImage} alt="" />
              <div className="card-body">
                <h5 className="card-title placeholder-glow">
                  <span className="placeholder col-6"></span>
                </h5>
                <p className="card-text placeholder-glow">
                  <span className="placeholder col-7"></span>
                  <span className="placeholder col-4"></span>
                  <span className="placeholder col-4"></span>
                  <span className="placeholder col-6"></span>
                  <span className="placeholder col-8"></span>
                </p>
                <span className="btn btn-primary disabled placeholder col-6"></span>
              </div>
            </div>
            <div
              className="card m-2"
              style={{ width: "18rem" }}
              aria-hidden="true"
            >
              <img src={SolidColorImage} alt="" />
              <div className="card-body">
                <h5 className="card-title placeholder-glow">
                  <span className="placeholder col-6"></span>
                </h5>
                <p className="card-text placeholder-glow">
                  <span className="placeholder col-7"></span>
                  <span className="placeholder col-4"></span>
                  <span className="placeholder col-4"></span>
                  <span className="placeholder col-6"></span>
                  <span className="placeholder col-8"></span>
                </p>
                <span className="btn btn-primary disabled placeholder col-6"></span>
              </div>
            </div>
            <div
              className="card m-2"
              style={{ width: "18rem" }}
              aria-hidden="true"
            >
              <img src={SolidColorImage} alt="" />
              <div className="card-body">
                <h5 className="card-title placeholder-glow">
                  <span className="placeholder col-6"></span>
                </h5>
                <p className="card-text placeholder-glow">
                  <span className="placeholder col-7"></span>
                  <span className="placeholder col-4"></span>
                  <span className="placeholder col-4"></span>
                  <span className="placeholder col-6"></span>
                  <span className="placeholder col-8"></span>
                </p>
                <span className="btn btn-primary disabled placeholder col-6"></span>
              </div>
            </div>
            <div
              className="card m-2"
              style={{ width: "18rem" }}
              aria-hidden="true"
            >
              <img src={SolidColorImage} alt="" />
              <div className="card-body">
                <h5 className="card-title placeholder-glow">
                  <span className="placeholder col-6"></span>
                </h5>
                <p className="card-text placeholder-glow">
                  <span className="placeholder col-7"></span>
                  <span className="placeholder col-4"></span>
                  <span className="placeholder col-4"></span>
                  <span className="placeholder col-6"></span>
                  <span className="placeholder col-8"></span>
                </p>
                <span className="btn btn-primary disabled placeholder col-6"></span>
              </div>
            </div>
            <div
              className="card m-2"
              style={{ width: "18rem" }}
              aria-hidden="true"
            >
              <img src={SolidColorImage} alt="" />
              <div className="card-body">
                <h5 className="card-title placeholder-glow">
                  <span className="placeholder col-6"></span>
                </h5>
                <p className="card-text placeholder-glow">
                  <span className="placeholder col-7"></span>
                  <span className="placeholder col-4"></span>
                  <span className="placeholder col-4"></span>
                  <span className="placeholder col-6"></span>
                  <span className="placeholder col-8"></span>
                </p>
                <span className="btn btn-primary disabled placeholder col-6"></span>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};
