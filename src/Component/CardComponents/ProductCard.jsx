import React, { useEffect, useState } from "react";
import { Rating } from "../../Function/Rating.js";
import { useNavigate } from "react-router-dom";

const ProductCard = (props) => {
  const navigate = useNavigate();
  const element = props.element;
  const tabIndex = props.element;
  const [AddToCardIcon, setAddToCardIcon] = useState({
    divElement: (
      <span
        className="btn btn-primary btn-sm pt-0"
        onClick={(e) => AddToCart(e, element)}
      >
        <i className="bi bi-cart-plus fs-5 me-1 "></i>
        Add To Cart
      </span>
    ),
    click: false,
    Count: 0,
  });

  const [countNo, setcountNo] = useState(0);

  const getCountData = () => {
    for (let i = 0; i < props.data.AddToCart.length; i++) {
      if (props.element.id === props.data.AddToCart[i].Cart.state.element.id) {
        setcountNo(
          props.data.AddToCart[i].Cart.state.count === undefined
            ? 0
            : props.data.AddToCart[i].Cart.state.count
        );
      }
    }
  };
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
    getCountData();
  }, [props]);

  const rateArray = Rating(element.rating.rate);

  const WishList = (e, element) => {

    if (!e.target.classList.contains("wishlist-Add")) {
      e.target.classList.add("wishlist-Add");
      props.AddTowishlist({ state: element });
    } else {
      e.target.classList.remove("wishlist-Add");
      props.RemoveTowishlist({ state: element });
    }
  };

  const AddToCart = () => {
    props.AddToCartHandler({ state: { element: props.element } });
    setAddToCardIcon({
      ...AddToCardIcon,
      click: true,
      Count: countNo,
    });
  };
  const RemoveItems = () => {
    props.RemoveToCartHandler({ state: props.element });
    for (let i = 0; i < props.data.AddToCart.length; i++) {
      if (props.element.id === props.data.AddToCart[i].Cart.state.element.id) {
        setcountNo(props.data.AddToCart[i].Cart.state.count);
      }
    }

    countNo === 1
      ? setAddToCardIcon({
        divElement: (
          <span
            className="btn btn-primary btn-sm pt-0"
            onClick={(e) => AddToCart(e, element)}
          >
            <i className="bi bi-cart-plus fs-5 me-1 "></i>
            Add To Cart
          </span>
        ),
        click: false,
        Count: 0,
      })
      : setAddToCardIcon({
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
          <h3 className="fw-bold text-primary-emphasis">Rs.{element.price}</h3>
          <span className="text-success"> Instock </span>
        </div>
        <div className="d-flex  align-items-center justify-content-between">
          <h6 className="text-decoration-line-through">
            Rs.{element.price + 300}
          </h6>
          <h5 className="fs-6">
            {rateArray.map((element, index) => {
              return <i className={`bi bi-star${element}`} key={index}></i>;
            })}
          </h5>
        </div>
        <div className="d-flex align-items-center justify-content-between">
          <span
            className="btn ScaleButton "
            onClick={(e) => WishList(e, element)}
          >
            <div className="heart-container" title="Like">
              <input type="checkbox" className="checkbox" id="Give-It-An-Id" />
              <div className="svg-container">
                <svg
                  viewBox="0 0 24 24"
                  className="svg-outline"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M17.5,1.917a6.4,6.4,0,0,0-5.5,3.3,6.4,6.4,0,0,0-5.5-3.3A6.8,6.8,0,0,0,0,8.967c0,4.547,4.786,9.513,8.8,12.88a4.974,4.974,0,0,0,6.4,0C19.214,18.48,24,13.514,24,8.967A6.8,6.8,0,0,0,17.5,1.917Zm-3.585,18.4a2.973,2.973,0,0,1-3.83,0C4.947,16.006,2,11.87,2,8.967a4.8,4.8,0,0,1,4.5-5.05A4.8,4.8,0,0,1,11,8.967a1,1,0,0,0,2,0,4.8,4.8,0,0,1,4.5-5.05A4.8,4.8,0,0,1,22,8.967C22,11.87,19.053,16.006,13.915,20.313Z"></path>
                </svg>
                <svg
                  viewBox="0 0 24 24"
                  className="svg-filled"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M17.5,1.917a6.4,6.4,0,0,0-5.5,3.3,6.4,6.4,0,0,0-5.5-3.3A6.8,6.8,0,0,0,0,8.967c0,4.547,4.786,9.513,8.8,12.88a4.974,4.974,0,0,0,6.4,0C19.214,18.48,24,13.514,24,8.967A6.8,6.8,0,0,0,17.5,1.917Z"></path>
                </svg>
                <svg
                  className="svg-celebrate"
                  width="100"
                  height="100"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <polygon points="10,10 20,20"></polygon>
                  <polygon points="10,50 20,50"></polygon>
                  <polygon points="20,80 30,70"></polygon>
                  <polygon points="90,10 80,20"></polygon>
                  <polygon points="90,50 80,50"></polygon>
                  <polygon points="80,80 70,70"></polygon>
                </svg>
              </div>
            </div>
            {/* <i
              className={`IconScale ${element.category
                .split(" ")
                .join("")
                .split(`'`)
                .join("")}${element.id} bi bi-heart fs-5`}
              id={`${element.category.split(" ").join("").split(`'`).join("")}${
                element.id
              }`}
            ></i> */}
          </span>
          <button
            type="button"
            className="btn ScaleButton"
            onClick={() => navigate("/E-commerce/ProductPreview", { state: element })}
          >
            <i className="bi bi-eye-fill fs-5"></i>
          </button>
          <span className=" ">
            {AddToCardIcon.click === false ? (
              AddToCardIcon.divElement
            ) : (
              <div className="border rounded d-flex align-items-center border-primary-subtle">
                <span
                  className="btn btn-sm btn-primary rounded-end-0"
                  onClick={() => RemoveItems()}
                >
                  <i className="bi bi-dash"></i>
                </span>
                <span className="px-3">{countNo}</span>
                <span
                  onClick={() => AddToCart()}
                  className="btn btn-sm btn-primary rounded-start-0"
                >
                  <i className="bi bi-plus"></i>
                </span>
              </div>
            )}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
