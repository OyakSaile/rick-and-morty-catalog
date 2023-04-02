"use client";

import { useFavorite } from "@/context/Favorites/favorites";
import { Container } from "./styles";
import { Card } from "./components/Card";
import { useRouter } from "next/navigation";

export default function Favorites() {
  const { favorites } = useFavorite();
  const router = useRouter();

  const handleSelectCharacter = (id: number) => {
    router.push(`/character/${id}`);
  };

  return (
    <Container>
      {favorites.length ? (
        favorites.map(
          ({
            name,
            created,
            episode,
            gender,
            id,
            image,
            location,
            origin,
            species,
            status,
            type,
            url,
          }) => (
            <Card
              onClick={() => handleSelectCharacter(id)}
              key={id}
              characterId={id}
              imageLink={image}
              name={name}
              status={status}
            />
          )
        )
      ) : (
        <h1>No favorite character</h1>
      )}
    </Container>
  );
}
