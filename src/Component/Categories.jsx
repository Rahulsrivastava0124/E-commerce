import React, { useState, useEffect } from "react";
import CardPlaceHolder from "../Component/CardPlaceHolder";
import ProductCardContainer from "../containers/ProductCardContainer.js";

export const Categories = (props) => {
  const [ResData, setResData] = useState("");
  const FetchProductAPI = (data) => {
    fetch(`https://fakestoreapi.com/products/category/${data}`)
      .then((res) => res.json())
      .then((json) => {
        setResData(json);
      });
  };

  useEffect(() => {
    console.log("Categories", props);
    FetchProductAPI(props.link);
  }, [props]);

  return (
    <>
      <h3 className="fw-bolder text-center">
        {" "}
        {props.link ? props.link : null}{" "}
      </h3>
      <div className="container d-flex flex-wrap">
        {Array.isArray(ResData) ? (
          ResData.map((element, tabIndex) => {
            return (
              <ProductCardContainer
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
    </>
  );
};
