import React, { useContext, useEffect } from "react";
import { CoreContext } from "../core/context";

import Logo from "../images/logo.png";

export const RemoveRoom = () => {

  useEffect(() => {
   

    var single = allRooms.filter((x) => x.type === "single");
    var king = allRooms.filter((x) => x.type === "king-size");
    console.log(king);
    setAllSingle(single);
    setAllKing(king);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const {
    DeleteRoom,
    filterType,
    setFilterType,
    setRoomId,
allRooms,
    allSingle,
    setAllSingle,
    allKing,
    setAllKing,
  
    setCurrentPage,
  } = useContext(CoreContext);

  let SingleOptionItems = allSingle.map((room) => (
    <option key={room.id}>{room.number}</option>
  ));
  let KingOptionItems = allKing.map((room) => (
    <option key={room.id}>{room.number}</option>
  ));

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
              onChange={(e) => {
                setFilterType(e.target.value);
              }}
            >
              <option value="default">Type</option>
              <option value="single">Single</option>
              <option value="king-size">King Size</option>
            </select>
            <select
              className="select-input-id"
              defaultValue="default"
              onChange={(e) => setRoomId(e.target.value)}
            >
              <option value="default">Room Number</option>
              {filterType === "single" && SingleOptionItems}
              {filterType === "king-size" && KingOptionItems}
            </select>
          </section>

          <button
            type="button"
            className="forwardButton forwardButtonDelete"
            disabled={false}
            onClick={() => {
            DeleteRoom();
              setCurrentPage(1);
            }}
          >
            <b>Delete Room</b>
          </button>
          <button
            type="button"
            className="forwardButton3 forwardButtonBack"
            disabled={false}
            onClick={() => {
              setCurrentPage(1);
            }}
          >
            {" "}
            <b>Cancel</b>
          </button>
        </div>
      </div>
    </>
  );
};

export default RemoveRoom;
