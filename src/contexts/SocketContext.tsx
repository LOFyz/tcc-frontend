import React from 'react';
import io, { Socket } from 'socket.io-client';
import { DefaultEventsMap } from 'socket.io-client/build/typed-events';

interface SocketData {
  socket: Socket<DefaultEventsMap, DefaultEventsMap> | null;
}

const SocketContext = React.createContext<SocketData>({} as SocketData);

export const SocketProvider: React.FC = ({ children }) => {
  const [socket, setSocket] = React.useState<Socket<
    DefaultEventsMap,
    DefaultEventsMap
  > | null>(null);

  React.useEffect(() => {
    const newSocket = io('wss://api-if-connect.herokuapp.com', {
      query: {
        id: '1',
      },
    });
    setSocket(newSocket);

    return () => {
      newSocket.close();
    };
  }, []);

  return (
    <SocketContext.Provider value={{ socket }}>
      {children}
    </SocketContext.Provider>
  );
};

export function useSocket(): SocketData {
  const context = React.useContext(SocketContext);

  if (!context) {
    throw new Error('useSocket must to be used within a socketProvider.');
  }

  return context;
}
