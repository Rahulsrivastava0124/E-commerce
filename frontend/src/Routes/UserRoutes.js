import React, { Suspense } from "react";
import { Route } from "react-router-dom";

// Lazy load components for better performance
const CategoriesContainer = React.lazy(() => import("../containers/CategoriesContainer"));
const HomeContainer = React.lazy(() => import("../containers/HomeContainer"));
const ProfileContainer = React.lazy(() => import("../containers/ProfileContainer"));
const SecurityContainer = React.lazy(() => import("../containers/SecurityContainer"));
const ProtectedComponentContainer = React.lazy(() => import("../containers/ProtectedComponentContainer"));
const UserAdressesContainer = React.lazy(() => import("../containers/UserAdressesContainer"));
const WishListContainer = React.lazy(() => import("../containers/WishListContainer"));
const CheckOutContainer = React.lazy(() => import("../containers/CheckOutContainer"));
const PreviewProductContainer = React.lazy(() => import("../containers/PreviewProductContainer"));
const YourOrderContainer = React.lazy(() => import("../containers/UserYourOrderContainer"));
const Error404 = React.lazy(() => import("../Component/Error/404Error"));
const ContactUs = React.lazy(() => import("../Component/UserComponents/UserContactUs"));
const OrderPlaced = React.lazy(() => import("../Component/OrderPlaced"));
const Main_Categories = React.lazy(() => import("../Component/Categories/Main_Categories"));

// Loading component
const ComponentLoader = () => (
  <div className="d-flex justify-content-center p-4">
    <div className="spinner-border text-primary" role="status">
      <span className="visually-hidden">Loading...</span>
    </div>
  </div>
);

const UserRoutes = [
  <Route key="home" path="/" element={
    <Suspense fallback={<ComponentLoader />}>
      <HomeContainer />
    </Suspense>
  } />,
  <Route key="categories" path="/categories" element={
    <Suspense fallback={<ComponentLoader />}>
      <CategoriesContainer />
    </Suspense>
  } />,
  <Route key="main-categories" path="/main_categories" element={
    <Suspense fallback={<ComponentLoader />}>
      <Main_Categories />
    </Suspense>
  } />,
  <Route key="protected" path="/user" element={
    <Suspense fallback={<ComponentLoader />}>
      <ProtectedComponentContainer />
    </Suspense>
  }>
    <Route path="profile" element={
      <Suspense fallback={<ComponentLoader />}>
        <ProfileContainer />
      </Suspense>
    } />
    <Route path="security" element={
      <Suspense fallback={<ComponentLoader />}>
        <SecurityContainer />
      </Suspense>
    } />
    <Route path="addresses" element={
      <Suspense fallback={<ComponentLoader />}>
        <UserAdressesContainer />
      </Suspense>
    } />
    <Route path="wishlist" element={
      <Suspense fallback={<ComponentLoader />}>
        <WishListContainer />
      </Suspense>
    } />
    <Route path="your-order" element={
      <Suspense fallback={<ComponentLoader />}>
        <YourOrderContainer />
      </Suspense>
    } />
    <Route path="contact-us" element={
      <Suspense fallback={<ComponentLoader />}>
        <ContactUs />
      </Suspense>
    } />
  </Route>,
  <Route key="checkout" path="/checkout" element={
    <Suspense fallback={<ComponentLoader />}>
      <CheckOutContainer />
    </Suspense>
  } />,
  <Route key="preview" path="/preview/:productId" element={
    <Suspense fallback={<ComponentLoader />}>
      <PreviewProductContainer />
    </Suspense>
  } />,
  <Route key="order-placed" path="/order-placed" element={
    <Suspense fallback={<ComponentLoader />}>
      <OrderPlaced />
    </Suspense>
  } />,
  <Route key="404" path="*" element={
    <Suspense fallback={<ComponentLoader />}>
      <Error404 />
    </Suspense>
  } />,
];

export default UserRoutes;
