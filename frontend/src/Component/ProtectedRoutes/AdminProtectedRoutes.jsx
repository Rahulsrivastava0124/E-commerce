import React from 'react'
import { Navigate } from 'react-router-dom'
export default function AdminProtectedRoutes(props) {
    const { Component } = props;
    return (props.data.AdminLogin.AdminData ? <Component /> : <Navigate to="/Admin/Admin_login" />);
}
