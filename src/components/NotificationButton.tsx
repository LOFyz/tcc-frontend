import { Notifications, NotificationsActive } from '@material-ui/icons';
import React from 'react';
import { useState } from 'react';

const NotificationButton: React.FC = () => {
  const [notification, setNotification] = useState(false);

  return (
    <button>
      {notification ? <NotificationsActive /> : <Notifications />}
    </button>
  );
};

export default NotificationButton;
