import React, { useContext } from "react";
import { CoreContext } from "../core/context";
import Logo from "../images/logo.png";

export const AddRoom = () => {
  
  const {addRoom,setRoomType, price,setPrice,getRooms,setCurrentPage,loading,setLoading } = useContext(
    CoreContext
  );

  return (
    <>
      <div className="myForm">
        <img src={Logo} alt="Logo" />
        <div className="item">
      

        <h2>Add a room</h2>
            <select
              className="select-input"
              defaultValue="default"
              onChange={(e) => setRoomType(e.target.value)}
            >
              <option value="default" >Type</option>
              <option value="single">Single</option>
              <option value="king-size">King Size</option>
            </select>

            <input
            onChange={(e) => setPrice(e.target.value)}
            value={price}
            type="number"
            id="price"
            name="price"
            className="text-input"
            placeholder="price (RON)"
          />
         
            <div className="item">
        
         

          <button
            type="button"
            className="forwardButton"
            disabled={false}
            onClick={() => {addRoom();setCurrentPage(1)}}
          > 
            <b>
            {loading && <b>Loading</b>}
          {!loading && <b>Add</b>}
            </b>
          </button>
          <button
            type="button"
            className="forwardButton3"
            disabled={false}
            onClick={() => {setCurrentPage(1)}}
          > 
            <b>
            {loading && <b>Loading</b>}
          {!loading && <b>Cancel</b>}
            </b>
          </button>
        </div>
        </div>
      </div>
    </>
  );
};

export default AddRoom;
