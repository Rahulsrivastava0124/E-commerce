import React from "react";
import { useLocation } from "react-router-dom";

const YourOrder = () => {
  const location = useLocation();
  console.log(location.state.OrderData);
  return(
    <>
    
    </>
  )

};

export default YourOrder;
