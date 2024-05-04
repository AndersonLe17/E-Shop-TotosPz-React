import { IconPencilPlus, IconSearch } from "@tabler/icons-react";
import { ButtonOutline } from "../../components/button";
import { CardContent } from "../../components/card";
import { Input, SelectCustom } from "../../components/input";
import { Title } from "../../components/title";
import { Estado } from "../../domain/enums/estado.enum";
import { enumToOptions } from "../../utils/enum.util";
import { useAppDispatch, useAppSelector } from "../../redux/hook";
import { RootState } from "../../redux/store";
import { cn } from "../../config/clsx.config";
import { DataTable } from "../../components/datatable";
import { useEffect } from "react";
import { perfilPaginationThunk } from "../../redux/thunk/perfil.thunk";

const PerfilesContent = () => {
  const { isToggle } = useAppSelector((state: RootState) => state.sidebar);
  const { data, pagination /*isLoading*/ } = useAppSelector((state: RootState) => state.perfil);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(perfilPaginationThunk({}));
  }, []);

  return (
    <div className={cn("w-full bg-[#EFF3F3] ps-[272px] transition-all duration-700 ease-in-out", { "ps-[104px]": isToggle })}>
      <div className="bg-light px-10 pb-6 pt-20 shadow-title">
        <Title title="Perfiles" item="Personal" subItem="Perfiles" icon="/src/assets/img/sections/Personal.svg" />
      </div>
      <div className="px-10 pt-8">
        <CardContent className="gap-4">
          {/* Card Title */}
          <div className="py-2">
            <h3 className="font-inter text-lg">Lista de Perfiles</h3>
          </div>
          {/* Card Body */}
          <div className="flex flex-col gap-3">
            {/* Card Filters */}
            <div className="flex flex-col gap-8 md:flex-row">
              <div className="grid w-full gap-3 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
                <Input label="Perfil" placeholder="Ingrese el perfil" />
                <SelectCustom label="Estado" options={enumToOptions(Estado)} />
              </div>
              <div className="flex h-fit justify-end gap-3">
                <ButtonOutline variant="gray">
                  <IconSearch size={20} />
                  Buscar
                </ButtonOutline>
                <ButtonOutline variant="success">
                  <IconPencilPlus size={20} />
                  Agregar
                </ButtonOutline>
              </div>
            </div>
            {/* Card Content */}
            <div className="flex flex-col gap-3">
              <DataTable
                headers={[
                  { th: "Perfil", minWidth: "min-w-64" },
                  { th: "Permisos", minWidth: "min-w-80" },
                  { th: "Usuario Mod", minWidth: "min-w-36" },
                  { th: "Fecha Mod", minWidth: "min-w-32" },
                  { th: "Estado", minWidth: "min-w-28" },
                  { th: "Acciones", minWidth: "min-w-28" },
                ]}
                data={data}
                pagination={pagination!}
              />
            </div>
          </div>
        </CardContent>
      </div>
    </div>
  );
};

export default PerfilesContent;
