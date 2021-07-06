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
        <label className="title">Notification</label>
      </button>
      {notification && (
        <ul className="notifications">
          <li>
            <div className="notification">
              <p>Notificação</p>
              <br />
              <label className="description">
                Adipisicing elit. Harum, in.
              </label>
            </div>
          </li>
          <li>
            <div className="notification">
              <p>Notificação</p>
              <br />
              <label className="description">
                Adipisicing elit. Harum, in.
              </label>
            </div>
          </li>
          <li>
            <div className="notification">
              <p>Notificação</p>
              <br />
              <label className="description">
                Adipisicing elit. Harum, in.
              </label>
            </div>
          </li>
          <li>
            <div className="notification">
              <p>Notificação</p>
              <br />
              <label className="description">
                Adipisicing elit. Harum, in.
              </label>
            </div>
          </li>
        </ul>
      )}
    </Container>
  );
};

export default NotificationButton;

const Container = styled.div`
  li {
    .notification {
      margin: 0.1rem 0;
      padding: 0.5rem;
      @media (orientation: portrait) {
        background: #29292921;
      }
    }
  }

  @media (orientation: portrait) {
    .notifications {
      position: fixed;
      bottom: 7.2rem;
      left: 0;
      width: 100%;
      flex-direction: column-reverse;
    }
  }

  p {
    font-size: 2rem;
    color: #000;
  }

  label {
    font-size: 1.8rem;
    color: #292929;
  }

  .notifications {
    background: #fff;
  }

  @media (orientation: landscape) {
    display: flex;
    flex-direction: column;
    flex: 1;
    width: 100%;

    p {
      font-size: 2rem;
      color: #000;
    }

    label {
      font-size: 1.8rem;
      color: #292929;
    }

    .notifications {
      padding: 0.5rem;
      background: #ffffff6e;
    }
  }
  .notifications,
  .notifications > * {
    display: ${(p: { clicked: boolean }) => (p.clicked ? 'initial' : 'none')};
  }
`;
