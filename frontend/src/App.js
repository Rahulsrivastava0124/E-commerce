import { BrowserRouter, Routes, Route } from "react-router-dom";

// import css in app Component
import "./css/App.css";
import './css/Responsive.css'
// import Redux Container Components
import NavbarContainer from "./containers/NavbarContainer";
import CategoriesContainer from "./containers/CategoriesContainer";
import HomeContainer from "./containers/HomeContainer";
import ProfileContainer from "./containers/ProfileContainer";
import SecurityContainer from "./containers/SecurityContainer";
import ProtectedComponentContainer from "./containers/ProtectedComponentContainer";
import UserAdressesContainer from "./containers/UserAdressesContainer";
import WishListContainer from "./containers/WishListContainer";
import CheckOutContainer from "./containers/CheckOutContainer";
import PreviewProductContainer from "./containers/PreviewProductContainer";
import YourOrderContainer from "./containers/UserYourOrderContainer";

// import App Components
import { Error404 } from "./Component/Error/404Error";
import Footer from "./Component/Footer/Footer";
import ContactUs from "./Component/UserComponents/UserContactUs";
import OrderPlaced from './Component/OrderPlaced'

import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Admin_login_page from "./Component/Admin/Admin_login_page";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ToastContainer
          position="top-center"
          autoClose={5000}
          hideProgressBar
          newestOnTop
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="colored"
          stacked
        />
        <NavbarContainer />
        <Routes>
          <Route path="/" element={<HomeContainer />} />
          <Route Path="*" element={<Error404 />} />
          <Route
            path="/Categories/men'sclothing"
            element={<CategoriesContainer link={"men's clothing"} />}
          />
          <Route
            path="/Categories/women'sclothing"
            element={<CategoriesContainer link={"women's clothing"} />}
          />
          <Route
            path="/Categories/electronics"
            element={<CategoriesContainer link={"electronics"} />}
          />
          <Route
            path="/Categories/jewelery"
            element={<CategoriesContainer link={"jewelery"} />}
          />
          <Route path="/Profile" element={<ProfileContainer />}>
            <Route
              path="Security"
              element={
                <ProtectedComponentContainer Component={SecurityContainer} />
              }
            />
            <Route
              path="ContactUs"
              element={< ContactUs />}
            />
          </Route>
          <Route
            path="/profile/Addresses"
            element={
              <ProtectedComponentContainer
                Component={UserAdressesContainer}
              />
            }
          />
          <Route path="WishList" element={<WishListContainer />} />
          <Route path="/Profile/YourOrder" element={<ProtectedComponentContainer Component={YourOrderContainer} />} />
          <Route path='/CheckOut' element={<CheckOutContainer />} />
          <Route path='ProductPreview' element={<PreviewProductContainer />} />
          <Route path="/CheckOut/OrderPlaced" element={<ProtectedComponentContainer Component={OrderPlaced} />} />
          <Route path="/Admin/Admin_login" element={<Admin_login_page/>} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
