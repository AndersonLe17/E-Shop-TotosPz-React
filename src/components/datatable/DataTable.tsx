import { IconCaretDownFilled, IconCaretUpFilled, IconFileExport } from "@tabler/icons-react";
import { SelectCustom } from "../input";
import { paginationOptions } from "../../utils/pagination.util";
import { ButtonOutline } from "../button";
import { cn } from "../../config/clsx.config";
import Pagination from "./Pagination";
import { Pagination as PaginationInt } from "../../domain/interfaces/pagination/pagination.interface";

interface DataTableProps {
  headers: Array<{ minWidth: string; th: string; order?: boolean }>;
  data: Array<any>;
  formats: Array<(data: any) => JSX.Element | undefined>;
  pagination: PaginationInt;
  isLoading?: boolean;
  onChangePagination?: (name: string, value: string) => void;
}

const DataTable = ({ headers, data, formats, pagination, isLoading = true, onChangePagination }: DataTableProps) => {
  return (
    <>
      <div className="flex justify-between">
        <SelectCustom
          label="Size"
          options={paginationOptions}
          option={{ value: "10", label: "10" }}
          name="size"
          onSelected={onChangePagination}
          className="w-28"
        />
        <ButtonOutline variant="dark" className="h-fit">
          <IconFileExport size={20} />
          Exportar
        </ButtonOutline>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full table-auto font-inter">
          <thead className="bg-gray-200 text-sm">
            <tr className="whitespace-nowrap uppercase">
              {headers.map((h, index) => (
                <th key={index} className={cn("p-3 text-start", h.minWidth)}>
                  <div className="flex justify-between">
                    <span>{h.th}</span>
                    {h.order && (
                      <span
                        onClick={() =>
                          onChangePagination && onChangePagination("sort", "fecHorMod,".concat(pagination.sort.split(",")[1] === "ASC" ? "DESC" : "ASC"))
                        }
                        className="cursor-pointer font-light text-gray-700"
                      >
                        {pagination.sort.split(",")[1] === "ASC" ? <IconCaretUpFilled size={18} stroke={1} /> : <IconCaretDownFilled size={18} stroke={1} />}
                      </span>
                    )}
                  </div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="transition-all duration-700 ease-in-out">
            {isLoading &&
              Array(10)
                .fill(1)
                .map((_, index) => (
                  <tr key={index} className="animate-pulse border-b-[1px] border-gray">
                    {headers.map((h, index) => (
                      <td key={index} className={cn("px-3 py-5 text-start", h.minWidth)}>
                        <p className="h-3 w-4/5 rounded bg-gray-300"></p>
                      </td>
                    ))}
                  </tr>
                ))}
            {data.map((item, index) => (
              <tr key={index} className="border-b-[1px] border-gray">
                {formats.map((format, idx) => (
                  <td key={index + "-" + idx} className="p-3">
                    {format && format(item)}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Pagination pagination={pagination} onChangePage={onChangePagination} />
    </>
  );
};

export default DataTable;
