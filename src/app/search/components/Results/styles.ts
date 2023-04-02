import styled from "styled-components";

export const Container = styled.div`
  justify-content: space-between;
  display: grid;
  grid-template-columns: 700px;
  justify-content: center;
  align-items: center;
  gap: 1rem;

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;
