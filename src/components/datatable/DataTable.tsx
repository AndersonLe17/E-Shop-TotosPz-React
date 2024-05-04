import { IconDotsVertical, IconFileExport } from "@tabler/icons-react";
import { SelectCustom } from "../input";
import { paginationOptions } from "../../utils/pagination.util";
import { ButtonOutline } from "../button";
import { cn } from "../../config/clsx.config";
import Pagination from "./Pagination";
import { Pagination as PaginationInt } from "../../domain/interfaces/pagination/pagination.interface";
import moment from "moment";
import { capitalizeEachWord, roleToText } from "../../utils/string.util";

interface DataTableProps {
  headers: Array<{ minWidth: string; th: string }>;
  data: Array<any>;
  pagination: PaginationInt;
}

const DataTable = ({ headers, data, pagination }: DataTableProps) => {
  return (
    <>
      <div className="flex justify-between">
        <SelectCustom label="Size" options={paginationOptions} option={{ value: "10", label: "10" }} className="w-28" />
        <ButtonOutline variant="dark" className="h-fit">
          <IconFileExport size={20} />
          Exportar
        </ButtonOutline>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full table-auto font-inter">
          <thead className="bg-gray-200 text-sm">
            <tr className="whitespace-nowrap uppercase">
              {headers.map((header, index) => (
                <th key={index} className={cn("p-3 text-start", header.minWidth)}>
                  {header.th}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={index} className="border-b-[1px] border-gray">
                <td className="min-w-64 p-3">
                  <strong className="font-semibold">{roleToText(item.perfNom)}</strong>
                </td>
                <td className="min-w-80 p-3">{item.perfDes}</td>
                <td className="min-w-36 p-3">
                  <strong className="font-semibold">{item.usuMod.usuNom}</strong>
                </td>
                <td className="min-w-32 p-3">
                  <strong className="font-semibold">{moment(item.fecHorMod).format("DD MMMM YYYY")}</strong>
                  <p className="text-sm">{moment(item.fecHorMod).format("h:mm:ss A")}</p>
                </td>
                <td className="min-w-28 p-3">
                  <span className="rounded-lg bg-success px-3 py-[2px] text-sm text-light">{capitalizeEachWord(item.perfEst)}</span>
                </td>
                <td className="min-w-28 p-3">
                  <button>
                    <IconDotsVertical />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Pagination pagination={pagination} />
    </>
  );
};

export default DataTable;
