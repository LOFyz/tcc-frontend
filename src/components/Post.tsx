import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { ChatBubble, Share } from '@material-ui/icons';
import { useState } from 'react';
import { HTMLAttributes } from 'react';

export interface PostProps extends HTMLAttributes<HTMLDivElement> {
  image?: string;
  username: string;
  userProfile: string;
  profilePhoto: string;
  size?: number;
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
        <Link to={userProfile} className="link">
          <img src={profilePhoto} alt="" />
          <label>{username}</label>
        </Link>
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
  margin-left: ${(e: { size?: number }) => {
    return e.size ? 0.5 * e.size : 0.5;
  }}rem;

  .link {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-left: ${(e: { size?: number }) => {
      return e.size ? 0.5 * e.size : 0.5;
    }}rem;
    text-decoration: none;
  }

  img {
    width: ${(e: { size?: number }) => {
      return e.size ? 3.2 * e.size : 3.2;
    }}rem;
    height: ${(e: { size?: number }) => {
      return e.size ? 3.2 * e.size : 3.2;
    }}rem;
    border-radius: 50%;
    background: #c4c4c4;
  }

  label {
    width: ${(e: { size?: number }) => {
      return e.size ? 10.4 * e.size : 10.4;
    }}rem;
    height: ${(e: { size?: number }) => {
      return e.size ? 1.4 * e.size : 1.4;
    }}rem;
    font-family: 'Varela Round';
    font-style: normal;
    font-weight: normal;
    font-size: ${(e: { size?: number }) => {
      return e.size ? 1.4 * e.size : 1.4;
    }}rem;
    color: #338a3e;
    padding-left: ${(e: { size?: number }) => {
      return e.size ? 0.5 * e.size : 0.5;
    }}rem;
    text-decoration: none;
  }
`;

const Body = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  align-self: center;

  width: 100%;
  min-height: ${(e: { size?: number; image?: string }) => {
    return e.size ? 5.6 * e.size : 5.6;
  }}rem;
  margin: ${(e: { size?: number; image?: string }) => {
      return e.size ? 0.5 * e.size : 0.5;
    }}rem
    0;

  label {
    font-family: Roboto;
    width: 100%;
    padding: 0
      ${(e: { size?: number; image?: string }) => {
        return e.size ? 1 * e.size : 1;
      }}rem;

    font-size: ${(p: { size?: number; image?: string }) =>
      p.image ? (p.size ? 1.2 * p.size : 1.2) : p.size ? 1.7 * p.size : 1.7}rem;

    color: #000000;
  }

  img {
    width: 99%;
    height: ${(e: { size?: number; image?: string }) => {
      return e.size ? 16.3 * e.size : 16.3;
    }}rem;
    background: #c4c4c4;
    object-fit: cover;
    margin: ${(e: { size?: number; image?: string }) => {
        return e.size ? 0.5 * e.size : 0.5;
      }}rem
      0;
    object-position: top;
  }

  @media (orientation: landscape) {
    width: 100%;

    img {
      height: ${(e: { size?: number; image?: string }) => {
        return e.size ? 21.535 * e.size : 21.535;
      }}rem;
    }

    label {
      font-size: ${(p: { size?: number; image?: string }) =>
        p.image
          ? p.size
            ? 1.5 * p.size
            : 1.5
          : p.size
          ? 2.3 * p.size
          : 2.3}rem;
      width: 100%;

      align-self: center;
      justify-self: center;
    }
  }
`;

const Options = styled.div`
  display: flex;
  flex-direction: row;
  width: ${(e: { size?: number; image?: string }) => {
    return e.size ? 8.4 * e.size : 8.4;
  }}rem;
  justify-content: space-between;
  margin-left: ${(e: { size?: number; image?: string }) => {
    return e.size ? 0.5 * e.size : 0.5;
  }}rem;

  @media (orientation: landscape) {
    width: ${(e: { size?: number; image?: string }) => {
      return e.size ? 11.147 * e.size : 11.147;
    }}rem;
    height: ${(e: { size?: number; image?: string }) => {
      return e.size ? 3.503 * e.size : 3.503;
    }}rem;
  }
`;

const Like = styled.button`
  width: ${(e: { size?: number; clicked: boolean }) => {
    return e.size ? 2.2 * e.size : 2.2;
  }}rem;
  height: ${(e: { size?: number; clicked: boolean }) => {
    return e.size ? 2.2 * e.size : 2.2;
  }}rem;

  background: ${(p: { size?: number; clicked: boolean }) =>
    p.clicked ? '#d32f2f' : '#c4c4c4'};
  border: ${(e: { size?: number; clicked: boolean }) => {
      return e.size ? 0.1 * e.size : 0.1;
    }}rem
    solid rgba(0, 0, 0, 0.05);
  box-sizing: border-box;
  border-radius: 50%;

  width: ${(e: { size?: number; clicked: boolean }) => {
    return e.size ? 3.5 * e.size : 3.5;
  }}rem;
  height: ${(e: { size?: number; clicked: boolean }) => {
    return e.size ? 3.5 * e.size : 3.5;
  }}rem;
`;

const ShareButton = styled.button`
  background: none;
  border: none;

  svg {
    width: ${(e: { size?: number }) => {
      return e.size ? 2.4 * e.size : 2.4;
    }}rem;
    height: ${(e: { size?: number }) => {
      return e.size ? 2.4 * e.size : 2.4;
    }}rem;
    color: #338a3e;
  }

  @media (orientation: landscape) {
    svg {
      width: ${(e: { size?: number }) => {
        return e.size ? 3.185 * e.size : 3.185;
      }}rem;
      height: ${(e: { size?: number }) => {
        return e.size ? 3.185 * e.size : 3.185;
      }}rem;
    }
  }
`;

const CommentButton = styled.button`
  background: none;
  border: none;

  svg {
    width: ${(e: { size?: number }) => {
      return e.size ? 2.4 * e.size : 2.4;
    }}rem;
    height: ${(e: { size?: number }) => {
      return e.size ? 2.4 * e.size : 2.4;
    }}rem;
    color: #338a3e;
  }
  @media (orientation: landscape) {
    svg {
      width: ${(e: { size?: number }) => {
        return e.size ? 3.185 * e.size : 3.185;
      }}rem;
      height: ${(e: { size?: number }) => {
        return e.size ? 3.185 * e.size : 3.185;
      }}rem;
    }
  }
`;

const Container = styled.div`
  width: ${(e: { size?: number }) => {
    return e.size ? 37.2 * e.size : 37.2;
  }}rem;
  background: #ffffff;
  border: ${(e: { size?: number }) => {
      return e.size ? 0.1 * e.size : 0.1;
    }}rem
    solid rgba(0, 0, 0, 0.15);
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  padding: ${(e: { size?: number }) => {
      return e.size ? 0.5 * e.size : 0.5;
    }}rem
    0;

  @media (orientation: landscape) {
    width: ${(e: { size?: number }) => {
      return e.size ? 49.1 * e.size : 49.1;
    }}rem;
  }
`;
