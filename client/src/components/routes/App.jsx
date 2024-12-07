// import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";
import AboutUs from "../pages/AboutUs.jsx";
import ContactUs from "../pages/ContactUs.jsx";
import Services from "../pages/Services.jsx";
import React  from "react";
import { Link } from "react-router-dom";
import {Header} from "../../components/header/Header.jsx";

function App() {
  return (
    <>
      <div className="flex flex-col min-h-screen">
        {/* <Header /> */}
        
      <Header />


        <div className="flex-grow">
          <Outlet />
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;
