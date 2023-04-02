import styled from "styled-components";

export const Container = styled.div`
  margin: 2rem 0;
  display: flex;
  gap: 1rem;
  padding: 2rem;
  flex-direction: column;
  border: 1px solid #f1f3f6;
  backdrop-filter: blur(2px);
  border-radius: 5px;
  cursor: pointer;
`;
export const ContainerImage = styled.div`
  display: flex;
  gap: 1rem;
  > img {
    object-fit: cover;
    border-radius: 50%;
    height: 100px;
  }
`;

export const Content = styled.div`
  > p {
    margin: 1rem 0;
  }
  > img {
    height: 500px;
    width: 100%;
    object-fit: cover;
  }
`;
