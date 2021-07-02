import styled from 'styled-components';

export const Header = styled.div`
  width: 100%;
  height: 9.2rem;
  padding: 0 1.5rem;
  justify-content: space-between;
  display: flex;
  flex-direction: row;
  align-items: center;

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
`;
export const Body = styled.div`
  width: 100%;
  padding: 0 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Navigation = styled.div``;
