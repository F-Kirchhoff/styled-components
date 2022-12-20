import styled, { css } from "styled-components";

export default function InfoBox({ title, message, variant }) {
  return (
    <StyledInfoBox variant={variant}>
      <h2>{title}</h2>
      <p>{message}</p>
    </StyledInfoBox>
  );
}

const StyledInfoBox = styled.aside`
  padding: 2rem;
  border: 0.25rem solid black;

  ${({ variant }) =>
    variant === "error" &&
    css`
      color: red;
      border-color: red;
      font-size: 2rem;
    `}

  ${({ variant }) =>
    variant === "success" &&
    css`
      color: green;
      border-color: green;
    `}
`;
