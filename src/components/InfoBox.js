import styled, { css } from "styled-components";

const StyledInfoBox = styled.section`
  padding: 2rem;
  border: 0.25rem solid black;

  ${({ variant }) =>
    variant === "success" &&
    css`
      color: turquoise;
      border-color: turquoise;
    `}

  ${({ variant }) =>
    variant === "error" &&
    css`
      color: red;
      border-color: red;
    `}
`;

export default function InfoBox({ title, message, variant }) {
  return (
    <StyledInfoBox variant={variant}>
      <h2>{title}</h2>
      <p>{message}</p>
    </StyledInfoBox>
  );
}
