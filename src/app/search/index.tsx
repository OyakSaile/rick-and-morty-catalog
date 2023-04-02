import { useQuery } from "react-query";
import { Results } from "./components/Results";
import { SearchBar } from "./components/SearchBar";
import { useState } from "react";
import { Pagination } from "./components/Pagination";
import Image from "next/image";
import { Container, ContainerContent } from "./styles";
import { Loader } from "@/components/Loader";

export interface ResultsI {
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

export interface ApiData {
  info: {
    count: number;
    next: string | null;
    pages: number;
    prev: string | null;
  };
  results: ResultsI[];
}

export default function Search() {
  const [filters, setFilters] = useState({
    characterName: "",
    gender: "",
    status: "",
  });
  const [currentPage, setCurrentPage] = useState(1);
  const [characterName, setCharacterName] = useState("");

  const { isLoading, error, data } = useQuery<ApiData, Error>(
    ["characters", currentPage, filters],
    () =>
      fetch(
        `https://rickandmortyapi.com/api/character?page=${currentPage}&name=${characterName}&gender=${filters.gender}&status=${filters.status}`
      ).then((res) => res.json()),
    {
      keepPreviousData: true,
    }
  );

  if (error) return <span>An error has occurred</span>;

  return (
    <Container>
      <SearchBar
        setCharacterName={setCharacterName}
        filters={filters}
        setFilters={setFilters}
        setCurrentPage={setCurrentPage}
      />
      {data?.results && (
        <ContainerContent>
          <Pagination
            setCurrentPage={setCurrentPage}
            currentPage={currentPage}
            totalPages={data?.info.pages}
          />
          <Results isLoading={isLoading} results={data?.results} />
          <Pagination
            setCurrentPage={setCurrentPage}
            currentPage={currentPage}
            totalPages={data?.info.pages}
          />
        </ContainerContent>
      )}
    </Container>
  );
}
