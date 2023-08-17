import React, { useEffect } from "react";

export default function (props) {
  useEffect(() => {
    props.Toastsdata
      ? setTimeout(() => {
          document.querySelector(".show") === null
            ? document.querySelector(".show").classList.remove("show")
            : null;
        }, 10)
      : null;
  });

  return (
    <>
      <div
        className={`toast align-items-center overflow-auto m-auto text-bg-${
          props.Toastsdata ? props.Toastsdata.info.color : null
        } border-0 ${props.Toastsdata ? props.Toastsdata.state : null}`}
        role="alert"
        aria-live="assertive"
        aria-atomic="true"
      >
        <div className="d-flex">
          <div className="toast-body">
            {props.Toastsdata ? props.Toastsdata.info.message : null}
          </div>
          <button
            type="button"
            className="btn-close btn-close-white me-2 m-auto"
            data-bs-dismiss="toast"
            aria-label="Close"
          ></button>
        </div>
      </div>
    </>
  );
}
