import styled from "styled-components";

export const Container = styled.div`
  width: 56px;
  height: 56px;
  border-radius: 50%;
  border: 9px solid;
  border-color: #dbdcef;
  border-right-color: #474bff;
  animation: spinner-d3wgkg 1s infinite linear;

  @keyframes spinner-d3wgkg {
    to {
      transform: rotate(1turn);
    }
  }
`;
