import React from "react";
import BrandFeature from "../BrandFeature";
import logo from "../../Svg/images/logo.png";

const YourOrder = (props) => {
  console.log(props);
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  return (
    <>
      <div className="container d-flex mb-5 ">
        <div className="conatiner w-100 p-2 me-5">
          <h2>Your Orders </h2>
          <h6>
            Items{" "}
            <span className="text-warning">
              ({props.data.OrderData.length})
            </span>
          </h6>

          <div className="container ">
            {props.data.OrderData.length !== 0 ? (
              props.data.OrderData.map((element, index) => {
                let price = 0;
                element.OrderData.state.element.forEach((element) => {
                  price =
                    price +
                    element.Cart.state.element.price * element.Cart.state.count;
                });
                price >= 100 ? (price = price + 0) : (price = price + 40);
                return (
                  <div className="conatiner rounded border mt-3 " key={index}>
                    <div className="d-flex justify-content-between">
                      <div className="d-flex p-3 pb-0">
                        <h6 className="me-3">
                          <h6
                            style={{ fontSize: "smaller" }}
                            className="text-secondary"
                          >
                            {" "}
                            Order placed On{" "}
                          </h6>
                          <h6 className="fw-bold">
                            <span className="ms-1">
                              {months[element.OrderData.state.date.getMonth()]}
                            </span>
                            <span className="ms-1">
                              {element.OrderData.state.date.getDate()},
                            </span>
                            <span className="ms-1">
                              {element.OrderData.state.date.getFullYear()}
                            </span>
                          </h6>
                        </h6>
                        <h6 className="me-3">
                          <h6
                            style={{ fontSize: "smaller" }}
                            className="text-secondary"
                          >
                            {" "}
                            Total Price{" "}
                          </h6>
                          <h6 className="fw-bold">
                            {(price - ((price / 100) * 5).toFixed(2)).toFixed(
                              2
                            )}{" "}
                          </h6>
                        </h6>
                        <h6 className="ms-1">
                          <h6
                            style={{ fontSize: "smaller" }}
                            className="text-secondary"
                          >
                            {" "}
                            Ship To{" "}
                          </h6>
                          <h6 className="fw-bold">Rahul Srivastava </h6>
                        </h6>
                      </div>
                      <div className="p-3 pb-0">
                        <h6>
                          <h6
                            style={{ fontSize: "smaller" }}
                            className="text-secondary"
                          >
                            Order Id : {element.OrderData.state.orderId}{" "}
                          </h6>
                          <h6>
                            {" "}
                            Order Details{" "}
                            <i class="bi bi-arrow-right-short"></i>
                          </h6>
                        </h6>
                      </div>
                    </div>
                    <hr className="mt-0" />
                    <div className="d-flex align-items-center px-3">
                      <img
                        src={
                          element.OrderData.state.element[0].Cart.state.element
                            .image
                        }
                        style={{ width: "80px", height: "80px" }}
                        alt=""
                        className=""
                      />
                      <div className="ms-4">
                        <h6 style={{ fontSize: "smaller" }}>
                          {element.OrderData.state.element.length} Items
                        </h6>
                        <h6 style={{ fontSize: "smaller" }}>
                          Order Id:{element.OrderData.state.orderId}
                        </h6>
                        <h6>
                          {" "}
                          Order Succesfull delivered on{" "}
                          <span className="ms-1">
                            {months[element.OrderData.state.date.getMonth()]}
                          </span>
                          <span className="ms-1">
                            {element.OrderData.state.date.getDate()+5},
                          </span>
                          <span className="ms-1">
                            {element.OrderData.state.date.getFullYear()}
                          </span>{" "}
                        </h6>
                        <h6
                          style={{ fontSize: "smaller" }}
                          className="text-success"
                        >
                          Your Order is Successfully placed in your address
                        </h6>
                      </div>
                    </div>
                    <div className="d-flex align-items-center bg-body-secondary mt-2">
                      <img
                        src={logo}
                        style={{ width: "120px", height: "80px" }}
                        alt=""
                      />
                      <h6 className="text-secondary">
                        {" "}
                        Thanks for ordering Product In this Site
                      </h6>
                    </div>
                  </div>
                );
              })
            ) : (
              <div> No Order List Data</div>
            )}
          </div>
        </div>
        <div className="h-100 mt-5">
          <BrandFeature />
        </div>
      </div>
    </>
  );
};

export default YourOrder;
