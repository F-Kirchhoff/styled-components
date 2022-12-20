import styled from "styled-components";

export default styled.section`
  display: flex;
  flex-direction: ${({ direction }) => direction};
  gap: 2rem;
  margin-block-end: 2rem;
  background-color: ${({ bgColor }) => bgColor};
`;
