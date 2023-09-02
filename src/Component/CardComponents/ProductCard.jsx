import React, { useEffect, useState } from "react";
import { Rating } from "../../Function/Rating.js";
import { useNavigate } from "react-router-dom";

const ProductCard = (props) => {
  const navigate = useNavigate();
  const element = props.element;
  const tabIndex = props.element;
  const [AddToCardIcon, setAddToCardIcon] = useState({
    divElement: (
      <i
        className="bi bi-cart-plus fs-5"
        onClick={(e) => AddToCart(e, element)}
      ></i>
    ),
    click: false,
    Count: 0,
  });
  useEffect(() => {
    if (props.data.UserWish.length !== 0) {
      for (let i = 0; i < props.data.UserWish.length; i++) {
        if (
          props.CardType === "Home" ||
          props.CardType === " " ||
          props.CardType === "All Product"
            ? true
            : props.data.UserWish[i].WishList.state.category ===
              (props.CardType !== "Home" ? props.CardType : props.link)
        ) {
          const GET_ID = `${props.data.UserWish[i].WishList.state.category
            .split(" ")
            .join("")
            .split(`'`)
            .join("")}${props.data.UserWish[i].WishList.state.id}`;
          setTimeout(() => {
            document.getElementById(GET_ID).classList.add("bi-heart-fill");
            document.getElementById(GET_ID).classList.remove("bi-heart");
          }, 100);
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

  const AddToCart = async () => {
    await props.AddToCartHandler({ state: { element: props.element } });
    let countNo = 1;
    for (let i = 0; i < props.data.AddToCart.length; i++) {
      if (props.element.id === props.data.AddToCart[i].Cart.state.element.id) {
        console.log(props.data.AddToCart[i].Cart.state.count);
        countNo = props.data.AddToCart[i].Cart.state.count;
      }
    }
    setAddToCardIcon({
      ...AddToCardIcon,
      click: true,
      Count: countNo,
    });
  };
  const RemoveItems = () => {
    props.RemoveToCartHandler({ state: props.element });

    let countNo = 1;
    for (let i = 0; i < props.data.AddToCart.length; i++) {
      if (props.element.id === props.data.AddToCart[i].Cart.state.element.id) {
        console.log(props.data.AddToCart[i].Cart.state.count);
        countNo = props.data.AddToCart[i].Cart.state.count;
      }
    }
    setAddToCardIcon({
      ...AddToCardIcon,
      click: true,
      Count: countNo,
    });
  };
  return (
    <div
      className="card m-3 border-0 shadow-sm"
      style={{ width: "17rem", height: "fit-contant" }}
      key={tabIndex}
    >
      <img
        className="mx-auto pt-3"
        style={{ width: "180px", height: "160px" }}
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
        <div className="d-flex align-items-center justify-content-between">
          <h6 className="text-decoration-line-through">
            Rs.{element.price + 300}
          </h6>
          <h5 className="fs-6">
            {rateArray.map((element, index) => {
              return <i className={`  bi bi-star${element}`} key={index}></i>;
            })}
          </h5>
        </div>
        <div className="d-flex align-items-center justify-content-between">
          <span className=" btn ScaleButton">
            {AddToCardIcon.click === false ? (
              AddToCardIcon.divElement
            ) : (
              <div className="border rounded d-flex align-items-center">
                <span className="btn" onClick={() => RemoveItems()}>
                  <i class="bi bi-dash"></i>
                </span>
                <span>{AddToCardIcon.Count}</span>
                <span onClick={() => AddToCart()} className="btn">
                  <i class="bi bi-plus"></i>
                </span>
              </div>
            )}
          </span>
          <span
            className="btn ScaleButton "
            onClick={(e) => WishList(e, element)}
          >
            <i
              className={`IconScale ${element.category
                .split(" ")
                .join("")
                .split(`'`)
                .join("")}${element.id} bi bi-heart fs-5`}
              id={`${element.category.split(" ").join("").split(`'`).join("")}${
                element.id
              }`}
            ></i>
          </span>
          <button
            type="button"
            className="btn ScaleButton"
            onClick={() => navigate("/ProductPreview", { state: element })}
          >
            <i className="bi bi-eye-fill fs-5"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
