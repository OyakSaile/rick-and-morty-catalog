import { Dispatch, SetStateAction } from "react";
import { Container } from "./styles";
import {
  ArrowLeft,
  ArrowLineLeft,
  ArrowRight,
  Book,
} from "@phosphor-icons/react";

interface PaginationProps {
  totalPages?: number;
  currentPage: number;
  setCurrentPage: Dispatch<SetStateAction<number>>;
}

export const Pagination: React.FC<PaginationProps> = ({
  totalPages,
  currentPage,
  setCurrentPage,
}) => {
  const handleNextPage = () => {
    window.scrollTo(0, 0);
    setCurrentPage((current) => current + 1);
  };
  const handlePreviousPage = () => {
    setCurrentPage((current) => current - 1);
  };

  return (
    <Container>
      <button onClick={handlePreviousPage} disabled={currentPage === 1}>
        <ArrowLeft weight="fill" size={24} />
      </button>
      <p>
        <Book weight="fill" /> : {currentPage}
      </p>
      <p>
        <ArrowLineLeft weight="fill" /> : {totalPages}
      </p>
      <button disabled={currentPage === totalPages} onClick={handleNextPage}>
        <ArrowRight weight="fill" size={24} />
      </button>
    </Container>
  );
};
