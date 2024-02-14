import React from 'react'
import { Route } from 'react-router-dom'
// import Redux Container Components
import CategoriesContainer from "../containers/CategoriesContainer";
import HomeContainer from "../containers/HomeContainer";
import ProfileContainer from "../containers/ProfileContainer";
import SecurityContainer from "../containers/SecurityContainer";
import ProtectedComponentContainer from "../containers/ProtectedComponentContainer";
import UserAdressesContainer from "../containers/UserAdressesContainer";
import WishListContainer from "../containers/WishListContainer";
import CheckOutContainer from "../containers/CheckOutContainer";
import PreviewProductContainer from "../containers/PreviewProductContainer";
import YourOrderContainer from "../containers/UserYourOrderContainer";
// import App Components
import { Error404 } from "../Component/Error/404Error";
import ContactUs from "../Component/UserComponents/UserContactUs";
import OrderPlaced from '../Component/OrderPlaced'
import Main_Categories from '../Component/Categories/Main_Categories';

export default [
    <Route path="/" element={<HomeContainer />} key="home" />,
    <Route Path="*" element={<Error404 />} key="Error" />,
    <Route
        path="/Categories/men'sclothing"
        element={<CategoriesContainer link={"men's clothing"} key="Men" />}
    />,
    <Route
        path="/Categories/women'sclothing"
        element={<CategoriesContainer link={"women's clothing"} key="Women" />}
    />,
    <Route
        path="/Categories/electronics"
        element={<CategoriesContainer link={"electronics"} key="electronics" />}
    />,
    <Route
        path="/Categories/jewelery"
        element={<CategoriesContainer link={"jewelery"} key="jewelery" />}
    />,
    <Route path="/Profile" element={<ProfileContainer />} key="profile">
        <Route
            path="Security"
            element={
                <ProtectedComponentContainer Component={SecurityContainer} key="security" />
            }
        />
        <Route
            path="ContactUs"
            element={< ContactUs />}
            key="contacts" />
    </Route>,
    <Route
        path="/profile/Addresses"
        element={
            <ProtectedComponentContainer
                Component={UserAdressesContainer}
            />
        }
        key="Address" />,
    <Route path="/WishList" element={<WishListContainer />} key="wishlist" />,
    <Route path="/Profile/YourOrder" element={<ProtectedComponentContainer Component={YourOrderContainer} />} key="yourOrder" />,
    <Route path='/CheckOut' element={<CheckOutContainer />} key="checkout" />,
    <Route path='/ProductPreview' element={<PreviewProductContainer />} key="productpreview" />,
    <Route path="/CheckOut/OrderPlaced" element={<ProtectedComponentContainer Component={OrderPlaced} key="orderPlaced" />} key="orderplaced" />,
    <Route path='/Categories' element={<Main_Categories />} key="Categoties" />
]