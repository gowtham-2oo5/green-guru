// import { useEffect } from "react";
import Navbar from "./Navbar";
import Services from "./Services";
import Footer from "./footer";

export default function UserHome() {
  const user = window.localStorage.getItem("user");
  return (
    <>
      <Navbar />
      <Services />
      <Footer />
    </>
  );
}
