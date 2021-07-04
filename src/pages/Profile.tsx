import { Home, Message } from '@material-ui/icons';
import React from 'react';
import styled from 'styled-components';
import { Navigation } from '../components/Navigation';
import NotificationButton from '../components/NotificationButton';

const Profile: React.FC = () => {
  return (
    <Navigation>
      <button>
        <Message />
        <a href="">Message</a>
      </button>
      <button>
        <Home />
        <a href="">Home</a>
      </button>
      <NotificationButton />
    </Navigation>
  );
};

export default Profile;

const Container = styled.div``;
