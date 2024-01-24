import React from "react";
import { Navigate } from "react-router-dom";

export default function ProtectedComponent(props) {
  const { Component } = props;
  return (
      props.data.UserLogin.LoginData.state ?  <Component/>:<Navigate to="/"/>
  );
}
