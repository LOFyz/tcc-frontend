import React from 'react';
import styled from 'styled-components';
import { ChatBubble, Share } from '@material-ui/icons';
import { useState } from 'react';

export interface PostProps {
  image?: string;
  username: string;
  userProfile: string;
  profilePhoto: string;
}

const Post: React.FC<PostProps> = ({
  image,
  children,
  username,
  profilePhoto,
  userProfile,
}) => {
  const [clicked, setClicked] = useState<boolean>(false);
  return (
    <Container>
      <Postbar>
        <img src={profilePhoto} alt="" />
        <a href={userProfile}>{username}</a>
      </Postbar>
      <Body image={image}>
        {image && <img src={image} />}
        {children}
      </Body>
      <Options>
        <Like clicked={clicked} onClick={() => setClicked(!clicked)} />
        <CommentButton>
          <ChatBubble />
        </CommentButton>
        <ShareButton>
          <Share />
        </ShareButton>
      </Options>
    </Container>
  );
};

export default Post;

const Postbar = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  img {
    width: 3.2rem;
    height: 3.2rem;
    border-radius: 50%;
    background: #c4c4c4;
  }

  a {
    width: 10.4rem;
    height: 1.4rem;
    font-family: 'Varela Round';
    font-style: normal;
    font-weight: normal;
    font-size: 1.2rem;
    line-height: 1.4rem;
    color: #338a3e;
    padding-left: 0.5rem;
    text-decoration: none;
  }
`;

const Body = styled.div`
  display: flex;
  flex-direction: column;

  width: 36.2rem;
  min-height: 5.6rem;

  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  margin: 0.5rem 0;

  font-size: ${(p: { image?: string }) => (p.image ? '1.2rem' : '1.7rem')};

  color: #000000;

  img {
    width: 100%;
    height: 16.3rem;
    background: #c4c4c4;
    object-fit: cover;
    margin: 0.5rem 0;
    object-position: top;
  }
`;

const Options = styled.div`
  display: flex;
  flex-direction: row;
  width: 8.4rem;
  justify-content: space-between;
`;

const Like = styled.button`
  width: 2.2rem;
  height: 2.2rem;

  background: ${(p: { clicked: boolean }) =>
    p.clicked ? '#d32f2f' : '#c4c4c4'};
  border: 0.1rem solid rgba(0, 0, 0, 0.05);
  box-sizing: border-box;
  border-radius: 50%;
`;

const ShareButton = styled.button`
  background: none;
  border: none;

  svg {
    width: 2.4rem;
    height: 2.4rem;
    color: #338a3e;
  }
`;

const CommentButton = styled.button`
  background: none;
  border: none;

  svg {
    width: 2.4rem;
    height: 2.4rem;
    color: #338a3e;
  }
`;

const Container = styled.div`
  width: 37.2rem;
  background: #ffffff;
  border: 0.1rem solid rgba(0, 0, 0, 0.15);
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  padding: 0.5rem;
`;
