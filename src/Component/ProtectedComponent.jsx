import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function ProtectedComponent(props) {
  const { Component } = props;
  const navigate = useNavigate();
  useEffect(() => {
    if (Object.keys(props.data.UserLogin.LoginData).length === 0) {
      console.log("done");
      navigate("/");
    }
  }, []);

  return (
    <>
      <Component />
    </>
  );
}
