import styled from "styled-components";

export default styled.button`
  all: unset;
  border: none;
  cursor: pointer;
  padding: 1rem;
  background-color: ${({ color }) =>
    color === "danger" ? "var(--danger)" : "var(--primary-color)"};

  &:hover {
    color: black;
    background-color: var(--secondary-color);
  }
`;
