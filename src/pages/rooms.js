import React, { useContext, useEffect } from "react";
import { CoreContext } from "../core/context";
import Menu from "../components/menu";

export const Rooms = () => {
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

  useEffect(() => {
    setLoading(false);
    getRooms();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Menu />
      <div className="totalRoom">
        <div className="myTable">
          <table style={{ width: "100%" }}>
            <caption>Rooms</caption>
            <tbody>
              <tr className="border_bottom">
                <th>Type</th>
                <th>Rented</th>
                <th>Available</th>
                <th>Total</th>
              </tr>
              <tr>
                <td>Single room</td>
                <td>{availableSingle}</td>
                <td>{singleRentedRoom}</td>
                <td>{totalSingle}</td>
              </tr>
              <tr>
                <td>King size</td>
                <td>{availableKing}</td>
                <td>{kingRentedRoom}</td>
                <td>{totalKing}</td>
              </tr>
            </tbody>
          </table>
         <div className="forwardButtons"> 
         <button
          type="button"
          className="forwardButton2"
          disabled={false}
          onClick={() => {setCurrentPage(0)}}
        >
          <b>
            <b>Add a room</b>
          </b>
        </button> <button
          type="button"
          className="forwardButton2 edit-room"
          disabled={false}
          onClick={() => {setCurrentPage(5)}}
        >
          <b>
            <b>Edit a room</b>
          </b>
        </button>
        <button
          type="button"
          className="forwardButton2 remove-room"
          disabled={false}
          onClick={() => {setCurrentPage(6)}}
        >
          <b>
            <b>Remove a room</b>
          </b>
        </button>
         </div>
        </div>

      </div>
     
    </>
  );
};

export default Rooms;