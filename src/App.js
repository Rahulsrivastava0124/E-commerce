import "./App.css";
import { Home } from "./Component/Home";
import NavbarContainer from "./containers/NavbarContainer";
import CategoriesContainer from "./containers/CategoriesContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Deals from "./Component/Deals.jsx";
import Delivery from "./Component/Delivery.jsx";
import WhatsNew from "./Component/Whats_new.jsx";
import { Error404 } from "./Component/404Error.jsx";
import { Profile } from "./Component/Profile.jsx";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavbarContainer />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/deals" element={<Deals />} />
          <Route path="/delivery" element={<Delivery />} />
          <Route path="/whatsnew" element={<WhatsNew />} />
          <Route Path="/*" element={<Error404 />} />
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
          <Route path="/Profile" element={<Profile/>} />
        </Routes>
        {/* <CategoriesContainer /> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
