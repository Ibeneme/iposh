
import { Route, Routes, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import ProductsHome from "./components/products/product";
import Footer from "./components/navbar-and-footer/Footer";
import ProductDescription from "./components/products/ProductDescription";
import Bag from "./components/bag/Bag";
import Checkout from "./components/bag/Checkout";
import Saved from "./components/Profile/Saved";
import Profile from "./components/Profile/Profile";
import Order from "./components/Profile/Order";
import Delivery from "./components/Profile/Delivery";
import Pending from "./components/Profile/Pending";
import SignIn from "./components/auth/SignIn";
import SignUp from "./components/auth/SignUp";
import Verify from "./components/auth/Verify";
import Forgot from "./components/auth/Forgot";


const ScrollToTop = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [navigate]);

  return null;
};



function App() {
  

  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<ProductsHome />} />
        <Route path="/footer" element={<Footer />} />
        <Route path="/product/:id" element={<ProductDescription />} />
        <Route path="/bag" element={<Bag />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/saved" element={<Saved />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/order" element={<Order />} />
        <Route path="/delivery" element={<Delivery />} />
        <Route path="/pending" element={<Pending />} />

        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/verify" element={<Verify />} />
        <Route path="/forgot" element={<Forgot />} />


      </Routes>
      <Footer />
    </>
  );
}

export default App;
