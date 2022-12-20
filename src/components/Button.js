import styled from "styled-components";

const StyledButton = styled.button`
  all: unset;
  border: none;
  cursor: pointer;
  padding: 1rem;
  color: white;
  background-color: ${({ color }) =>
    color === "danger" ? "red" : "var(--primary-color)"};

  &:hover {
    background-color: var(--secondary-color);
  }

  &:active {
    transform: scale(0.96);
  }
`;

export default StyledButton;
