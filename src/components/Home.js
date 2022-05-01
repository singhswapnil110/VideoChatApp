import { useEffect, useState } from "react";
import { getAuthToken } from "../services/tokenGenerator";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { AppConstants } from "../constants/Constants";
import App from "../App";

export const Home = () => {
  useEffect(() => {
    getAuthToken();
    console.log(authToken);
  });

  const authToken = sessionStorage.getItem("authToken");

  let navigate = useNavigate();
  const [roomID, setroomID] = useState("");
  console.log(roomID);
  const joinRoom = () => {
    if (roomID !== "") navigate(`/join-room/${roomID}`);
  };

  const createRoom = () => {
    const headers = {
      Authorization: `Bearer ${authToken}`,
      crossorigin: true,
      "Content-Type": "application/json"
    };
    axios
      .post(AppConstants.createRoomAPIEndpoint, {}, { headers: headers })
      .then((res) => {
        console.log(res.data);
        navigate(`/join-room/${res.data.id}`);
      })
      .catch((error) => {
        console.error("There was an error!", error);
      });
  };
  // fetch("https://prod-in2.100ms.live/api/v2/rooms", {
  //   method: "POST",
  //   headers: {
  //     "Content-Type": "application/x-www-form-urlencoded",
  //     crossorigin: true,
  //     Authorization: `Bearer ${authToken}`
  //   },
  //   withCredentials: false
  // })
  //   .then((res) => {
  //     console.log(res.data);
  //     //navigate(`/join-room/${res.data.id}`);
  //   })
  //   .catch((error) => {
  //     console.error("There was an error!", error);
  //   });
  //};

  return (
    <>
      <h1>Vaarta</h1>
      <div>
        <input
          type="text"
          placeholder="Enter room id"
          onChange={(e) => setroomID(e.target.value)}
        />
        <button onClick={joinRoom}> Join Room </button>
      </div>
      <button onClick={createRoom}> Create Room </button>
    </>
  );
};
