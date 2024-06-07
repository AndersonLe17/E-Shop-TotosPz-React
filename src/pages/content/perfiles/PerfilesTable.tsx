import moment from "moment";
import { DataTable } from "../../../components/datatable";
import { PerfilResponse } from "../../../domain/interfaces/perfil/perfil.interface";
import { capitalizeEachWord, roleToText } from "../../../utils/string.util";
import { useAppSelector } from "../../../redux/hook";
import { RootState } from "../../../redux/store";
import { ButtonDropdown } from "../../../components/button";
import { cn } from "../../../config/clsx.config";
import { Estado } from "../../../domain/enums/estado.enum";
import { perfilExportFetch } from "../../../fetch/perfil.fetch";

interface PerfilesTableProps {
  selectHandler: (name: string, value: string) => void;
  actionHandler: (e: React.MouseEvent<HTMLDivElement>) => void;
  altActionHandler: (e: React.MouseEvent<HTMLDivElement>) => void;
}

const PerfilesTable = ({ selectHandler, actionHandler, altActionHandler }: PerfilesTableProps) => {
  const { data, pagination, isLoading, reqFilters } = useAppSelector((state: RootState) => state.perfil);

  return (
    <div className="flex flex-col gap-3">
      <DataTable
        headers={[
          { th: "Perfil", minWidth: "min-w-64" },
          { th: "Permisos", minWidth: "min-w-72" },
          { th: "Usuario Mod", minWidth: "min-w-36" },
          { th: "Fecha Mod", minWidth: "min-w-40", order: true },
          { th: "Estado", minWidth: "min-w-28" },
          { th: "Acciones", minWidth: "min-w-28" },
        ]}
        data={data}
        formats={[
          (data: PerfilResponse) => (
            <>
              <strong className="font-semibold">{roleToText(data.perfNom)}</strong>
              <p className="text-sm">{data.perfDes}</p>
            </>
          ),
          (data: PerfilResponse) => <span className="text-sm">{data.perfDet}</span>,
          (data: PerfilResponse) => <strong className="font-semibold">{data.usuMod.usuNom}</strong>,
          (data: PerfilResponse) => (
            <>
              <strong className="font-semibold capitalize">{moment(data.fecHorMod).format("DD MMMM YYYY")}</strong>
              <p className="text-sm">{moment(data.fecHorMod).format("h:mm:ss A")}</p>
            </>
          ),
          (data: PerfilResponse) => (
            <span
              className={cn("rounded-lg bg-success px-3 py-[2px] text-sm text-light", {
                "bg-gray": data.perfEst === (Estado.INACTIVO as string).toLocaleUpperCase(),
              })}
            >
              {capitalizeEachWord(data.perfEst)}
            </span>
          ),
          (data: PerfilResponse) => <ButtonDropdown data={data} actionHandler={actionHandler} altActionHandler={altActionHandler} />,
        ]}
        pagination={pagination!}
        onChangePagination={selectHandler}
        onExportData={() => perfilExportFetch(reqFilters, pagination!)}
        isLoading={isLoading}
      />
    </div>
  );
};

export default PerfilesTable;
