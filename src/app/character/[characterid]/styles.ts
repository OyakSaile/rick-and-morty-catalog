import { colors } from "@/styles/theme/colors";
import styled from "styled-components";

export const Container = styled.div`
  padding: 2rem;
  display: flex;
  min-height: 100vh;
  flex-direction: column;
  width: 100%;
  background-color: #fdfdfd;
  font-size: 8rem;
  color: #262626;
  font-smoothing: antialiased;
`;

export const BannerContainer = styled.div`
  width: 100%;
  border-radius: 8px;
  position: relative;
  > img {
    width: 100%;
    max-height: 350px;
    object-fit: cover;
    border-radius: 8px;
  }
`;

export const CharacterImageContainer = styled.div`
  position: absolute;
  bottom: -5rem;
  padding-left: 3rem;
  > img {
    border-radius: 50%;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  }

  @media screen and (max-width: 768px) {
    > img {
      width: 150px;
    }
  }
`;

export const CharacterInformationContainer = styled.div`
  padding-left: 3rem;
  margin-top: 4rem;
  > h1 {
    font-size: 4rem;
  }

  > p {
    font-size: 2rem;
  }

  > svg {
    font-size: 2.5rem;
    fill: yellow;
    cursor: pointer;
  }
`;

export const StatusContainer = styled.div`
  padding-left: 3rem;
  margin-top: 0.8rem;
  > span {
    display: flex;
    align-items: center;
    font-size: 1.5rem;
    gap: 0.5rem;
    > svg {
      fill: ${colors.blue.primary};
    }
  }
`;
