import React, { useState, useEffect } from "react";
import afternoon from "../Svg/images/afternoon.png";
import evening from "../Svg/images/evening.png";
import morning from "../Svg/images/morning.png";
import night from "../Svg/images/night.png";
import productIcon from "../Svg/GifImages/productIcon.gif";
import cartIcon from "../Svg/GifImages/cartIcon.gif";
import contactIcon from "../Svg/GifImages/contactIcon.gif";
import locationIcon from "../Svg/GifImages/locationIcon.gif";
import lockIcon from "../Svg/GifImages/lockIcon.gif";
import paymentIcon from "../Svg/GifImages/paymentIcon.gif";
import avatar from "../Svg/GifImages/avatar.gif";

export const Profile = (props) => {
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
  },[]);

  const Card_Array = [
    {
      cardHeading: "Your orders",
      cardTitle: "Track,return,or buy Things again",
      CardIcon: productIcon,
    },
    {
      cardHeading: "Login & Security",
      cardTitle: "Edit name,and mobile number",
      CardIcon: lockIcon,
    },
    {
      cardHeading: "Your Addresses",
      cardTitle: "Edit addresses for orders and gifts",
      CardIcon: locationIcon,
    },
    {
      cardHeading: "Payment options",
      cardTitle: "Edit or add payment methods",
      CardIcon: paymentIcon,
    },
    {
      cardHeading: "Contact us",
      cardTitle: "helping for contact amd messages",
      CardIcon: contactIcon,
    },
    {
      cardHeading: "Wishlist & Cart",
      cardTitle: "Your WishList items and Cart Items",
      CardIcon: cartIcon,
    },
  ];

  return (
    <>
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
                style={{ width: "30px" }}
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
              <div
                className="border shadow m-2 p-4 rounded-4 cardScale"
                style={{ width: "300px" }}
                key={index}
                d-flex
              >
                <div>
                  <img src={element.CardIcon} alt="CardImage" />
                </div>
                <div>
                  <h5>{element.cardHeading}</h5>
                  <p>{element.cardTitle}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};
