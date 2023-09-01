import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
export const PreviewProduct = (props) => {
  const navigate = useNavigate();
  console.log(props);
  const location = useLocation();
  console.log(location);
  return (
    <>
      <span>{location.state.id}</span>
      <h5>{location.state.title}</h5>
      <button
        className="btn btn-primary"
        onClick={() =>
          navigate("/CheckOut", {
            state: [
              {
                Cart: {
                  state: location.state,
                },
              },
            ],
          })
        }
      >
        buy now
      </button>
    </>
  );
};
