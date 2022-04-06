import React from "react";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import Menu from "../components/Menu";
import MenuFooter from "../components/MenuFooter";
import Sidebar from "../components/Sidebar";

const Container = (props) => {
  return (
    <div className="relative">
      <Menu />
      <Banner />

      <div className="container mx-auto p-3">{props.children}</div>

      <Footer />
      <MenuFooter />
    </div>
  );
};

export default Container;
