import React from "react";

export default function (props) {
  return (
    <>
      <div
        class={`toast align-items-center overflow-auto m-auto text-bg-${props.Toastsdata.info.color} border-0 ${props.Toastsdata.state}`}
        role="alert"
        aria-live="assertive"
        aria-atomic="true"
      >
        <div class="d-flex">
          <div class="toast-body">{props.Toastsdata.info.message}</div>
          <button
            type="button"
            class="btn-close btn-close-white me-2 m-auto"
            data-bs-dismiss="toast"
            aria-label="Close"
          ></button>
        </div>
      </div>
    </>
  );
}
