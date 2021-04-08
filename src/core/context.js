import React, { useState, createContext } from "react";

export const CoreContext = createContext();
function CoreContextProvider(props) {
  const [currentPage, setCurrentPage] = useState(1);
  const [email, setEmail] = useState("");
  const [roomType, setRoomType] = useState("");
  const [price, setPrice] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const [totalSingle, setTotalSingle] = useState(0);
  const [singleRentedRoom, setSingleRentedRoom] = useState(0);

  const [totalKing, setTotalKing] = useState(0);
  const [kingRentedRoom, setKingRentedRoom] = useState(0);

  var singleRoom = 0;
  var rentedSingle = 0;

  var kingRoom = 0;
  var rentedKing = 0;

  const roomData = {
    type: roomType,
    price: price,
    is_booked: false,
    is_clean: true,
  };

  const addRoom = () => {
    setLoading(true);
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var requestOptions = {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET,OPTIONS,POST,PUT",
      method: "POST",
      headers: myHeaders,
      body: JSON.stringify(roomData),
      redirect: "follow",
    };

    fetch("http://api.batborek.com/api/rooms/", requestOptions).then(
      async (response) => {
        console.log(response.status);
        console.log("Room is added successufully");

        const data = await response.json();

        if (!response.ok) {
          const error = (data && data.message) || response.status;
          console.log(error);
          return Promise.reject(error);
        }
      }
    );
  };

  const getRooms = () => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var requestOptions = {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET,OPTIONS,POST,PUT",
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };

    fetch("http://api.batborek.com/api/rooms/", requestOptions).then(
      async (response) => {
        const data = await response.json();
        console.log(response.status);
        console.log("Got rooms successufully");
        console.log(data.length);
        for (var i = 0, len = data.length; i < len; i++) {
          if (data[i].type === "single") {
            singleRoom++;
          }

          if (data[i].type === "single") {
            if (!data[i].is_booked) {
              rentedSingle++;
              console.log(rentedSingle);
            }
          }

          if (data[i].type === "king-size") {
            kingRoom++;
            console.log(data[i]);
          }

          if (data[i].type === "king-size") {
            if (!data[i].is_booked) {
              rentedKing++;
              console.log(rentedSingle);
            }
          }
        }
        setTotalKing(kingRoom);
        console.log('total king'+totalKing);
        setKingRentedRoom(rentedKing);
        console.log('total rented king'+kingRentedRoom)
        setTotalSingle(singleRoom);
        console.log(totalSingle);
        setSingleRentedRoom(rentedSingle);
        console.log(singleRentedRoom);

        if (!response.ok) {
          const error = (data && data.message) || response.status;
          console.log(error);
          return Promise.reject(error);
        }
      }
    );
  };

  var availableSingle = totalSingle - singleRentedRoom;
  var availableKing = totalKing - kingRentedRoom;
  const value = {
    totalSingle,
    singleRentedRoom,
    availableSingle,

    totalKing,
    kingRentedRoom,
    availableKing,
  
    getRooms,
    loading,
    setLoading,
    addRoom,
    roomType,
    setRoomType,
    price,
    setPrice,
    currentPage,
    setCurrentPage,
    email,
    setEmail,
    password,
    setPassword,
  };
  return (
    <CoreContext.Provider value={value}>{props.children}</CoreContext.Provider>
  );
}

export default CoreContextProvider;
