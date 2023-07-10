import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";

    /* 
      header
        - logo
        - Nav items
        - Cart
      body
        - Search bar
        - Restaurant List 
          - Restaurant Card
            - Image
            - Name
            - Rating
            -Cuisines
      footer
        - links
        - Copyright
      */

const AppLayout = () => {
  return (
    <>
      <Header />
      <Body />
      <Footer />
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
