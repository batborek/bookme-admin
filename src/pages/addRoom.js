import React, { useContext, useEffect } from "react";
import { CoreContext } from "../core/context";
import Logo from "../images/logo.png";

export const AddRoom = () => {
  useEffect(() => {
    setPrice("");
    setRoomType("");
    setRoomType("");


    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const {
    addRoom,
    setRoomType,
    price,
    setPrice,
    setCurrentPage,
    loading,
    setRoomNum,
    roomNum
  } = useContext(CoreContext);

  return (
    <>
      <div className="myForm">
        <img src={Logo} alt="Logo" />
        <div className="item">
          <h2>Add a room</h2>

          <input
            onChange={(e) => setRoomNum(e.target.value)}
            value={roomNum}
            type="number"
            id="roomNum"
            name="roomNum"
            className="text-input"
            placeholder="Room Number"
          />

          <div className="item"></div>
          <select
            className="select-input"
            defaultValue="default"
            onChange={(e) => setRoomType(e.target.value)}
          >
            <option value="default">Type</option>
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
              onClick={() => {
                addRoom();
                setCurrentPage(1);
              }}
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
              onClick={() => {
                setCurrentPage(1);
              }}
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
