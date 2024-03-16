// import { useEffect } from "react";
// import Navbar from "./Navbar";
import Button from "@mui/material/Button";
export default function UserHome() {
  const user = window.localStorage.getItem("user");
  const handleBtnClick = () => {
    console.log(user);
  };
  return (
    <>
      <Button variant="outlined" onClick={handleBtnClick}>
        Click for test
      </Button>
    </>
  );
}
