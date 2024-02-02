import { BrowserRouter, Routes } from "react-router-dom";
// import css in app Component
import "./css/App.css";
import './css/Responsive.css'
import UserRoutes from './Routes/UserRoutes'
import AdminRoutes from './Routes/AdminRoutes'
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

function App(props) {
  console.log(props);
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

        <Routes>
          {UserRoutes},
          {AdminRoutes}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
