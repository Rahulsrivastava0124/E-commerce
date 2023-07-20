import React from "react";

export const PreviewProduct = (props) => {
  return (
    <>
      <div
        className="modal fade"
        id="productPreviewModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                {props.data.title}
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <div className="container">
                <img src={props.data.image} alt=" Productimage  " />
              </div>
            </div>
            <div className="modal-footer">
              <button className="btn btn-warning" type="button">
                Add to Cart
              </button>
              <button className="btn btn-primary" type="button">
                Buy Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
