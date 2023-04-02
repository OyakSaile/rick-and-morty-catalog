import { colors } from "@/styles/theme/colors";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 2rem 0;
  padding: 2rem 0;

  > button {
    padding: 1rem;

    background-color: ${colors.blue.primary};
    border: 0;
    border-radius: 8px;
    cursor: pointer;
  }

  > p {
    display: flex;
    align-items: center;
    gap: 0.8rem;
    > svg {
      fill: ${colors.blue.primary};
    }
  }
`;
