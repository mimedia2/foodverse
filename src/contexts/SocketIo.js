import React, { createContext, useState, useEffect } from "react";
import { io } from "socket.io-client";

// You can define the server URL here or import from env variables.
const SOCKET_SERVER_URL = "http://localhost:3000";
// Create the context for the socket
const SocketContext = createContext();

export const useSocket = () => {
  return React.useContext(SocketContext);
};

export const SocketProvider = ({ children }) => {
  const [socket, setSocket] = useState(null);

  useEffect(() => {
    // Initialize the socket connection when the component mounts
    const user = JSON.parse(localStorage.getItem("user"));
    const socketInstance = io(SOCKET_SERVER_URL, {
      auth: {
        token: user?.token,
      },
    });

    setSocket(socketInstance);

    // Cleanup when the component unmounts
    return () => {
      socketInstance.disconnect();
    };
  }, []);

  // Provide the socket connection to the rest of the app
  return (
    <SocketContext.Provider value={socket}>{children}</SocketContext.Provider>
  );
};
