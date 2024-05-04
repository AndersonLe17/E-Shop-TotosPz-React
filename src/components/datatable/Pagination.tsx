import { IconCaretLeftFilled, IconCaretRightFilled } from "@tabler/icons-react";
import { ButtonOutline } from "../button";
import { Pagination as PaginationInt } from "../../domain/interfaces/pagination/pagination.interface";

interface PaginationProps {
  pagination: PaginationInt;
}

const Pagination = ({ pagination }: PaginationProps) => {
  const { totalDocs, totalPages, page,  } = pagination;
  return (
    <div className="flex items-center justify-between">
      <p className="font-inter text-base text-dark">Mostrando 1 a 10 registros de {pagination.totalDocs}</p>
      <div className="flex">
        <ButtonOutline variant="dark" disabled className="size-10 rounded-e-none border-[0.25px] border-gray-400 p-0 shadow-none">
          <IconCaretLeftFilled size={14} />
        </ButtonOutline>
        <ButtonOutline variant="dark" className="size-10 rounded-none border-[0.25px] border-gray-400 p-0 shadow-none">
          1
        </ButtonOutline>
        <ButtonOutline variant="dark" className="size-10 rounded-none border-[0.25px] border-gray-400 p-0 shadow-none">
          2
        </ButtonOutline>
        <ButtonOutline variant="dark" className="size-10 rounded-none border-[0.25px] border-gray-400 p-0 shadow-none">
          3
        </ButtonOutline>
        <ButtonOutline variant="dark" className="size-10 rounded-none border-[0.25px] border-gray-400 p-0 shadow-none">
          4
        </ButtonOutline>
        <ButtonOutline variant="dark" className="size-10 rounded-none border-[0.25px] border-gray-400 p-0 shadow-none">
          5
        </ButtonOutline>
        <ButtonOutline variant="dark" disabled className="size-10 rounded-none border-[0.25px] border-gray-400 p-0 shadow-none">
          ...
        </ButtonOutline>
        <ButtonOutline variant="dark" className="size-10 rounded-none border-[0.25px] border-gray-400 p-0 shadow-none">
          10
        </ButtonOutline>
        <ButtonOutline variant="dark" className="size-10 rounded-s-none border-[0.25px] border-gray-400 p-0 shadow-none">
          <IconCaretRightFilled size={14} />
        </ButtonOutline>
      </div>
    </div>
  );
};

export default Pagination;
