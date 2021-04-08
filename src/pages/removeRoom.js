import React, { useContext, useEffect } from "react";
import { CoreContext } from "../core/context";
import Menu from "../components/menu";
import Logo from "../images/logo.png";



export const RemoveRoom = () => {
    const {
        setLoading,
        getRooms,
        totalKing,
        kingRentedRoom,
        availableKing,
        singleRentedRoom,
        totalSingle,
        availableSingle,
        setCurrentPage,
      } = useContext(CoreContext);

      return (
        <>
          <div className="myForm">
            <img src={Logo} alt="Logo" />
            <div className="item">
          <h2>Delete a Room</h2>
    <section className="dropdown-update">
    <select
              className="select-input-type"
              defaultValue="default"
              //onChange={(e) => setRoomType(e.target.value)}
            >
              <option value="default" >Type</option>
              <option value="single">Single</option>
              <option value="king-size">King Size</option>
            </select>
            <select
              className="select-input-id"
              defaultValue="default"
              //onChange={(e) => setRoomType(e.target.value)}
            >
              <option value="default" >Select Room</option>
              <option value="single">01</option>
              <option value="king-size">02</option>
            </select>
    </section>
   
    <button
            type="button"
            className="forwardButton forwardButtonDelete"
            disabled={false}
         //   onClick={() => {addRoom();setCurrentPage(1)}}
          > 
          <b>Delete Room</b>


          </button>
          <button
            type="button"
            className="forwardButton3 forwardButtonBack"
            disabled={false}
         //   onClick={() => {setCurrentPage(1)}}
          > <b>Cancel</b>

          </button>
          

            </div>
          </div>
        </>
      );
}

export default RemoveRoom;