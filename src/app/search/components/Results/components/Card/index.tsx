/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import { MagnifyingGlass } from "@phosphor-icons/react";
import { Container, ContainerImage, Content } from "./styles";
import Image from "next/image";
import { HTMLAttributes, InputHTMLAttributes, useEffect } from "react";

interface CardProps extends HTMLAttributes<HTMLElement> {
  imageLink: string;
  name: string;
  characterId: number;
  status: string;
}
export const Card: React.FC<CardProps> = ({
  imageLink,
  name,
  status,
  characterId,
  ...rest
}) => {
  return (
    <Container {...rest}>
      <ContainerImage>
        <img src={imageLink} alt="Rick" />
        <div>
          <h3>{name}</h3>
          <p>{status}</p>
          <p>@{name.replace(" ", "_")}</p>
        </div>
      </ContainerImage>
      <Content>
        <p>Look my picture:</p>
        <img
          src={`https://source.unsplash.com/random/500x500?sig=${characterId}`}
        />
      </Content>
    </Container>
  );
};
