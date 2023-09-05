import React from "react";
import { useNavigate } from "react-router-dom";
import offers from "../../Svg/offers.svg";
import trackOrder from "../../Svg/trackOrder.svg";
import APPSTORE from "../../Svg/images/APPSTORE.webp";
import AppQRCode from "../../Svg/images/AppQRCode.webp";
import PLAYSTORE from "../../Svg/images/PLAYSTORE.webp";
import logo from "../../Svg/images/logo.png";
import NoItems from "../../Svg/GifImages/NoItems.gif";

const WishListCart = (props) => {
  console.log(props);
  const navigate = useNavigate();

  const RemoveToWishList = (Element) => {
    props.RemoveToWishListHandler({ state: Element });
  };

  const AddToCart = (element) => {
    console.log(element);
    props.AddToCartHandler({ state: { element } });
  };
  return (
    <>
      <div className="container d-flex mt-5 ">
        <div className=" p-3" style={{ width: "-webkit-fill-available" }}>
          <h2 className="mb-4">WishList</h2>
          {props.data.UserWish.length != 0 ? (
            props.data.UserWish.map((Element, index) => {
              return (
                <div
                  key={index}
                  className="container border rounded d-flex p-2 my-2 align-items-center"
                >
                  <img
                    src={Element.WishList.state.image}
                    style={{ width: "100px", height: "80px" }}
                    alt=""
                    onClick={() =>
                      navigate("/ProductPreview", {
                        state: Element.WishList.state,
                      })
                    }
                  />
                  <div className="d-flex mx-2 container justify-content-between align-items-center">
                    <div>
                      <h6>{Element.WishList.state.title.slice(0, 45)}...</h6>
                      <h6>
                        {Element.WishList.state.rating.rate}
                        <i class="bi bi-star ms-1"></i>
                        <span className="text-success ms-2">
                          {Element.WishList.state.rating.count}Reviews
                        </span>
                      </h6>
                      <span className="fw-bold fs-5 text-body-tertiary">
                        <i class="bi bi-currency-rupee"></i>
                        {Element.WishList.state.price}
                      </span>
                    </div>
                    <div className="d-flex">
                      <span
                        className="btn btn-primary me-2"
                        onClick={() => AddToCart(Element.WishList.state)}
                      >
                        <i class="bi bi-cart3 me-1"></i> Add to Cart
                      </span>
                      <span
                        className="btn btn-outline-danger"
                        onClick={() => RemoveToWishList(Element.WishList.state)}
                      >
                        <i className="bi bi-trash"></i>
                      </span>
                    </div>
                  </div>
                </div>
              );
            })
          ) : (
            <div className="text-center mt-5">
              <img
                src={NoItems}
                alt=""
                style={{ width: "100px" }}
                className="mb-3"
              />
              <h3>No Items is add in WishList </h3>
            </div>
          )}
        </div>
        <div className="border rounded  mt-5 p-4 bg-warning-subtle h-100">
          <div className="container text-center mt-4">
            <img
              src={logo}
              className="rounded"
              style={{ width: "150px", height: "100px" }}
              alt=""
            />

            <h1 className="fw-bold">
              <span className="text-primary ">On</span>
              <span className="text-warning ">Market</span>
            </h1>
          </div>
          <div className="d-flex mt-4 align-items-center">
            <img
              src={AppQRCode}
              alt=""
              style={{ width: "150px", height: "150px" }}
            />
            <div className="px-4 ">
              <h6 className="mb-3">
                Download the app to Track you Order and get
              </h6>
              <h6>notification on offers and delivery</h6>
              <div className="d-flex mt-3">
                <img src={PLAYSTORE} alt="" />
                <img src={APPSTORE} alt="" />
              </div>
            </div>
          </div>
          <div className="mt-3">
            <h5>Download Benefits</h5>
            <div className="d-flex justify-content-between align-items-center text-center">
              <div className="px-4">
                <img
                  src={trackOrder}
                  className=" mb-2"
                  style={{ width: "60px", height: "60px" }}
                  alt=""
                />
                <p>Get Exciting Offers</p>
              </div>
              <div className="px-4">
                <img
                  src={offers}
                  className=" mb-2"
                  style={{ width: "60px", height: "60px" }}
                  alt=""
                />
                <p> Easy To Track Orders</p>
              </div>
              <div className="px-4">
                <img
                  src={trackOrder}
                  className=" mb-2"
                  style={{ width: "60px", height: "60px" }}
                  alt=""
                />
                <p>Easy And Fast delivery</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WishListCart;
