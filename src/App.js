import { BrowserRouter, Routes, Route } from "react-router-dom";

// import css in app Component
import "./App.css";

// import Redux Container Components
import NavbarContainer from "./containers/NavbarContainer";
import CategoriesContainer from "./containers/CategoriesContainer";
import HomeContainer from "./containers/HomeContainer";
import ProfileContainer from "./containers/ProfileContainer";
import SecurityContainer from "./containers/SecurityContainer";
import ProtectedComponentContainer from "./containers/ProtectedComponentContainer";
import UserAdressesContainer from "./containers/UserAdressesContainer";

// import App Components
import Deals from "./Component/Deals.jsx";
import Delivery from "./Component/Delivery.jsx";
import WishList from "./Component/WishList.jsx";
import { Error404 } from "./Component/404Error.jsx";
import Footer from "./Component/Footer.jsx";
import Addresses from "./Component/UserAddresses.jsx";
import ContactUs from "./Component/UserContactUs.jsx";
import PaymentOptions from "./Component/PaymentOptions.jsx";
import YourOrder from "./Component/UserYourOrder.jsx";
import CartAndWishList from "./Component/UserCartAndWishList.jsx";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavbarContainer />
        <Routes>
          <Route path="/" element={<HomeContainer />} />
          <Route path="/deals" element={<Deals />} />
          <Route path="/delivery" element={<Delivery />} />
          <Route path="/WishList" element={<WishList />} />
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
          <Route
            path="/Profile"
            element={
              <ProtectedComponentContainer Component={ProfileContainer} />
            }
          >
            <Route path="Security" element={<SecurityContainer />} />
            <Route path="Addresses" element={<UserAdressesContainer />} />
            <Route path="Cart" element={<CartAndWishList />} />
            <Route path="PaymentOptions" element={<PaymentOptions />} />
            <Route path="YourOrder" element={<YourOrder />} />
            <Route path="ContactUs" element={<ContactUs />} />
          </Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
