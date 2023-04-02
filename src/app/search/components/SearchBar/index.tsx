import { FadersHorizontal, MagnifyingGlass } from "@phosphor-icons/react";
import {
  Container,
  FiltersContainer,
  SearchContainer,
  TextContainer,
} from "./styles";
import { Dispatch, SetStateAction, useState } from "react";

interface SearchBarProps {
  setCharacterName: Dispatch<SetStateAction<string>>;
  filters: {
    characterName: string;
    gender: string;
    status: string;
  };
  setFilters: Dispatch<
    SetStateAction<{
      characterName: string;
      gender: string;
      status: string;
    }>
  >;
  setCurrentPage: Dispatch<SetStateAction<number>>;
}
export const SearchBar: React.FC<SearchBarProps> = ({
  setCharacterName,
  setFilters,
  filters,
  setCurrentPage,
}) => {
  const [toogleFilters, setToogleFilters] = useState(false);

  const handleOpenFilters = () => {
    setToogleFilters((prevsState) => !prevsState);
  };

  const handleSetGender = (value: string) => {
    setFilters((prevState) => ({ ...prevState, gender: value }));
  };

  const handleSetStatus = (value: string) => {
    setFilters((prevState) => ({ ...prevState, status: value }));
  };

  return (
    <Container>
      <TextContainer>
        <h1>RickBook</h1>
        <h2>Explore, see images, see informatios and much more..</h2>
        <p>
          developed by :{" "}
          <a
            target="_blank"
            href="https://www.linkedin.com/in/kayoeliasgverdan/"
          >
            Kayo Elias
          </a>
        </p>
      </TextContainer>

      <SearchContainer>
        <input
          onChange={(e) => {
            setCharacterName(e.target.value);
            setCurrentPage(1);
          }}
          placeholder="Type what you want to search"
          type="text"
        />
        <div>
          <button onClick={handleOpenFilters}>
            <FadersHorizontal /> Filters
          </button>
          {toogleFilters && (
            <FiltersContainer>
              <p>Gender</p>
              <button
                className={filters.gender === "" ? "selected" : ""}
                onClick={() => handleSetGender("")}
              >
                All
              </button>
              <button
                className={filters.gender === "male" ? "selected" : ""}
                onClick={() => handleSetGender("male")}
              >
                Male
              </button>
              <button
                className={filters.gender === "female" ? "selected" : ""}
                onClick={() => handleSetGender("female")}
              >
                Female
              </button>
              <button
                className={filters.gender === "unknown" ? "selected" : ""}
                onClick={() => handleSetGender("unknown")}
              >
                Unknown
              </button>

              <hr />
              <p>Status</p>
              <button
                className={filters.status === "unknown" ? "selected" : ""}
                onClick={() => handleSetStatus("unknown")}
              >
                Unknown
              </button>
              <button
                className={filters.status === "alive" ? "selected" : ""}
                onClick={() => handleSetStatus("alive")}
              >
                Alive
              </button>
              <button
                className={filters.status === "dead" ? "selected" : ""}
                onClick={() => handleSetStatus("dead")}
              >
                Dead
              </button>
              <hr />
            </FiltersContainer>
          )}
        </div>
      </SearchContainer>
    </Container>
  );
};
