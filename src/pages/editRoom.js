import React, { useContext, useEffect } from "react";
import { CoreContext } from "../core/context";
import Logo from "../images/logo.png";

export const EditRoom = () => {
  useEffect(() => {
    setPrice("");
    setRoomNum("");

    var single = allRooms.filter((x) => x.type === "single");
    var king = allRooms.filter((x) => x.type === "king-size");
    console.log(king);
    setAllSingle(single);
    setAllKing(king);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const {
    roomNum,
    setRoomNum,
    EditRoom,
    setIsClean,
    setIsBooked,
    setRoomType,
    setPrice,
    price,
    setRoomId,
    allSingle,
    setAllSingle,
    allKing,
    setAllKing,
    allRooms,
    filterType,
    setFilterType,
    setCurrentPage,
  } = useContext(CoreContext);
  console.log(typeof allKing);

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
          <h2>Edit a Room</h2>
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
          <section className="dropdown-update-input">
            <h2 className="newDataTitle">Enter New Data</h2>
            <input
              onChange={(e) => setRoomNum(e.target.value)}
              value={roomNum}
              type="number"
              id="number"
              name="number"
              className="text-input-update"
              placeholder="Room Number"
            />
            <select
              className="select-input-type"
              defaultValue="default"
              onChange={(e) => setRoomType(e.target.value)}
            >
              <option value="default">New Type</option>
              <option value="single">Single</option>
              <option value="king-size">King Size</option>
            </select>
            <input
              onChange={(e) => setPrice(e.target.value)}
              value={price}
              type="number"
              id="price"
              name="price"
              className="text-input-update"
              placeholder="price (RON)"
            />
          </section>

          <section className="dropdown-update-input">
            <select
              className="select-input-type"
              defaultValue="default"
              onChange={(e) => {
                if (e.target.value === "true") {
                  setIsClean(true);
                }
                if (e.target.value === "false") {
                  setIsClean(false);
                }
              }}
            >
              <option value="default">Condition</option>
              <option value="true">Clean</option>
              <option value="false">Not Clean</option>
            </select>
            <select
              className="select-input-id"
              defaultValue="default"
              onChange={(e) => {
                if (e.target.value === "true") {
                  setIsBooked(true);
                }
                if (e.target.value === "false") {
                  setIsBooked(false);
                }
              }}
            >
              <option value="default">Booked/Free</option>
              <option value="true">Booked</option>
              <option value="false">Free</option>
            </select>
          </section>

          <button
            type="button"
            className="forwardButton forwardButtonUpdate"
            disabled={false}
            onClick={() => {
              EditRoom();
              setCurrentPage(1);
            }}
          >
            <b>Edit Room</b>
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

export default EditRoom;
