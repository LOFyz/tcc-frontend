import React from 'react';

import SearchBar from '../components/SearchBar';
import Post from '../components/Post';

const Dashboard: React.FC = () => {
  return (
    <>
      <Header>
        <h1>Dashboard</h1>
        <img src="" alt="" />
      </Header>
      <Body>
        <SearchBar />
        <Post
          username="Mauricio"
          profilePhoto="https://upload.wikimedia.org/wikipedia/commons/5/57/QT_-_Johann_Moritz_1937.PNG"
          userProfile=""
          image="https://upload.wikimedia.org/wikipedia/commons/5/57/QT_-_Johann_Moritz_1937.PNG"
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit
          laudantium quas eaque debitis voluptatibus veritatis quaerat
          exercitationem nesciunt eos corrupti!
        </Post>
        <Post
          username="Mauricio"
          profilePhoto="https://upload.wikimedia.org/wikipedia/commons/5/57/QT_-_Johann_Moritz_1937.PNG"
          userProfile=""
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit
          laudantium quas eaque debitis voluptatibus veritatis quaerat
          exercitationem nesciunt eos corrupti!
        </Post>
      </Body>
    </>
  );
};

export default Dashboard;

import styled from 'styled-components';

const Header = styled.div`
  width: 100%;
  height: 9.2rem;
  padding: 0 1.5rem;
  justify-content: space-between;
  display: flex;
  flex-direction: row;
  align-items: center;
  background: #fff;

  h1 {
    font-family: 'Varela Round', sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 3rem;
    line-height: 3.6rem;
    display: flex;
    align-items: flex-end;
    text-align: center;
    color: #000000;
  }

  img {
    background: #aaaaaa;
    border: 0.1rem solid rgba(0, 0, 0, 0.15);
    box-shadow: 0rem 0rem 0.4rem rgba(0, 0, 0, 0.25);
    border-radius: 50%;
    width: 7rem;
    height: 7rem;
  }
`;
const Body = styled.div`
  width: 100%;
  padding: 0 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

// const Navigation = styled.div``;
