import React from 'react';

import { Body, Header } from './styles';
import SearchBar from '../../components/SearchBar';
import Post from '../../components/Post';

const Dashboard: React.FC = () => {
  return (
    <>
      <Header>
        <h1>Dashboard</h1>
        <img src="" alt="" />
      </Header>
      <Body>
        <SearchBar />
        <Post />
      </Body>
    </>
  );
};

export default Dashboard;
