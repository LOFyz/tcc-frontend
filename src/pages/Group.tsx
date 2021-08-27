import React from 'react';
import styled from 'styled-components';
import Navigation from '../components/Navigation';
import Post from '../components/Post';
import { Link } from 'react-router-dom';
import { Edit } from '@material-ui/icons';

const Profile: React.FC = () => {
  return (
    <Container>
      <div className="subContainer">
        <Header>
          <img src="" alt="" className="banner" />
          <div className="upper">
            <div className="imageAndInfo">
              <div className="info">
                <h1>914</h1>
                <Link to="">Members</Link>
              </div>
            </div>
            <Edit />
          </div>
          <label className="description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic
            laudantium laboriosam omnis cum aliquam consequatur quisquam
            officiis, veritatis libero veniam cumque atque earum non deleniti id
            dolor tempora beatae ipsam.
          </label>
        </Header>
        <Body style={{ position: 'relative', bottom: '10rem' }}>
          <ul>
            <li>
              <Post
                size={1.3}
                profilePhoto=""
                userProfile=""
                username="YAAAAAAAY"
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
                facilis earum aliquam porro quod voluptate at similique,
                dolorem, perspiciatis quaerat distinctio eligendi atque.
                Tempore, alias! Cupiditate quod aperiam culpa eum.
              </Post>
            </li>
            <li>
              <Post size={1.3} profilePhoto="" userProfile="" username="">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
                facilis earum aliquam porro quod voluptate at similique,
                dolorem, perspiciatis quaerat distinctio eligendi atque.
                Tempore, alias! Cupiditate quod aperiam culpa eum.
              </Post>
            </li>
            <li>
              <Post size={1.3} profilePhoto="" userProfile="" username="">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
                facilis earum aliquam porro quod voluptate at similique,
                dolorem, perspiciatis quaerat distinctio eligendi atque.
                Tempore, alias! Cupiditate quod aperiam culpa eum.
              </Post>
            </li>
            <li>
              <Post size={1.3} profilePhoto="" userProfile="" username="">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
                facilis earum aliquam porro quod voluptate at similique,
                dolorem, perspiciatis quaerat distinctio eligendi atque.
                Tempore, alias! Cupiditate quod aperiam culpa eum.
              </Post>
            </li>
          </ul>
        </Body>
      </div>
      <Navigation />
    </Container>
  );
};

export default Profile;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  background: #fff;
  flex: 1;

  .subContainer {
    width: 100%;
  }

  @media (orientation: landscape) {
    flex-direction: row-reverse;
    width: 100%;
    justify-content: flex-end;
  }
`;

const Header = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: 10rem 2rem 0 2rem;
  width: 100%;
  position: relative;
  bottom: 10rem;

  .upper {
    display: flex;
    flex-direction: row;
    align-items: flex-end;
    justify-content: space-between;
    width: 100%;
    padding: 0 2rem;

    .imageAndInfo {
      display: flex;
    }

    svg {
      width: 2.4rem;
      height: 2.4rem;
      color: #000000;
    }
  }

  .banner {
    width: 100%;
    height: 28.6rem;
    position: absolute;
    top: 0;
    left: 0;
  }

  .profilePhoto {
    width: 10rem;
    height: 10rem;
    background: #c4c4c4;
    box-shadow: 0rem 0.4rem 0.4rem rgba(0, 0, 0, 0.25);
    border-radius: 50%;
    margin-right: 1.5rem;
  }

  .info {
    align-self: flex-end;

    h1 {
      max-width: 24.3rem;
      height: 2.9rem;

      font-family: 'Varela Round';
      font-size: 2.4rem;
      color: #000000;
    }

    label {
      width: 17.5rem;
      height: 1.4rem;

      font-family: 'Varela Round';
      font-size: 1.2rem;
      color: rgba(0, 0, 0, 0.5);
    }
  }

  .description {
    font-family: 'Varela Round';
    font-size: 1rem;
    color: rgba(0, 0, 0, 0.75);
    background: rgba(0, 0, 0, 0.1);
    width: 37.2rem;
    border-radius: 0.5rem;
    display: flex;
    justify-content: center;
    padding: 0.5rem;
    margin: 1rem;
  }

  @media (orientation: landscape) {
    padding: 0;

    .description {
      position: relative;

      font-size: 2.2rem;
      padding: 1.159rem;
      width: 86.261rem;
      height: 14.609rem;
    }

    .info {
      h1 {
        font-size: 4.9rem;
        height: 6.725rem;
        max-width: 54.5rem;
      }

      label {
        font-size: 2.7rem;
      }
    }

    .banner {
      height: 36rem;
      width: 100%;
      position: relative;
      left: initial;
      right: 0;
    }

    .profilePhoto {
      width: 23.2rem;
      height: 23.2rem;
    }

    .upper {
      position: relative;
      padding: 0 5rem;

      svg {
        width: 5.565rem;
        height: 5.565rem;
      }
    }
  }
`;

const Body = styled.div`
  display: flex;
  flex-direction: column;
  li {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 1rem;
  }
`;
