import "./App.css";
import { Navbar } from "./Component/Navbar";
import { Home } from "./Component/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Deals from "./Component/Deals.jsx";
import Delivery from "./Component/Delivery.jsx";
import WhatsNew from "./Component/Whats_new.jsx";
import { Categories } from "./Component/Categories.jsx";
import { Error404 } from "./Component/404Error.jsx";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar User="Geast" />
        <h1>
          {" "}
          hello friend this is my E-commerce react project starting in today{" "}
        </h1>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/deals" element={<Deals />} />
          <Route path="/delivery" element={<Delivery />} />
          <Route path="/whatsnew" element={<WhatsNew />} />
          <Route Path="/*" element={<Error404 />} />
          <Route
            path="/Categories/Laptops&Desktops"
            element={<Categories data={"Laptops&Desktops"} />}
          />
          <Route
            path="/Categories/Mobiles&Tablets"
            element={<Categories data={"Mobiles&Tablets"} />}
          />
          <Route
            path="/Categories/Watches"
            element={<Categories data={"electronics"} />}
          />
          <Route
            path="/Categories/TV&Applications"
            element={<Categories data={"TV&Applications"} />}
          />
          <Route
            path="/Categories/Home&Kitchen"
            element={<Categories data={"Home&Kitchen"} />}
          />
          <Route
            path="/Categories/Fashion"
            element={<Categories data={"Fashion"} />}
          />
          <Route
            path="/Categories/Beauty"
            element={<Categories data={"Beauty"} />}
          />
          <Route
            path="/Categories/Grocery"
            element={<Categories data={"Grocery"} />}
          />
          <Route
            path="/Categories/Gifts"
            element={<Categories data={"Gifts"} />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
