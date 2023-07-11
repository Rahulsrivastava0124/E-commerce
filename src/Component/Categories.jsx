import React, { useState, useEffect } from "react";

export const Categories = (props) => {
  const [ResData, setResData] = useState("");

  const FetchProductAPI = (data) => {
    fetch(`https://fakestoreapi.com/products/category/${data}`)
      .then((res) => res.json())
      .then((json) => {
        console.log(json);
        setResData(json);
      });
  };
  useEffect(() => {
    FetchProductAPI(props.data);
  }, [props.data]);

  console.log(ResData);

  return (
    <>
      <h3 className="fw-bolder text-center">
        {" "}
        {props.data ? props.data : null}{" "}
      </h3>
      <div className="container d-flex flex-wrap">
        {Array.isArray(ResData)
          ? ResData.map((element, tabIndex) => {
              return (
                <div
                  className="card m-2"
                  style={{ width: "18rem" }}
                  key={tabIndex}
                >
                  <img
                    src={element.image}
                    className="card-img-top m-2"
                    alt="..."
                    style={{ width: "250px", height: " 250px" }}
                  />
                  <div className="card-body">
                    <h5 className="card-title">{element.title}</h5>
                    <p className="card-text">{element.description}</p>
                    <h5> Rs.{element.price} </h5>
                    <a href="/" className="btn btn-primary">
                      Buy
                    </a>
                  </div>
                </div>
              );
            })
          : null}
      </div>
    </>
  );
};
