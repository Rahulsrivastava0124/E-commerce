import { Route } from "react-router-dom";
import Admin from "../Component/Admin/Admin";
import Admin_login_page from "../Component/Admin/Admin_login_page";
import AdminDashboard from "../Component/Admin/AdminDashboard";

export default [
  <Route
    path="/admin_login"
    element={<Admin_login_page />}
    key="Admin_login"
  />,
  <Route path="/admin/dashboard" element={<Admin />} key="Admin" />,
  <Route path="/admin/publish" element={<AdminDashboard />} key="AdminPublish" />,
];
