import styled from "styled-components";

export const StyledButton = styled.button`
  border: none;
  cursor: pointer;
  transition: 0.5s all ease-out;
  background: none;
`;

export const BasicButton = styled(StyledButton)`
  border: 2px solid var(--dark-green);
  border-radius: 4px;
  color: var(--dark-green);
  font-family: var(--montserrat);
  font-size: var(--fs-sm);
  font-weight: var(--weight-bold);
  padding: 5px 10px;

  &:hover {
    background-color: var(--dark-green);
    color: var(--beige-2);
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
