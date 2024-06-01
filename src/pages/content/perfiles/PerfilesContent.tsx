import { CardContent } from "../../../components/card";
import { Title } from "../../../components/title";
import { useAppDispatch, useAppSelector } from "../../../redux/hook";
import { RootState } from "../../../redux/store";
import { cn } from "../../../config/clsx.config";
import { useEffect, useState } from "react";
import { perfilPaginationThunk } from "../../../redux/thunk/perfil.thunk";
import { changeFilters } from "../../../redux/features/perfil/perfil.slice";
import { PerfilFilters } from "../../../domain/interfaces/perfil/perfil.interface";
import PerfilesFilters from "./PerfilesFilters";
import PerfilesTable from "./PerfilesTable";
import PerfilesModal from "./PerfilesModal";

const PerfilesContent = () => {
  const { isToggle } = useAppSelector((state: RootState) => state.sidebar);
  const { filters, reqFilters } = useAppSelector((state: RootState) => state.perfil);
  const dispatch = useAppDispatch();

  const [openModal, setOpenModal] = useState(false)
  useEffect(() => {
    dispatch(perfilPaginationThunk(filters));
  }, []);

  const selectHandler = (name: string, value: string) => {
    dispatch(changeFilters({ ...filters, [name]: value === "all" ? null : value }));
    ["page", "size", "sort"].includes(name) && searchHandler({ [name]: value });
  };
  const searchHandler = (tableFilter?: PerfilFilters) => {
    if (tableFilter) {
      if (tableFilter.size) tableFilter.page = 0;
      dispatch(perfilPaginationThunk({ ...reqFilters, ...tableFilter }));
    } else dispatch(perfilPaginationThunk({ ...filters, page: 0 }));
  };

  return (
    <>
      <div className={cn("w-full bg-[#EFF3F3] ps-[272px] transition-all duration-700 ease-in-out", { "ps-[104px]": isToggle })}>
        <div className="bg-light px-10 pb-6 pt-16 shadow-title">
          <Title title="Perfiles" item="Personal" subItem="Perfiles" icon="/src/assets/img/sections/Personal.svg" />
        </div>
        <div className="px-10 py-8">
          <CardContent className="gap-4">
            <div className="py-2">
              <h3 className="font-inter text-xl font-medium">Lista de Perfiles</h3>
            </div>
            {/* Card Body */}
            <div className="flex flex-col gap-3">
              <PerfilesFilters selectHandler={selectHandler} searchHandler={searchHandler} modalHandler={() => setOpenModal(true)} />
              <PerfilesTable selectHandler={selectHandler} />
            </div>
          </CardContent>
        </div>
      </div>
      <PerfilesModal open={openModal} onClose={() => setOpenModal(false)} />
    </>
  );
};

export default PerfilesContent;
