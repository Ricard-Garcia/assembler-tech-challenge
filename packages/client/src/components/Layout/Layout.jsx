import React from "react";
import { useSelector } from "react-redux";

import "./Layout.scss";

import Header from "../Header";
import Footer from "../Footer";

export default function Layout({ children }) {
  const userState = useSelector((state) => state.user);

  let mainClasses = `flex-grow-1 py-5 d-flex flex-column align-items-center `;
  if (!userState.isLogged) {
    mainClasses += "justify-content-center";
  }

  return (
    <div className="layout-wrapper d-flex flex-column">
      <Header />
      <main className={mainClasses}>{children}</main>
      <Footer />
    </div>
  );
}
