import React, { useState, useEffect } from "react";
import afternoon from "../../Svg/images/afternoon.png";
import evening from "../../Svg/images/evening.png";
import morning from "../../Svg/images/morning.png";
import night from "../../Svg/images/night.png";
import productIcon from "../../Svg/GifImages/productIcon.gif";
import cartIcon from "../../Svg/GifImages/cartIcon.gif";
import contactIcon from "../../Svg/GifImages/contactIcon.gif";
import locationIcon from "../../Svg/GifImages/locationIcon.gif";
import lockIcon from "../../Svg/GifImages/lockIcon.gif";
import avatar from "../../Svg/GifImages/avatar.gif";
import { Link, Outlet, useLocation } from "react-router-dom";
import Toasts from "../Toasts";
import { useNavigate } from "react-router-dom";
import NavbarContainer from "../../containers/NavbarContainer";
import Footer from '../Footer/Footer'

export const Profile = (props) => {
  const nevigate = useNavigate();
  const location = useLocation();
  const [GreetingMessege, setGreetingMessege] = useState({
    message: "",
    icon: ``,
  });

  useEffect(() => {
    const Greeting = () => {
      let hour = new Date().getHours();
      if (hour > 0 && hour < 12) {
        setGreetingMessege({
          ...GreetingMessege,
          message: "Good Morning",
          icon: morning,
        });
      } else if (hour >= 12 && hour < 16) {
        setGreetingMessege({
          ...GreetingMessege,
          message: "Good Afternoon",
          icon: afternoon,
        });
      } else if (hour >= 16 && hour < 19) {
        setGreetingMessege({
          ...GreetingMessege,
          message: "Good Evening",
          icon: evening,
        });
      } else {
        setGreetingMessege({
          ...GreetingMessege,
          message: "Good Night",
          icon: night,
        });
      }
    };

    Greeting();
  }, []);

  const ClickedCard = (e) => { };

  const Card_Array = [
    {
      cardHeading: "Your orders",
      cardTitle: "Track,return,or buy Things again",
      CardIcon: productIcon,
      Link: "YourOrder",
    },
    {
      cardHeading: "Login & Security",
      cardTitle: "Edit name,and mobile number",
      CardIcon: lockIcon,
      Link: "Security",
    },
    {
      cardHeading: "Your Addresses",
      cardTitle: "Edit addresses for orders and gifts",
      CardIcon: locationIcon,
      Link: "Addresses",
    },
    {
      cardHeading: "Contact us",
      cardTitle: "helping for contact and messages",
      CardIcon: contactIcon,
      Link: "ContactUs",
    },
    {
      cardHeading: "Wishlist",
      cardTitle: "Your WishList items and Cart Items",
      CardIcon: cartIcon,
      Link: "/WishList",
    },
  ];

  const LogOutUser = () => {
    const initialState = {};
    props.UserLogOutHandler(initialState);
    localStorage.removeItem('Token')
    nevigate("/");
  };

  return (
    <>
    <NavbarContainer/>
      <Toasts Toastsdata={location.state} />
      <div className="container mt-2">
        <h2 className="text-center">User Profile</h2>
        <hr />
        <div className="d-flex justify-content-between align-items-center">
          <div>
            <h2 className="text-primary">
              Hello{" "}
              {Object.keys(props.data.UserLogin.LoginData).length !== 0
                ? props.data.UserLogin.LoginData.state.username
                : "Geast"}
            </h2>
            <p className="text-warning">
              {GreetingMessege.message}
              <img
                className="mx-1"
                style={{ width: "60px" }}
                src={GreetingMessege.icon}
                alt={GreetingMessege.message}
              />
            </p>
          </div>
          <div
            style={{ width: "150px", height: "150px" }}
            className="border rounded-circle"
          >
            <img src={avatar} style={{ width: "inherit" }} alt="userProfile" />
          </div>
        </div>

        {/* user Options card for settings */}

        <div className="d-flex flex-wrap mt-4 ">
          {Card_Array.map((element, index) => {
            return (
              <Link
                to={element.Link === "Cart" ? "/Cart" : element.Link}
                key={index}
                className="text-decoration-none text-dark"
              >
                <div
                  className="border shadow m-2 p-4 rounded-4 cardScale"
                  style={{ width: "300px", height: "172px" }}
                  onClick={(e) => ClickedCard(e)}
                >
                  <div>
                    <img src={element.CardIcon} alt="CardImage" />
                  </div>
                  <div>
                    <h5>{element.cardHeading}</h5>
                    <p>{element.cardTitle}</p>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
        <div className="text-end">
          <button className="btn btn-danger " onClick={() => LogOutUser()}>
            Logout
          </button>
        </div>
      </div>
      <Outlet />
      <Footer/>
    </>
  );
};
