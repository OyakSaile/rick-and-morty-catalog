import { MagnifyingGlass } from "@phosphor-icons/react";
import { Container } from "./styles";
import { QueryClient, QueryClientProvider, useQuery } from "react-query";
import { Card } from "./components/Card";
import { ApiData, ResultsI } from "../..";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Loader } from "@/components/Loader";

interface ResultsProps {
  results: ResultsI[] | undefined;
  isLoading: boolean;
}

export const Results: React.FC<ResultsProps> = ({ results, isLoading }) => {
  const router = useRouter();

  const handleSelectCharacter = (id: number) => {
    router.push(`/character/${id}`);
  };

  if (isLoading) return <Loader />;

  return (
    <Container>
      {results?.map(({ id, image, name, status }) => (
        <Card
          onClick={() => handleSelectCharacter(id)}
          name={name}
          status={status}
          characterId={id}
          imageLink={image}
          key={id}
        />
      ))}
    </Container>
  );
};
