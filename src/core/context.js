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
  const [roomNum, setRoomNum] = useState("");
  const [allRooms, setAllRooms] = useState("");
  const [filterType, setFilterType] = useState("");
  const [selectedOptions, setSelectedOptions] = useState("");
  const [allSingle, setAllSingle] = useState([]);
  const [allKing, setAllKing] = useState([]);
  const [roomId, setRoomId] = useState("");
  const [isClean, setIsClean] = useState(true);
  const [isBooked, setIsBooked] = useState(false);

  var singleRoom = 0;
  var rentedSingle = 0;

  var kingRoom = 0;
  var rentedKing = 0;

  const roomData = {
    number: roomNum,
    type: roomType,
    price: price,
    is_booked: false,
    is_clean: true,
  };

  const editRoomData = {
    number: roomNum,
    type: roomType,
    price: price,
    is_booked: isBooked,
    is_clean: isClean,
  };

  const DeleteRoom = () => {
    setLoading(true);
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var requestOptions = {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET,OPTIONS,POST,PUT",
      method: "DELETE",
      headers: myHeaders,
      redirect: "follow",
    };

    fetch(
      "https://api.batborek.com/api/rooms/".concat(roomId) + "/",
      requestOptions
    ).then(async (response) => {
      console.log(response.status);
      console.log("Room is Deleted successufully");
      const data = await response.json();
      if (!response.ok) {
        const error = (data && data.message) || response.status;
        console.log(error);
        return Promise.reject(error);
      }
    });
  };


  const EditRoom = () => {
    setLoading(true);
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var requestOptions = {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET,OPTIONS,POST,PUT",
      method: "PUT",
      headers: myHeaders,
      body: JSON.stringify(editRoomData),
      redirect: "follow",
    };

    fetch(
      "https://api.batborek.com/api/rooms/".concat(roomId) + "/",
      requestOptions
    ).then(async (response) => {
      console.log(response.status);
      console.log("Room is Updated successufully");

      const data = await response.json();

      if (!response.ok) {
        const error = (data && data.message) || response.status;
        console.log(error);
        return Promise.reject(error);
      }
    });
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

    fetch("https://api.batborek.com/api/rooms/", requestOptions).then(
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

  var singleRooms = [];

  const getRooms = () => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    var requestOptions = {
      mode: "cors",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET,OPTIONS,POST,PUT",
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };

    fetch("https://api.batborek.com/api/rooms/", requestOptions).then(
      async (response) => {
        const data = await response.json();
        console.log(response.status);
        console.log("Got rooms successufully");
        setAllRooms(data);

        for (var i = 0, len = data.length; i < len; i++) {
          if (data[i].type === "single") {
            singleRoom++;
          }

          if (data[i].type === "single") {
            if (!data[i].is_booked) {
              rentedSingle++;
            }
          }

          if (data[i].type === "king-size") {
            kingRoom++;
           
          }

          if (data[i].type === "king-size") {
            if (!data[i].is_booked) {
              rentedKing++;
            }
          }
        }
        setTotalKing(kingRoom);
      
        setKingRentedRoom(rentedKing);
        setTotalSingle(singleRoom);
        setSingleRentedRoom(rentedSingle);
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
    DeleteRoom,
    EditRoom,
    isClean,
    setIsClean,
    isBooked,
    setIsBooked,
    roomId,
    setRoomId,
    allSingle,
    setAllSingle,
    allKing,
    setAllKing,
    selectedOptions,
    setSelectedOptions,
    filterType,
    setFilterType,
    allRooms,
    singleRooms,
    roomNum,
    setRoomNum,
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
