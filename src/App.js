import React, { useEffect, useState } from "react";
import io from "socket.io-client";

let socket;

const App = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [room, setRoom] = useState("");
  const [userName, setUserName] = useState("");

  useEffect(() => {
    socket = io("localhost:3005/");
  }, []);

  const connectToRoom = () => {
    socket.emit("join_room", { room, userName });
  };

  return (
    <div className="App">
      {!loggedIn ? (
        <div className="m-4 p-4 col-3">
          <h1 className="display-6 m-2">NOT logged in</h1>
          <input
            className="form-control m-2 p-2"
            onChange={(e) => {
              setUserName(e.target.value);
            }}
            type="text"
            placeholder="Name"
          />
          <input
            className="form-control m-2 p-2"
            onChange={(e) => {
              setRoom(e.target.value);
            }}
            type="text"
            placeholder="Room"
          />
          <button className="btn btn-primary m-2 p-2" onClick={connectToRoom}>
            Enter Chat
          </button>
        </div>
      ) : (
        <h1 className="display-6">Logged IN!</h1>
      )}
    </div>
  );
};

export default App;
