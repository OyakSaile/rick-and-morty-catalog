/* eslint-disable @next/next/no-img-element */
"use client";

import { useQuery } from "react-query";
import {
  BannerContainer,
  CharacterImageContainer,
  Container,
  CharacterInformationContainer,
  StatusContainer,
} from "./styles";
import {
  ArrowLeft,
  Compass,
  GenderNeuter,
  LockLaminatedOpen,
  Star,
} from "@phosphor-icons/react";
import { useState } from "react";
import { useFavorite } from "@/context/Favorites/favorites";

interface CharacterProps {
  params: {
    characterid: string;
  };
}

interface CharacterApiData {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: {
    name: string;
    url: string;
  };
  location: {
    name: string;
    url: string;
  };
  image: string;
  episode: string[];
  url: string;
  created: string;
}

export default function Character({ params }: CharacterProps) {
  const {
    handleFavoriteCharacter,
    handleRemoveFavoriteCharacter,
    hasFavorite,
    favorites,
  } = useFavorite();

  const { isLoading, error, data } = useQuery<CharacterApiData>(
    ["character"],
    () =>
      fetch(
        `https://rickandmortyapi.com/api/character/${params.characterid}`
      ).then((res) => res.json())
  );

  if (error) return <span>An error has occurred</span>;

  const isFavorite = hasFavorite(data?.id ?? 0);

  return (
    <Container>
      <BannerContainer>
        <img
          src="https://source.unsplash.com/collection/10654906/1280x720"
          alt=""
        />
        <CharacterImageContainer>
          <img src={data?.image} alt="" />
        </CharacterImageContainer>
      </BannerContainer>

      <CharacterInformationContainer>
        {data &&
          (isFavorite && data ? (
            <Star
              onClick={() => handleRemoveFavoriteCharacter(data.id)}
              weight="fill"
            />
          ) : (
            <Star
              onClick={() => handleFavoriteCharacter(data)}
              weight="light"
            />
          ))}

        <p>
          I am a {data?.gender} {data?.species} named {data?.name} <br /> and I
          am currently {data?.status}. I hail {data?.origin.name}.
        </p>
      </CharacterInformationContainer>

      <StatusContainer>
        <span>
          <Compass weight="fill" />
          {data?.location.name}
        </span>
      </StatusContainer>
    </Container>
  );
}
