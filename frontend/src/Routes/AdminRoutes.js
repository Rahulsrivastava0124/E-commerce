import React, { Suspense } from "react";
import { Route } from "react-router-dom";

// Lazy load admin components
const Admin = React.lazy(() => import("../Component/Admin/Admin"));
const Admin_login_page = React.lazy(() => import("../Component/Admin/Admin_login_page"));

// Loading component
const AdminLoader = () => (
  <div className="d-flex justify-content-center align-items-center" style={{height: '100vh'}}>
    <div className="spinner-border text-primary" role="status">
      <span className="visually-hidden">Loading Admin...</span>
    </div>
  </div>
);

const AdminRoutes = [
  <Route key="admin-login" path="/admin" element={
    <Suspense fallback={<AdminLoader />}>
      <Admin_login_page />
    </Suspense>
  } />,
  <Route key="admin-dashboard" path="/admin/dashboard" element={
    <Suspense fallback={<AdminLoader />}>
      <Admin />
    </Suspense>
  } />,
];

export default AdminRoutes;
