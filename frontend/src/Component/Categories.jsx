import React, { useState, useEffect } from "react";
import CardPlaceHolder from "../Component/LoadingStructer/CardPlaceHolder";
import ProductCardContainer from "../containers/ProductCardContainer.js";
import NavbarContainer from "../containers/NavbarContainer.js";
import Footer from "./Footer/Footer.jsx";

export const Categories = (props) => {
  const [ProductpreviewData, setProductpreviewData] = useState(" ");
  const [Loading, setLoading] = useState(true);
  const [ResData, setResData] = useState("");
  const FetchProductAPI = (data) => {
    fetch(`https://fakestoreapi.com/products/category/${data}`)
      .then((res) => res.json())
      .then((json) => {
        setResData(json);
        setLoading(false);
      });
  };

  useEffect(() => {
    FetchProductAPI(props.link);
    setLoading(true);
  }, [props.link]);

  return (
    <>
      <NavbarContainer />
      <h3 className="fw-bolder text-center text-capitalize my-4">
        {" "}
        {props.link ? props.link : null}
        {""}
      </h3>
      <div className="container d-flex flex-wrap">
        {Loading === false ? (
          ResData.map((element, tabIndex) => {
            return (
              <ProductCardContainer
                setProductpreviewData={setProductpreviewData}
                element={element}
                tabIndex={tabIndex}
                link={props.link}
                key={tabIndex}
              />
            );
          })
        ) : (
          <CardPlaceHolder />
        )}
      </div>
      <Footer />
    </>
  );
};
