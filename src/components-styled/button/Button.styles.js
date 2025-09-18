import styled from "styled-components";

export const StyledButton = styled.button`
  border: none;
  cursor: pointer;
  transition: 0.5s all ease-out;
  background: none;
`;

export const BasicButton = styled(StyledButton)`
  border: 3.5px solid var(--dark-green);
  border-radius: 4px;
  color: var(--dark-green);
  font-family: var(--montserrat);
  font-size: var(--fs-sm);
  font-weight: var(--weight-bold);
  padding: 5px 10px;

  &:hover {
    background-color: var(--dark-green);
    color: var(--beige);
    box-shadow: var(--shadow);
    transform: translateY(-2px);
  }
`;

export const ButtonSolid = styled(StyledButton)`
  background-color: var(--light-green);
  padding: 8px 10px;
  color: var(--beige);
  border-radius: 4px;
  font-family: var(--montserrat);
  font-size: var(--fs-sm);
  font-weight: var(--weight-bold);
  border: 3.5px solid var(--light-green);

  &:hover {
    background-color: var(--beige);
    color: var(--light-green);
    border: 3.5px dashed var(--light-green);
    box-shadow: var(--shadow);
    transform: translateY(-2px);
  }
`;

export const BasicButtonLightGreen = styled(BasicButton)`
  border: 3.5px solid var(--light-green);
  color: var(--light-green);

  &:hover {
    background-color: var(--light-green);
    color: var(--beige);
    box-shadow: var(--shadow);
    transform: translateY(-2px);
  }
`;

export const CardButton = styled(StyledButton)`
  display: block;
  max-width: 350px;
  aspect-ratio: 1;
  position: relative;
  border-radius: 4px;
`;
