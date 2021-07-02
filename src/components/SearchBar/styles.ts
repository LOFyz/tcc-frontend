import styled from 'styled-components';

export const Container = styled.div`
  svg {
    position: absolute;
    margin: 0.2rem 0.5rem;
    color: #c4c4c4;
    width: 1.9rem;
    height: 1.9rem;
  }
`;

export const StyledTextInput = styled.input.attrs({ type: 'text' })`
  width: 37.2rem;
  height: 2.3rem;
  background: #ffffff;
  border: none;
  box-shadow: 0rem 0rem 0.3rem rgba(0, 0, 0, 0.25);
  border-radius: 0.5rem;
  padding: 0 3rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  color: #c4c4c4;

  ::placeholder {
    text-align: center;
    color: #c4c4c4;
  }
`;
