import React, { useEffect, useState } from "react";
import { Rating } from "../../Function/Rating.js";
import { useNavigate } from "react-router-dom";

const ProductCard = (props) => {
  const navigate = useNavigate();
  const element = props.element;
  const tabIndex = props.element;
  const [AddToCardIcon, setAddToCardIcon] = useState({
    divElement: (
      <button className="CartBtn rounded" onClick={(e) => AddToCart(e, element)}>
        <span className="IconContainer">
          <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512" fill="rgb(17, 17, 17)" className="cart"><path d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"></path></svg>
        </span>
        <p className="text mb-0">Add to Cart</p>
      </button>
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
          <button className="CartBtn rounded" onClick={(e) => AddToCart(e, element)}>
            <span className="IconContainer">
              <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512" fill="rgb(17, 17, 17)" className="cart"><path d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"></path></svg>
            </span>
            <p className="text mb-0">Add to Cart</p>
          </button>
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
        <div className="d-flex align-items-center justify-content-between">
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

          </span>
          <button
            type="button"
            className="btn ScaleButton"
            onClick={() => navigate("/ProductPreview", { state: element })}
          >
            <i className="bi bi-eye-fill fs-5"></i>
          </button>
          <span className=" ">
            {AddToCardIcon.click === false ? (
              AddToCardIcon.divElement
            ) : (
              <div className="border rounded d-flex align-items-center border-warning-subtle">
                <span
                  className="btn btn-sm btn-warning rounded-end-0"
                  onClick={() => RemoveItems()}
                >
                  <i className="bi bi-dash"></i>
                </span>
                <span className="px-3">{countNo}</span>
                <span
                  onClick={() => AddToCart()}
                  className="btn btn-sm btn-warning rounded-start-0"
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
