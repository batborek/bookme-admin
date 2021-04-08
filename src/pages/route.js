import React, { useContext } from "react";
import { CoreContext } from "../core/context";
import Employers from "./employers";
import Finance from "./finances";
import AddRoom from "./addRoom";
import Rooms from "./rooms";
import EditRoom from "./editRoom";
import RemoveRoom from "./removeRoom";
import Statistics from "./statistics";

export const Route = () => {
 
  const { currentPage } = useContext(CoreContext);
  console.log(currentPage);
  return (
    <>
      <div>
        {currentPage === 0 && <AddRoom />}
        {currentPage === 1 && <Rooms />}
        {currentPage === 2 && <Statistics />}
        {currentPage === 3 && <Finance />}
        {currentPage === 4 && <Employers />}
        {currentPage === 5 && <EditRoom />}
        {currentPage === 6 && <RemoveRoom />}
      </div>
    </>
  );
};

export default Route;
