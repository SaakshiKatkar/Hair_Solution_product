import React from "react";
import Benefits from "./Benefits";
import Deals from "./Deals";
import Healthyhair from "./Healthyhair";
import Natural from "./Natural";
import Organic from "./Organic";
import Products from "./Products";
import Use from "./Use";
import Blogs from "./Blogs";
import Customer from "./Customer";

function Home() {
  return (
    <div>
      <Organic />
      <Natural />
      <Healthyhair />
      <Deals />

      <Benefits />
      <Use />
      <Products />
      <Customer />

      <Blogs />
    </div>
  );
}

export default Home;
