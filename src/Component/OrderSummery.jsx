import React, { useState, useEffect } from "react";
import AddtoCart from "../Svg/AddToCart.gif";

export default function OrderSummery(props) {
  const [Count, setCount] = useState(0);
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

  const AddToCartfun = (element) => {
    props.AddToCartHandler({ state: { element } });
  };

  return (
    <div>
      <h5>Order summary</h5>
      {props.element.map((element, index) => {
        price = price + element.Cart.state.element.price*element.Cart.state.count;
        return (
          <div
            className="d-flex bg-white mb-2 p-2 rounded shadow-sm align-items-center justify-content-between"
            key={index}
          >
            <div className="d-flex align-items-center ">
              <img
                src={element.Cart.state.element.image}
                alt=""
                style={{ width: "56px", height: "56px" }}
                className="rounded"
              />
              <div className="mx-2">
                <p className="mb-0">
                  {element.Cart.state.element.title.slice(0, 25)}
                </p>
                <p className="fw-bold">
                  <i className="bi bi-currency-rupee"></i>
                  {element.Cart.state.element.price}
                </p>
              </div>
            </div>
            <div className="border rounded d-flex align-items-center border-primary-subtle">
              <span className="btn btn-sm btn-primary rounded-end-0" onClick={() => RemoveItems(element.Cart.state.element)}>
                <i class="bi bi-dash"></i>
              </span>
              <span className="px-3">{element.Cart.state.count}</span>
              <span
                onClick={(e) => AddToCartfun(element.Cart.state.element)}
                className="btn btn-sm btn-primary rounded-start-0"
              >
                <i class="bi bi-plus"></i>
              </span>
            </div>
          </div>
        );
      })}
      {props.element.length === 0 ? (
        <div className="text-center">
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
                      <span className="text-decoration-line-through">40</span>
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
          <div className="rounded position-sticky bottom-0 bg-white container  border-top pt-2  mt-4 mb-2">
            <div className="d-flex  justify-content-between align-items-center ">
              <div className="d-flex align-items-center">
                <i className="bi bi-cart fs-3"></i>
                <p className="mb-0 mx-2">{props.element.length} Items</p>
              </div>
              <div>
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
          </div>
        </>
      )}
    </div>
  );
}
