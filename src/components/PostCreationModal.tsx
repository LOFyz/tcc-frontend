import { IconButton, Modal } from '@material-ui/core';
import { ArrowBack } from '@material-ui/icons';
import React from 'react';
import styled from 'styled-components';

const PostCreationModal: React.FC<{ open: boolean; handleModal: () => void }> =
  (open, handleModal) => {
    return (
      <Modal
        open={open.open}
        onClose={handleModal}
        style={{
          overflowY: 'scroll',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Container>
          <AppBar>
            <div>
              <IconButton onClick={handleModal}>
                <ArrowBack />
              </IconButton>
              <h1>Profile creation</h1>
            </div>
          </AppBar>
        </Container>
      </Modal>
    );
  };

export default PostCreationModal;

const Container = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  border-radius: 1%;

  background: ${(props) => props.theme.palette.background.default};
  border: 1px solid rgba(0, 0, 0, 0.2);
  box-sizing: border-box;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
`;

const AppBar = styled.div`
  height: 8.3333333333333%;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding-left: 1.3888888888889%;

  div {
    display: flex;
    flex-direction: row;
    align-items: center;

    svg {
      height: 24px;
      width: auto;
      margin-right: 10px;
      color: ${(props) => props.theme.palette.text.primary};
      cursor: pointer;
    }

    h1 {
      font: 700 30px 'Roboto';
      color: ${(props) => props.theme.palette.text.primary};
    }
  }
`;
