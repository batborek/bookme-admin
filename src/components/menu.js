import Logo from "../images/logo.png";
import React, { useContext } from "react";
import { CoreContext } from "../core/context";

export const Menu = () => {
  const { setCurrentPage, currentPage } = useContext(CoreContext);
  return (
    <>
      <img src={Logo} alt="Logo" className="logo" />
      <div className="Menu">
          <div  onClick={()=>setCurrentPage(1)}>
        <h1 style={currentPage === 1 ? { color: "#0070BA" }: {}}>Rooms</h1>
        </div>
        <div onClick={()=>setCurrentPage(2)}>
        <h1 style={currentPage === 2 ? { color: "#0070BA" }: {}}>Statistics</h1>
        </div>
        <div onClick={()=>setCurrentPage(3)}>
        <h1 style={currentPage === 3 ? { color: "#0070BA" }: {}}>Finances</h1>
        </div>
        <div  onClick={()=>setCurrentPage(4)}>
        <h1 style={currentPage === 4 ? { color: "#0070BA" }: {}}>Employers</h1>
        </div>
         {/* <div onClick={()=>setCurrentPage(0)}>
        <h1 style={{ color: "red" }}>Log out </h1>
        </div> */}
      </div>
    </>
  );
};

export default Menu;
