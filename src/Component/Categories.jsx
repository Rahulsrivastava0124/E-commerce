import React, { useState, useEffect } from "react";
import solidColorImage from "../image/solidColorImage.png";
export const Categories = (props) => {
  const [ResData, setResData] = useState("");

  const FetchProductAPI = (data) => {
    fetch(`https://fakestoreapi.com/products/category/${data}`)
      .then((res) => res.json())
      .then((json) => {
        setResData(json);
      });
  };
  useEffect(() => {
    FetchProductAPI(props.data);
  }, [props.data]);

  return (
    <>
      <h3 className="fw-bolder text-center">
        {" "}
        {props.data ? props.data : null}{" "}
      </h3>
      <div className="container d-flex flex-wrap">
        {Array.isArray(ResData) ? (
          ResData.map((element, tabIndex) => {
            let rating = element.rating.rate.toString().split(".");
            let dec = `0.${rating[1]}`;
            let decRating = parseFloat(dec).toFixed();
            var rateArray = ["", "", "", "", ""];
            for (var i = 0; i < Number(rating[0]); i++) {
              rateArray[i] = "-fill";
            }
            if (decRating === "1") {
              rateArray[i] = "-half";
            }
            const WishList = (e) => {
              if (e.target.classList[0] === "btn") {
                var data = e.target.firstChild.classList[1];
              } else {
                data = e.target.classList[1];
              }

              let ClassData = document.querySelector(`.${data}`);

              if (ClassData.classList.contains("bi-heart")) {
                ClassData.classList.add("bi-heart-fill");
                ClassData.classList.remove("bi-heart");
              } else {
                ClassData.classList.remove("bi-heart-fill");
                ClassData.classList.add("bi-heart");
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
                    <h7 className="text-success"> Instock </h7>
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
                    className="btn ScaleButton mx-2 rounded-circle shadow "
                    onClick={(e) => WishList(e)}
                  >
                    <i
                      className={`IconScale  ${element.category}${tabIndex} bi bi-heart fw-bolder `}
                    ></i>
                  </span>
                  <button type="button" className="btn btn-danger">
                    <i className="bi bi-eye-fill"></i>
                  </button>
                </div>
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
              <img src={solidColorImage} alt="" />
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
              <img src={solidColorImage} alt="" />
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
              <img src={solidColorImage} alt="" />
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
              <img src={solidColorImage} alt="" />
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
              <img src={solidColorImage} alt="" />
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
              <img src={solidColorImage} alt="" />
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
              <img src={solidColorImage} alt="" />
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
              <img src={solidColorImage} alt="" />
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
