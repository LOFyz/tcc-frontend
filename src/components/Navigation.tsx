import styled from 'styled-components';
import React from 'react';

const components: React.FC = ({ children }) => {
  return <Navigation>{children}</Navigation>;
};

export default components;

export const Navigation = styled.div`
  background: #66bb6a;
  width: 100%;
  height: 7.2rem;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  position: fixed;
  bottom: 0;

  button {
    background: none;
    border: none;
  }

  svg {
    width: 3rem;
    height: 3rem;
    color: #fff;
  }

  a,
  .title {
    display: none;
  }

  @media (orientation: landscape) {
    width: 33.7rem;
    height: auto;
    background: rgba(102, 187, 106, 0.84);
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    position: initial;
    scroll-behavior: unset;

    svg {
      width: 4rem;
      height: 4rem;
    }

    a,
    .title {
      display: initial;
      font-family: Roboto;
      font-style: normal;
      font-weight: normal;
      font-size: 2.3rem;
      text-decoration: none;
      margin-left: 0.5rem;

      color: #ffffff;
    }
    button {
      width: 100%;
      height: 7.368rem;
      background: rgba(0, 0, 0, 0.06);
      box-shadow: 0rem 0rem 0.4rem rgba(0, 0, 0, 0.03);
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: flex-start;
      padding-left: 2.5rem;
      margin-top: 0.4rem;
    }
  }
`;
