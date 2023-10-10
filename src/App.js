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
import WishListContainer from "./containers/WishListContainer";
import CheckOutContainer from "./containers/CheckOutContainer";
import PreviewProductContainer from "./containers/PreviewProductContainer";
import YourOrderContainer from "./containers/UserYourOrderContainer";


// import App Components
import { Error404 } from "./Component/Error/404Error";
import Footer from "./Component/Footer/Footer";
import ContactUs from "./Component/UserComponents/UserContactUs";
import OrderPlaced from './Component/OrderPlaced'
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavbarContainer />
        <Routes>
          <Route path="/E-commerce" element={<HomeContainer />} />
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
              path="Addresses"
              element={
                <ProtectedComponentContainer
                  Component={UserAdressesContainer}
                />
              }
            />

            <Route
              path="ContactUs"
              element={< ContactUs />}
            />
          </Route>
          <Route path="WishList" element={<WishListContainer />} />
          <Route path="/Profile/YourOrder" element={<ProtectedComponentContainer Component={YourOrderContainer} />} />
          <Route path='CheckOut' element={<CheckOutContainer />} />
          <Route path='ProductPreview' element={<PreviewProductContainer />} />
          <Route path="/CheckOut/OrderPlaced" element={<ProtectedComponentContainer Component={OrderPlaced }/>} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
