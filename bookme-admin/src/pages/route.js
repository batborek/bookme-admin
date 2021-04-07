import React, { useContext } from "react";
import { CoreContext } from "../core/context";
import Employers from "./employers";
import Finance from "./finances";
import Login from "./login";
import Rooms from "./rooms";
import Statistics from "./statistics";

export const Route = () => {
  console.log("entered route");
  const { currentPage } = useContext(CoreContext);
  console.log(currentPage);
  return (
    <>
      <div>
        {currentPage === 0 && <Login />}
        {currentPage === 1 && <Rooms />}
        {currentPage === 2 && <Statistics />}
        {currentPage === 3 && <Finance />}
        {currentPage === 4 && <Employers />}
      </div>
    </>
  );
};

export default Route;
