import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  padding: 1rem;
  display: flex;
  gap: 1rem;
  align-items: center;
  > ul {
    list-style: none;
    display: flex;
    gap: 1rem;
    width: 100%;

    > li {
      > a {
        text-decoration: none;
      }
    }
  }
`;
