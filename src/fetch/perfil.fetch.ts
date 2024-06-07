import { axiosAuth } from "../config/axios.config";
import { Pagination } from "../domain/interfaces/pagination/pagination.interface";
import { PerfilFilters, PerfilResponse } from "../domain/interfaces/perfil/perfil.interface";
import { filterToQuery } from "../utils/query.util";

export const perfilExportFetch = async (reqFilters: PerfilFilters, pagination: Pagination) => {
  const res = await axiosAuth
    .get(`api/perfil/pagination?${filterToQuery({ ...reqFilters, size: pagination.totalDocs, page: 0 })}`)
    .then((res) => res.data.payload)
    .catch((err) => err.response.data);
  const { data } = res;
  const dataExp = [];
  dataExp.push([
    "Codigo",
    "Nombre de perfil",
    "Descripción del perfil",
    "Detalle del perfil",
    "Estado del perfil",
    "Usuario auditoria",
    "Fecha de modifición/creación",
  ]);

  data.forEach((p: PerfilResponse) => {
    dataExp.push(
      Object.values({
        perfCod: p.perfCod,
        perfNombre: p.perfNom,
        perfDescripcion: p.perfDes,
        perfDetalle: p.perfDet,
        perfEstado: p.perfEst,
        usuMod: p.usuMod.usuNom,
        perfFechaAudit: p.fecHorMod,
      }),
    );
  });

  let csvContent = "";
  dataExp.forEach((row) => {
    csvContent += row.join(";") + "\n";
  });

  const blob = new Blob(["\ufeff", csvContent], { type: "text/csv", endings: "native" });
  const objUrl = URL.createObjectURL(blob);
  const anchor = document.createElement("a");
  anchor.href = objUrl;
  anchor.download = "perfil_data.csv";
  document.body.appendChild(anchor);
  anchor.click();
  anchor.remove();
};
