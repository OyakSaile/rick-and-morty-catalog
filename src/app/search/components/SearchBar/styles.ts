import { colors } from "@/styles/theme/colors";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;

  > h2 {
    font-size: 2rem;
    font-weight: bold;
  }
`;

export const TextContainer = styled.div`
  margin-top: 2.125rem;
  > h1 {
    color: #adddf6;
    font-size: 2rem;
  }

  > h2 {
    font-size: 14px;
    color: #8e9db2;
    font-weight: 400;
    margin-bottom: 1rem;
  }
`;

export const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  > input {
    padding-left: 1rem;
    width: 500px;
    height: 42px;
    margin-top: 1rem;
    border: 1px solid #f1f3f6;
    border-radius: 8px;
  }

  > div {
    position: relative;
    > button {
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 8px;
      gap: 1rem;
      padding: 1rem;
      cursor: pointer;
      height: 42px;
      margin-top: 1rem;
      border: 1px solid #f1f3f6;
      background-color: #fff;
      transition: all 0.2s;

      &:hover {
        background: #adddf6;
        color: #fff;

        > svg {
          fill: #fff;
        }
      }
    }
  }

  @media screen and (max-width: 768px) {
    > input {
      width: 100%;

      > div {
        > button {
          width: 100%;
        }
      }
    }
  }
`;

export const FiltersContainer = styled.div`
  top: 5rem;
  padding: 1rem;
  position: absolute;
  width: 250px;
  z-index: 3;
  border-radius: 8px;
  background: #fff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  display: flex;
  flex-direction: column;
  gap: 1rem;

  > button {
    padding: 0.8rem;
    border-radius: 8px;
    cursor: pointer;
    border: 0;
    &.selected {
      background: ${colors.blue.primary};
    }
  }

  @media screen and (max-width: 768px) {
    top: 5rem;
    width: 150px;
    left: -5rem;
  }
`;
