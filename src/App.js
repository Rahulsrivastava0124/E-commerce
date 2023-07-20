import "./App.css";
import { Home } from "./Component/Home";
import NavbarContainer from "./containers/NavbarContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Deals from "./Component/Deals.jsx";
import Delivery from "./Component/Delivery.jsx";
import WhatsNew from "./Component/Whats_new.jsx";
import { Categories } from "./Component/Categories.jsx";
import { Error404 } from "./Component/404Error.jsx";
// eslint-disable-next-line no-unused-vars

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
            element={<Categories data={"men's clothing"} />}
          />
          <Route
            path="/Categories/women'sclothing"
            element={<Categories data={"women's clothing"} />}
          />
          <Route
            path="/Categories/electronics"
            element={<Categories data={"electronics"} />}
          />
          <Route
            path="/Categories/jewelery"
            element={<Categories data={"jewelery"} />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
