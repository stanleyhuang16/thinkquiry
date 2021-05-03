import styled from 'styled-components';

export const Button = styled.button`
  width: 100px;
  height: 25px;
  background-color: ${(props) => props.backgroundColor};
  &:hover {
    background-color: hotpink;
    & label {
      color: black;
    }
  }
`;

export const ButtonLabel = styled.label`
  font-size: 15px;
  color: white;
`;
