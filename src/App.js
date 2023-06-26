import "./App.css";
import { Navbar } from "./Component/Navbar";
import { Home } from "./Component/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Deals from "./Component/Deals.jsx";
import Delivery from "./Component/Delivery.jsx";
import WhatsNew from "./Component/Whats_new.jsx";

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
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
