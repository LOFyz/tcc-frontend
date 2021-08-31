import styled from 'styled-components';
import Navigation from '../components/Navigation';
import React from 'react';
import { Link } from 'react-router-dom';

import SearchBar from '../components/SearchBar';
import Post from '../components/Post';
// import { useSocket } from '../contexts/SocketContext';

const Dashboard: React.FC = () => {
  // const { socket } = useSocket();

  // const handleSendMessage = (message: string, recipients: any[]) => {
  //   socket!.emit('send-message', { message, recipients });
  // };

  // React.useEffect(() => {
  //   if (!socket) return;

  //   socket.on('send-message', ({ message, recipients }) => {
  //     console.log(message);
  //   });

  //   return () => {
  //     socket.off('send-message');
  //   };
  // }, [socket]);

  return (
    <Container>
      <Header>
        <h1>Dashboard</h1>
        <Link to={`/profile/1`}>
          {/* Adicionar id quando conectar ao banco, com um operador ternario,
          caso não tenha usuario logado mandar pra tela de login  */}
          <img src="" alt="" />
        </Link>
      </Header>
      <div className="container">
        <Body>
          <div className="searchBar">
            <SearchBar />
            <ul>
              <li>
                <Post
                  className="post"
                  username="Mauricio"
                  profilePhoto="https://upload.wikimedia.org/wikipedia/commons/5/57/QT_-_Johann_Moritz_1937.PNG"
                  userProfile="/profile/1"
                  image="https://upload.wikimedia.org/wikipedia/commons/5/57/QT_-_Johann_Moritz_1937.PNG"
                >
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit
                  laudantium quas eaque debitis voluptatibus veritatis quaerat
                  exercitationem nesciunt eos corrupti!
                </Post>
              </li>
            </ul>
          </div>
          <ul>
            <li>
              <Post
                className="post"
                username="Mauricio"
                profilePhoto="https://upload.wikimedia.org/wikipedia/commons/5/57/QT_-_Johann_Moritz_1937.PNG"
                userProfile="1"
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit
                laudantium quas eaque debitis voluptatibus veritatis quaerat
                exercitationem nesciunt eos corrupti!
              </Post>
            </li>
            <li>
              <Post
                className="post"
                username="Mauricio"
                profilePhoto="https://upload.wikimedia.org/wikipedia/commons/5/57/QT_-_Johann_Moritz_1937.PNG"
                userProfile="1"
                image="https://upload.wikimedia.org/wikipedia/commons/5/57/QT_-_Johann_Moritz_1937.PNG"
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit
                laudantium quas eaque debitis voluptatibus veritatis quaerat
                exercitationem nesciunt eos corrupti!
              </Post>
            </li>
          </ul>
        </Body>
        <Navigation />
      </div>
    </Container>
  );
};

export default Dashboard;

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

  @media (orientation: landscape) {
    height: 10.2rem;
    background: #66bb6a;
    box-shadow: 0px 0px 2rem rgba(0, 0, 0, 0.25);
    flex-direction: row-reverse;

    h1 {
      color: #fff;
    }
  }
`;
const Body = styled.div`
  width: 100%;
  padding: 2rem 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-wrap: wrap;

  .searchBar {
    ul > * {
      display: none;
    }
  }

  li + li {
    margin: 1rem 0;
  }

  @media (orientation: landscape) {
    flex-direction: row-reverse;
    align-items: flex-start;
    justify-content: space-around;

    .searchBar {
      display: flex;
      flex-direction: column;
      align-items: center;
      ul > * {
        display: flex;
        flex-direction: column;
      }
      li {
        margin: 1rem 0;
      }
    }
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  width: 100%;

  .container {
    display: flex;
    flex: 1;
    width: 100%;
    flex-direction: row-reverse;
    align-items: flex-start;
    justify-content: center;
  }
`;
