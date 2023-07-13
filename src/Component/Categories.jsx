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
        {Array.isArray(ResData) ? (
          ResData.map((element, tabIndex) => {
            let Rating = Number.parseFloat(element.rating.rate).toFixed(0);
            {
              var rateArray = ["", "", "", "", ""];

              /* let RatingDecimaltoString = element.rating.rate.toString().slice();
            let RatingDecimal=Number.parseFloat(RatingDecimaltoString).toFixed(0) */
            }
            {
              /* console.log('====================================');
            console.log(RatingDecimal);
            console.log(RatingDecimaltoString);
            console.log('===================================='); */
            }

            for (let i = 0; i < Rating; i++) {
              rateArray[i] = "-fill";
            }
            {
              /* if (RatingDecimal === "1") {
              i++;
              rateArray[i] = "-half";
            } */
            }

            console.log("====================================");
            console.log(rateArray);
            console.log("====================================");
            return (
              <div
                className="card m-3 border-0 shadow-sm"
                style={{ width: "18rem" }}
                key={tabIndex}
              >
                <img
                  className="mx-auto pt-3 "
                  style={{ width: "250px", height: "200px" }}
                  src={element.image}
                  alt="image"
                />
                <div className="card-body">
                  <h5 className="card-title">{element.title.slice(0, 20)}</h5>
                  <p className="card-text">
                    {element.description.slice(0, 50)}
                  </p>
                  <div className="d-flex justify-content-between">
                    <h3 className="fw-bold text-primary">Rs.{element.price}</h3>
                    <h7 className="text-success"> Instock </h7>
                  </div>
                  <h6 className="text-decoration-line-through">
                    Rs.{element.price + 300}
                  </h6>
                  <h5>
                    {rateArray.map((element, index) => {
                      return (
                        <i className={`bi bi-star${element}`} key={index}></i>
                      );
                    })}
                    {/* <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-half"></i>
                    <i className="bi bi-star"></i>
                    <i className="bi bi-star"></i> */}
                  </h5>
                  <a href="/" className="btn btn-primary">
                    Add to cart
                  </a>
                  <button type="button" className="btn btn-info mx-2">
                    <i className="bi bi-heart-fill"></i>
                  </button>
                  <button type="button" className="btn btn-danger">
                    <i className="bi bi-eye-fill"></i>
                  </button>
                </div>
              </div>
            );
          })
        ) : (
          <h1>Loading</h1>
        )}
      </div>
    </>
  );
};
