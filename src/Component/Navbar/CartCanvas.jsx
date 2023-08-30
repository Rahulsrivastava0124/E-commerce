import React, { useState, useEffect } from "react";
import AddtoCart from "../../Svg/AddToCart.gif";
import { useNavigate } from "react-router-dom";

export const CartCanvas = (props) => {
  const navigate = useNavigate();
  let price = 0;
  const [ShippingCharge, setShippingCharge] = useState(40);
  useEffect(() => {
    if (price > 100) {
      setShippingCharge(0);
    }
  }, []);

  const RemoveItems = (element) => {
    props.RemoveToCartHandler({ state: element });
  };
  return (
    <>
      <div
        className="offcanvas offcanvas-end"
        tabIndex="-1"
        id="offcanvasRight"
        aria-labelledby="offcanvasRightLabel"
      >
        <div className="offcanvas-header pb-0">
          <h5
            className="offcanvas-title text-primary fw-bold"
            id="offcanvasRightLabel"
          >
            My Cart
          </h5>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <hr />
        <div className="offcanvas-body position-relative bg-body-tertiary">
          <h5>Order summary</h5>
          {props.data.AddToCart.map((element, index) => {
            price = price + element.Cart.state.price;
            return (
              <div
                className="d-flex bg-white mb-2 p-2 rounded shadow-sm align-items-center justify-content-between"
                key={index}
              >
                <img
                  src={element.Cart.state.image}
                  alt=""
                  style={{ width: "56px", height: "56px" }}
                  className="rounded"
                />
                <div>
                  <p className="mb-0">
                    {element.Cart.state.title.slice(0, 25)}
                  </p>
                  <p className="fw-bold">Rs.{element.Cart.state.price}</p>
                </div>
                <button className="btn" onClick={() => RemoveItems(element)}>
                  <i className="bi bi-trash3"></i>
                </button>
              </div>
            );
          })}

          {props.data.AddToCart.length === 0 ? (
            <div>
              <img src={AddtoCart} alt="CartImage" className="w-100" />
              <h4 className="fw-bold text-center">Your cart in empty</h4>
              <p>It's a good day to buy the items you saved for later</p>
              <div className="text-center">
                <button
                  className="btn btn-primary text-center"
                  onClick={() => navigate("/")}
                  data-bs-dismiss="offcanvas"
                >
                  Shop now
                </button>
              </div>
            </div>
          ) : (
            <>
              <div className=" ">
                <h5>Price Summary</h5>
                <ul className="list-group list-group-flush rounded">
                  <li className="list-group-item d-flex justify-content-between">
                    <p className="fw-normal mb-1">Order total</p>
                    <p className="mb-0">
                      <i className="bi bi-currency-rupee "></i>
                      {price.toFixed(2)}
                    </p>
                  </li>
                  <li className="list-group-item d-flex justify-content-between">
                    <p className="fw-normal mb-1">Shipping Charge</p>
                    <p className="mb-0">
                      <i className="bi bi-currency-rupee"></i>
                      {ShippingCharge === 0 ? (
                        <>
                          <span className="text-decoration-line-through">
                            40
                          </span>
                          <span className="text-success">Free</span>
                        </>
                      ) : (
                        ShippingCharge
                      )}
                    </p>
                  </li>
                  <li className="list-group-item  d-flex justify-content-between">
                    <p className="fw-normal mb-1">5% online payment discount</p>
                    <p className="mb-0 text-success">
                      -<i className="bi bi-currency-rupee "></i>
                      {(((price + ShippingCharge) / 100) * 5).toFixed(2)}
                    </p>
                  </li>
                  <li className="list-group-item  d-flex justify-content-between">
                    <p className="fw-bold mb-1">Grande total</p>
                    <p className="mb-0 fs-5 fw-bold">
                      <i className="bi bi-currency-rupee "></i>
                      {(
                        price +
                        ShippingCharge -
                        ((price + ShippingCharge) / 100) * 5
                      ).toFixed(2)}
                    </p>
                  </li>
                </ul>
              </div>
              <div className="rounded position-sticky bottom-0 bg-white d-flex container justify-content-between border-top pt-2 align-items-center mt-4">
                <div className="d-flex align-items-center">
                  <i className="bi bi-cart fs-4"></i>
                  <div>
                    {" "}
                    <p className="mb-0">{props.data.AddToCart.length} Items</p>
                    <h5 className="mb-0 fw-bold">
                      <i className="bi bi-currency-rupee"></i>
                      {(
                        price +
                        ShippingCharge -
                        ((price + ShippingCharge) / 100) * 5
                      ).toFixed(2)}
                    </h5>
                  </div>
                </div>
                <button
                  className="btn btn-primary"
                  onClick={() =>
                    navigate("CheckOut", {
                      state: { OrderData: props.data.AddToCart },
                    })
                  }
                  data-bs-dismiss="offcanvas"
                >
                  {" "}
                  Continue
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};
