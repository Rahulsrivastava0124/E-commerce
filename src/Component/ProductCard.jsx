import React, { useEffect, useState } from "react";
import { PreviewProduct } from "./PreviewProduct";
import { Rating } from "../Function/Rating.js";

const ProductCard = (props) => {
  
  console.log(props)
  const element = props.element;
  const tabIndex = props.element;
  useEffect(() => {
    if (props.data.UserWish.length !== 0) {
      for (let i = 0; i < props.data.UserWish.length; i++) {
        if (
          props.CardType === "Home"
            ? true
            : props.data.UserWish[i].WishList.state.category === props.link
        ) {
          const GET_ID = `${props.data.UserWish[i].WishList.state.category
            .split(" ")
            .join("")
            .split(`'`)
            .join("")}${props.data.UserWish[i].WishList.state.id}`;
          setTimeout(() => {
            document.getElementById(GET_ID).classList.add("bi-heart-fill");
            document.getElementById(GET_ID).classList.remove("bi-heart");
          }, 1000);
        }
      }
    }
  }, [props]);

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
      props.RemoveTowishlist({ state: element });
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
        <p className="card-text">{element.description.slice(0, 50)}</p>
        <div className="d-flex justify-content-between">
          <h3 className="fw-bold text-primary">Rs.{element.price}</h3>
          <h className="text-success"> Instock </h>
        </div>
        <h6 className="text-decoration-line-through">
          Rs.{element.price + 300}
        </h6>
        <h5>
          {rateArray.map((element, index) => {
            return <i className={`bi bi-star${element}`} key={index}></i>;
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
            id={`${element.category.split(" ").join("").split(`'`).join("")}${
              element.id
            }`}
          ></i>
        </span>
        <button
          type="button"
          className="btn rounded-circle ScaleButton shadow "
          data-bs-toggle="modal"
          data-bs-target="#productPreviewModal"
          onClick={() => props.setProductpreviewData(element)}
        >
          <i className="bi bi-eye-fill fs-4"></i>
        </button>
      </div>
     
    </div>
  );
};

export default ProductCard;
