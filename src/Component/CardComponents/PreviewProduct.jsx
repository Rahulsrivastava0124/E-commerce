import React, { useState, useEffect } from "react";
import { Rating } from "../../Function/Rating";
import { useLocation } from "react-router-dom";
export const PreviewProduct = (props) => {

  const location = useLocation();
  const [Price, setPrice] = useState(location.state.price);
  const [Count, setCount] = useState(1);
  const rateArray = Rating(location.state.rating.rate);

  const AddToCart = (element) => {
    props.AddToCartHandler({ state: { element } });
  };

  const RemoveItems = (element) => {
    props.RemoveToCartHandler({ state: element });
  };

  const getCountData=()=>{
    for (let i = 0; i < props.data.AddToCart.length; i++) {
      if (location.state.id === props.data.AddToCart[i].Cart.state.element.id) {
        setCount(props.data.AddToCart[i].Cart.state.count);
      }
    }
  
  }
   
useEffect(() => {
 getCountData()
}, [props])

  return (
    <>
      <div className=" d-flex" style={{ margin: "40px 150px 40px 150px" }}>
        <div className=" container m-0 w-25 shadow-sm rounded d-flex align-items-center">
          <img
            src={location.state.image}
            className="rounded"
            style={{ width: "-webkit-fill-available" }}
            alt=""
          />
        </div>
        <div className="ms-5">
          <div>
            <h3>{location.state.title}</h3>
            <h6>{location.state.category}</h6>
            <h5 className="mt-4">Product Description</h5>
            <p>
              {location.state.description}{" "}
              <span className="text-primary">Read More</span>
            </p>
          </div>
          <div className="d-flex justify-content-between">
            <div>
              <div className="d-flex justify-content-start">
                <h5 className="fs-6">
                  {rateArray.map((element, index) => {
                    return (
                      <i className={`  bi bi-star${element}`} key={index}></i>
                    );
                  })}
                </h5>{" "}
                <h6 className="text-warning ms-2" style={{ fontSize: "small" }}>
                  {" "}
                  {location.state.rating.count} Reviews{" "}
                </h6>
              </div>
              <span className="fs-3 fw-bold text-body-tertiary">
                <i className="bi bi-currency-rupee"></i>
                {location.state.price}
              </span>
              <span
                className="fst-italic text-body-tertiary fw-medium m-2"
                style={{ fontSize: "small" }}
              >
                Incl. of all taxes
              </span>
              <div className="d-flex mt-3">
                <div
                  className="border me-1 rounded d-flex align-items-center justify-content-center"
                  style={{ width: "100px", height: "100px" }}
                >
                  {" "}
                  <img
                    src={location.state.image}
                    style={{ width: "80px", height: "80px" }}
                    alt=""
                  />{" "}
                </div>
                <div
                  className="border me-1 rounded d-flex align-items-center justify-content-center"
                  style={{ width: "100px", height: "100px" }}
                >
                  {" "}
                  <img
                    src={location.state.image}
                    style={{ width: "80px", height: "80px" }}
                    alt=""
                  />{" "}
                </div>
                <div
                  className="border me-1 rounded d-flex align-items-center justify-content-center"
                  style={{ width: "100px", height: "100px" }}
                >
                  {" "}
                  <img
                    src={location.state.image}
                    style={{ width: "80px", height: "80px" }}
                    alt=""
                  />{" "}
                </div>
                <div
                  className="border me-1 rounded d-flex align-items-center justify-content-center"
                  style={{ width: "100px", height: "100px" }}
                >
                  {" "}
                  <img
                    src={location.state.image}
                    style={{ width: "80px", height: "80px" }}
                    alt=""
                  />{" "}
                </div>
              </div>
            </div>
            <div className="border rounded p-2 shadow-sm">
              <h5>
                <i className="bi bi-currency-rupee"></i>
                {Price*Count}
              </h5>
              <span
                className="fst-italic text-body-tertiary fw-medium m-2"
                style={{ fontSize: "small" }}
              >
                Inclusive of all taxes
              </span>
              <div className="mt-2 ">
                <div className="d-flex justify-content-start align-items-center">
                  <h5 className="fs-6">
                    {rateArray.map((element, index) => {
                      return (
                        <i className={`  bi bi-star${element}`} key={index}></i>
                      );
                    })}
                  </h5>{" "}
                  <h6
                    className="text-warning ms-2 "
                    style={{ fontSize: "small" }}
                  >
                    {" "}
                    {location.state.rating.count} Reviews{" "}
                  </h6>
                </div>
                <div className="d-flex mt-2">
                  <h5>Quantity :</h5>
                  <span className="mx-3">
                    <div className="border rounded d-flex align-items-center border-primary-subtle">
                      <span
                        className="btn btn-sm btn-primary rounded-end-0"
                        onClick={() => RemoveItems(location.state)}
                      >
                        <i className="bi bi-dash"></i>
                      </span>
                      <span className="px-3">{Count}</span>
                      <span
                        onClick={(e) => AddToCart(location.state)}
                        className="btn btn-sm btn-primary rounded-start-0"
                      >
                        <i className="bi bi-plus"></i>
                      </span>
                    </div>
                  </span>
                </div>
              </div>
              <div className="mt-3  d-grid">
                <button
                  className="btn btn-primary"
                  onClick={(e) => AddToCart(location.state)}
                >
                  <i className="bi bi-cart2"></i> Add To Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
