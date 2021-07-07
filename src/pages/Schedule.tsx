import { ArrowBackIos } from '@material-ui/icons';
import React from 'react';
import styled from 'styled-components';

const Schedule: React.FC = () => {
  return (
    <Container>
      <a href="" className="back">
        <ArrowBackIos />
      </a>
      <ul>
        <li>
          <h1>24/69 Fazer algo</h1>
        </li>
        <li>
          <h1>24/69 Fazer algo</h1>
        </li>
        <li>
          <h1>24/69 Fazer algo</h1>
        </li>
        <li>
          <h1>24/69 Fazer algo</h1>
        </li>
      </ul>
    </Container>
  );
};

export default Schedule;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 5rem;

  svg {
    width: 2.4rem;
    height: 2.4rem;
    color: #66bb6a;
    align-self: flex-start;
  }

  ul {
    align-self: center;
    padding: 2rem;
    list-style-type: none;
    li {
      text-decoration: none;
      padding: 2rem;

      h1 {
        font-family: Roboto;
        font-size: 3rem;
      }
    }
  }
  @media (orientation: landscape) {
    svg {
      width: 5rem;
      height: 5rem;
    }

    ul {
      padding: 4rem;
      align-self: flex-start;
      li {
        text-decoration: none;
        padding: 2.5rem;

        h1 {
          font-family: Roboto;
          font-size: 5rem;
          color: #000000;
        }
      }
    }
  }
`;
