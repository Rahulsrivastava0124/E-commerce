import React, { useEffect, useState } from "react";
import { Rating } from "../../Function/Rating.js";
import { useNavigate } from "react-router-dom";

const ProductCard = (props) => {
  const navigate = useNavigate();
  const element = props.element;
  const tabIndex = props.element.id;

  const [WishList, setWishList] = useState(props.WishList_value);

  const [AddToCardIcon, setAddToCardIcon] = useState({
    divElement: (
      <button className="CartBtn rounded" onClick={(e) => AddToCart(e, element)}>
        <span className="IconContainer">
          <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512" fill="rgb(17, 17, 17)" className="cart"><path d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"></path></svg>
        </span>
        <p className="text mb-0">Add to Cart</p>
      </button>
    ),
    click: props.CartAddValue,
    Count: 0,
  });

  let WishList_btn = (
    <button className="CartBtn rounded text-bg-light" onClick={(e) => Add_WishList()}>
      <span className="IconContainer">
        <i className="bi bi-heart-fill"></i>
      </span>
      <p className="text mb-0"> Wishlist</p>
    </button>)

  let Remove_WishList_btn = (<button className="CartBtn rounded text-bg-danger " onClick={(e) => RemoveToWishList(element)}>
    <span className="IconContainer">
      <i className="bi bi-trash-fill"></i>
    </span>
    <p className="text text-white mb-0"> Remove </p>
  </button>)
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
    getCountData()
  }, [props.data.UserWish, props.data.AddToCart]);

  const rateArray = Rating(element.rating.rate);
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

  const RemoveToWishList = (element) => {
    props.RemoveToWishListHandler({ state: { element } });
    setWishList(false)
  };


  const Add_WishList = (element) => {
    props.AddTowishlist({ state: { element:props.element } })
    setWishList(true)
  }
  return (
    <div key={tabIndex} >
      <div className="card  p-0 m-3 mb-2 border-0 rounded shadow-sm ScaleProductCard"
        style={{ width: "16rem", height: "fit-contant", cursor: "pointer" }}
      >
        <div className="card-body text-center p-0 "
          onClick={() => navigate("/ProductPreview", { state: element })}>
          <img
            className="mx-auto pt-3"
            style={{ width: "140px", height: "140px" }}
            src={element.image}
            alt="productImage"
          />
          <div className="card-body text-start pb-0">
            <h6 className="card-title">{element.title.slice(0, 20)}</h6>
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
          </div>
        </div>
        <div className="d-flex align-items-center justify-content-between mx-3 mb-3 mt-2">
          {WishList ? Remove_WishList_btn : WishList_btn}
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
