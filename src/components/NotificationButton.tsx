import { Notifications, NotificationsActive } from '@material-ui/icons';
import React from 'react';
import { useState } from 'react';
import styled from 'styled-components';

const NotificationButton: React.FC = () => {
  const [notification, setNotification] = useState(true);
  const [showNotification, setShowNotification] = useState(false);
  // const [notification, setNotification] = useState(false);

  return (
    <Container clicked={showNotification}>
      <button
        onClick={() => {
          setShowNotification(!showNotification);
        }}
      >
        {notification ? <NotificationsActive /> : <Notifications />}
        <label>Notification</label>
      </button>
      {notification && (
        <div className="notification">
          <p>Notificação</p>
          <label className="description">Adipisicing elit. Harum, in.</label>
        </div>
      )}
    </Container>
  );
};

export default NotificationButton;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  width: 100%;

  p {
    font-size: 2rem;
    color: #fff;
  }

  label {
    font-size: 1.8rem;
    color: #e7e7e7;
  }

  .notification {
    padding: 0.5rem;
    background: #ffffff6e;
  }

  .notification,
  .notification > * {
    display: ${(p: { clicked: boolean }) => (p.clicked ? 'initial' : 'none')};
  }
`;
