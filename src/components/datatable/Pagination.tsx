import { IconCaretLeftFilled, IconCaretRightFilled } from "@tabler/icons-react";
import { ButtonOutline } from "../button";
import { Pagination as PaginationInt } from "../../domain/interfaces/pagination/pagination.interface";
import { cn } from "../../config/clsx.config";
import { paginationLinks } from "../../utils/pagination.util";

interface PaginationProps {
  pagination: PaginationInt;
  onChangePage?: (name: string, value: string) => void;
}

const Pagination = ({ pagination, onChangePage }: PaginationProps) => {
  const { totalDocs, totalPages, page, size, numberOfElements, prevPage, nextPage, hasPrevPage, hasNextPage} = pagination;

  const pageHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    onChangePage && onChangePage("page", e.currentTarget.dataset.page!);
  };

  return (
    <div className="flex items-center justify-between">
      <p className="font-inter text-base text-dark">
        Mostrando {page * size + 1} a {page * size + numberOfElements} registros de {totalDocs}
      </p>
      <div className="flex">
        <ButtonOutline
          variant="dark"
          disabled={!hasPrevPage}
          onClick={pageHandler}
          data-page={prevPage}
          className="size-10 rounded-e-none border-[0.25px] border-gray-400 p-0 shadow-none"
        >
          <IconCaretLeftFilled size={14} />
        </ButtonOutline>
        {paginationLinks(totalPages, page).map((i) => (
          <ButtonOutline
            key={i}
            variant="dark"
            disabled={i === "..."}
            onClick={pageHandler}
            data-page={parseInt(i) - 1}
            className={cn("size-10 rounded-none border-[0.25px] border-gray-400 p-0 shadow-none", { "bg-black text-light": i == (page + 1).toString() })}
          >
            {i}
          </ButtonOutline>
        ))}
        <ButtonOutline
          variant="dark"
          disabled={!hasNextPage}
          onClick={pageHandler}
          data-page={nextPage}
          className="size-10 rounded-s-none border-[0.25px] border-gray-400 p-0 shadow-none"
        >
          <IconCaretRightFilled size={14} />
        </ButtonOutline>
      </div>
    </div>
  );
};

export default Pagination;
