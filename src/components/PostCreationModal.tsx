import React from 'react';
import styled from 'styled-components';

const PostCreationModal: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  return (
    <>
      <Background onClick={onClose} />
      <Container></Container>
    </>
  );
};

export default PostCreationModal;

const Background = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.2);
`;

const Container = styled.div`
  position: fixed;
  width: 70%;
  height: 80%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  flex-direction: column;
  background: #fff;
  overflow: auto;
  border-radius: 0.8rem;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`;
