import React, { useEffect, useState } from "react";
import io from "socket.io-client";

let socket;

const App = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [room, setRoom] = useState("");
  const [userName, setUserName] = useState("");

  const [message, setMessage] = useState("");
  const [messageList, setMessageList] = useState([]);

  useEffect(() => {
    socket = io("localhost:3005/");
  }, []);

  useEffect(() => {
    socket.on("receive_message", ({ userName, message }) => {
      setMessageList([...messageList, { userName, message }]);
    });
  }, [messageList]);

  const connectToRoom = () => {
    socket.emit("join_room", { room, userName });
    setLoggedIn(true);
  };

  const sendMessage = () => {
    socket.emit("send_message", { room, userName, message });
    setMessageList([...messageList, { userName, message }]);
    setMessage("");
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
        <React.Fragment>
          <h1 className="display-6">Logged IN!</h1>
          <div className="chatContainer container m-4 col-4">
            <div className="messages">
              {messageList.map((m) => {
                return (
                  <h1>
                    {m.userName}
                    {m.message}
                  </h1>
                );
              })}
            </div>
            <div className="messageInputs">
              <input
                className="form-control m-3"
                onChange={(e) => {
                  setMessage(e.target.value);
                }}
                type="text"
                placeholder="Enter message.."
              />
              <button onClick={sendMessage} className="btn btn-success ms-3">
                SEND
              </button>
            </div>
          </div>
        </React.Fragment>
      )}
    </div>
  );
};

export default App;
