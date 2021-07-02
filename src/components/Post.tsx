import React from 'react';

export interface PostProps {
  image?: string;
}

const Post: React.FC<PostProps> = ({ image, children }) => {
  return (
    <Container>
      {image && <img src={image} />}
      {children}
    </Container>
  );
};

export default Post;

import styled from 'styled-components';

const Container = styled.div``;
