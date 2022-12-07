import React, { useState, useEffect, useContext } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import "./App.css";
import ScrollToTop from "./hooks/ScrollToTop";
import Home from "./pages/Home/home";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import LogIn from "./pages/LogIn/LogIn";
import SignUp from "./pages/SignUp/SignUp";
import ShopInfor from "./pages/ShopInfor/ShopInfor";
import TravelInfo from "./pages/TravelInfo/TravelInfo";
import TripFinder from "./pages/TripFinder";
import Blog from "./pages/Blog/Blog";
import CustomerFeedback from "./pages/CustomerFeedback/CustomerFeedback";
import Tourlist from "./pages/Tourlist/Tourlist";
import Destination from "./pages/Destination/Destination";
import Feedback from "./pages/Home/Feedback/Feedback";
import AboutUs from "./pages/Home/AboutUs/AboutUs";
import Policy from "./pages/Home/Policy/Policy";
// import Privacy from "./pages/Home/Privacy/Privacy";
import Payment from "./pages/Home/Payment/Payment";
import PaymentGate from "./pages/Home/PaymentGateWay/PaymentGate";
// import Affiliates from "./pages/Home/Affiliates/Affiliates";
import Affiliates from "./pages/Affiliates/Affiliates";
import UserInfor from "./pages/UserInfor/UserInfor";
import Privacy from "./pages/Company/Privacy/Privacy";
import BillDetails from "./pages/BillDetail/BillDetail";
import BlogEx from "./components/BlogEx/BlogEx";
import BlogDetails from "./pages/BlogDetails/BlogDetails";
import Company from "./pages/Company/Company";
import SendMail from "./components/SendMail/SendMail";
import ForgotPass from "./pages/ForgotPass/ForgotPass";
import SignUp2 from "./pages/SignUp/SignUp2";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <ScrollToTop>
                    <Layout>
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/ShopInfor" element={<ShopInfor />} />
                            <Route
                                path="/TripFinder"
                                element={<TripFinder />}
                            />
                            <Route
                                path="/Affiliates"
                                element={<Affiliates />}
                            />
                            <Route
                                path="/Destination/:id"
                                element={<Destination />}
                            />
                            <Route
                                path="/CustomerFeedback"
                                element={<CustomerFeedback />}
                            />
                            <Route path="/Feedback" element={<Feedback />} />
                            <Route path=":id" element={<Tourlist />} />
                            <Route
                                path="/TravelInfo/:id"
                                element={<TravelInfo />}
                            />
                            <Route path="/UserInfor" element={<UserInfor />} />
                            <Route path="/AboutUs" element={<AboutUs />} />
                            <Route path="/Policy" element={<Policy />} />
                            <Route path="/Privacy" element={<Privacy />} />
                            <Route path="/Payment" element={<Payment />} />
                            <Route
                                path="/BillDetails"
                                element={<BillDetails />}
                            />
                            <Route path="/LogIn" element={<LogIn />} />
                            <Route path="/SignUp" element={<SignUp2 />} />
                            <Route path=":id" element={<BlogEx />} />
                            <Route path="/Blog" element={<Blog />} />
                            <Route
                                path="/BlogDetails/:id"
                                element={<BlogDetails />}
                            />
                            <Route path="/Company/:id" element={<Company />} />
                            <Route path="/SendMail" element={<SendMail />} />
                            <Route path="/ForgotPass" element={<ForgotPass />} />
                        </Routes>
                    </Layout>
                </ScrollToTop>
            </BrowserRouter>
            <ToastContainer />
        </div>
    );
}

export default App;
