import React from 'react';
import styled from 'styled-components';
import { ChatBubble, Share } from '@material-ui/icons';
import { useState } from 'react';
import { HTMLAttributes } from 'react';

export interface PostProps extends HTMLAttributes<HTMLDivElement> {
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
  ...rest
}) => {
  const [clicked, setClicked] = useState<boolean>(false);
  return (
    <Container {...rest}>
      <Postbar>
        <img src={profilePhoto} alt="" />
        <a href={userProfile}>{username}</a>
      </Postbar>
      <Body image={image}>
        {image && <img src={image} />}
        <label>{children}</label>
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
  margin-left: 0.5rem;

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
  align-items: center;
  justify-content: center;
  align-self: center;

  width: 36.2rem;
  min-height: 5.6rem;
  margin: 0.5rem 0;

  label {
    font-family: Roboto;

    font-size: ${(p: { image?: string }) => (p.image ? '1.2rem' : '1.7rem')};

    color: #000000;
  }

  img {
    width: 99%;
    height: 16.3rem;
    background: #c4c4c4;
    object-fit: cover;
    margin: 0.5rem 0;
    object-position: top;
  }

  @media (orientation: landscape) {
    width: 49.1rem;

    img {
      height: 21.535rem;
    }

    label {
      font-size: ${(p: { image?: string }) => (p.image ? '1.5rem' : '2.3rem')};
      max-width: 47.8rem;
      max-height: 7.4rem;

      align-self: center;
      justify-self: center;
    }
  }
`;

const Options = styled.div`
  display: flex;
  flex-direction: row;
  width: 8.4rem;
  justify-content: space-between;
  margin-left: 0.5rem;

  @media (orientation: landscape) {
    width: 11.147rem;
    height: 3.503rem;
  }
`;

const Like = styled.button`
  width: 2.2rem;
  height: 2.2rem;

  background: ${(p: { clicked: boolean }) =>
    p.clicked ? '#d32f2f' : '#c4c4c4'};
  border: 0.1rem solid rgba(0, 0, 0, 0.05);
  box-sizing: border-box;
  border-radius: 50%;

  @media (orientation: landscape) {
    width: 3.5rem;
    height: 3.5rem;
  }
`;

const ShareButton = styled.button`
  background: none;
  border: none;

  svg {
    width: 2.4rem;
    height: 2.4rem;
    color: #338a3e;
  }

  @media (orientation: landscape) {
    svg {
      width: 3.185rem;
      height: 3.185rem;
    }
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
  @media (orientation: landscape) {
    svg {
      width: 3.185rem;
      height: 3.185rem;
    }
  }
`;

const Container = styled.div`
  width: 37.2rem;
  background: #ffffff;
  border: 0.1rem solid rgba(0, 0, 0, 0.15);
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  padding: 0.5rem 0;

  @media (orientation: landscape) {
    width: 49.1rem;
  }
`;
