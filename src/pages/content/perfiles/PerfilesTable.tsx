import moment from "moment";
import { DataTable } from "../../../components/datatable";
import { PerfilResponse } from "../../../domain/interfaces/perfil/perfil.interface";
import { capitalizeEachWord, roleToText } from "../../../utils/string.util";
import { IconDotsVertical } from "@tabler/icons-react";
import { useAppSelector } from "../../../redux/hook";
import { RootState } from "../../../redux/store";

interface PerfilesTableProps {
  selectHandler: (name: string, value: string) => void;
}

const PerfilesTable = ({ selectHandler }: PerfilesTableProps) => {
  const { data, pagination, isLoading } = useAppSelector((state: RootState) => state.perfil);

  return (
    <div className="flex flex-col gap-3">
      <DataTable
        headers={[
          { th: "Perfil", minWidth: "min-w-64" },
          { th: "Permisos", minWidth: "min-w-80" },
          { th: "Usuario Mod", minWidth: "min-w-36" },
          { th: "Fecha Mod", minWidth: "min-w-32", order: true },
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
          (data: PerfilResponse) => <span className="rounded-lg bg-success px-3 py-[2px] text-sm text-light">{capitalizeEachWord(data.perfEst)}</span>,
          (data: PerfilResponse) => (
            <button data-id={data.perfCod}>
              <IconDotsVertical />
            </button>
          ),
        ]}
        pagination={pagination!}
        onChangePagination={selectHandler}
        isLoading={isLoading}
      />
    </div>
  );
};

export default PerfilesTable;
