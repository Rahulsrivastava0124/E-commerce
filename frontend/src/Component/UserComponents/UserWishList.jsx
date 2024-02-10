import React from "react";
import { useNavigate } from "react-router-dom";
import BrandFeature from "../BrandFeature";
import NoItems from "../../Svg/GifImages/NoItems.gif";
import NavbarContainer from "../../containers/NavbarContainer";
import Footer from "../Footer/Footer";

const WishListCart = (props) => {
  const navigate = useNavigate();
  const RemoveToWishList = (element) => {
    props.RemoveToWishListHandler({ state: {element} });
  };

  const AddToCart = (element) => {
    props.AddToCartHandler({ state: { element } });
  };
  return (
    <>
      <NavbarContainer />
      <div className="container d-flex mt-5 ">
        <div className=" p-3" style={{ width: "-webkit-fill-available" }}>
          <h2 className="mb-4">WishList</h2>
          <h5 className=" fw-bold">Items <span className="fw-bold text-warning">({props.data.UserWish.length})</span> </h5>
          {props.data.UserWish.length != 0 ? (
            props.data.UserWish.map((Element, index) => {
              return (
                <div
                  key={index}
                  className="container border rounded d-flex p-2 my-2 align-items-center"
                >
                  <img
                    src={Element.WishList.state.element.image}
                    style={{ width: "100px", height: "80px" }}
                    alt=""
                    onClick={() =>
                      navigate("/ProductPreview", {
                        state: Element.WishList.state.element,
                      })
                    }
                  />
                  <div className="d-flex mx-2 container justify-content-between align-items-center">
                    <div>
                      <h6>{Element.WishList.state.element.title.slice(0, 45)}...</h6>
                      <h6>
                        {Element.WishList.state.element.rating.rate}
                        <i className="bi bi-star ms-1"></i>
                        <span className="text-success ms-2">
                          {Element.WishList.state.element.rating.count}Reviews
                        </span>
                      </h6>
                      <span className="fw-bold fs-5 text-body-tertiary">
                        <i className="bi bi-currency-rupee"></i>
                        {Element.WishList.state.element.price}
                      </span>
                    </div>
                    <div className="d-flex">
                      <span
                        className="btn btn-primary me-2"
                        onClick={() => AddToCart(Element.WishList.state.element)}
                      >
                        <i className="bi bi-cart3 me-1"></i> Add to Cart
                      </span>
                      <span
                        className="btn btn-outline-danger"
                        onClick={() => RemoveToWishList(Element.WishList.state.element)}
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
        <BrandFeature />
      </div>
      <Footer />
    </>
  );
};

export default WishListCart;
